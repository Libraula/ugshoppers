"use server"

import { createServerClient } from "./supabase"
import { revalidatePath } from "next/cache"

export interface OrderItem {
  productUrl: string
  productName: string
  quantity: number
  notes: string
}

export async function submitOrder(formData: FormData) {
  try {
    const supabase = createServerClient()

    // Extract form data
    const customerName = formData.get("customerName") as string
    const phone = formData.get("phone") as string
    const district = formData.get("district") as string
    const deliveryAddress = formData.get("deliveryAddress") as string
    const urgency = (formData.get("urgency") as string) || "standard"

    // Extract items data
    const itemsData = formData.get("items") as string
    let items: OrderItem[] = []

    try {
      items = JSON.parse(itemsData)
    } catch (e) {
      console.error("Failed to parse items data:", e)
      return { success: false, error: "Invalid items data format" }
    }

    // Validate required fields
    if (!customerName || !phone || !district || !deliveryAddress || !items.length) {
      return { success: false, error: "Please fill in all required fields" }
    }

    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing Supabase environment variables")
      return { success: false, error: "Server configuration error. Please contact support." }
    }

    // Calculate estimated costs
    const serviceFeePct = 0.15
    const shippingPerKg = 8
    const minShipping = 15
    const minServiceFee = 5

    // Placeholder cost calculation (in real app, you'd fetch actual prices)
    const estimatedItemsCost = items.length * 50 // $50 per item placeholder
    const serviceFee = Math.max(estimatedItemsCost * serviceFeePct, minServiceFee)
    const shippingCost = Math.max(items.length * 2 * shippingPerKg, minShipping) // 2kg per item placeholder
    let totalCost = estimatedItemsCost + serviceFee + shippingCost

    // Add urgency fees
    if (urgency === "fast") {
      totalCost += 20
    } else if (urgency === "express") {
      totalCost += 50
    }

    // Insert order into database
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        customer_name: customerName,
        phone: phone,
        district: district,
        delivery_address: deliveryAddress,
        urgency: urgency,
        status: "pending",
        total_estimated_cost: totalCost,
        service_fee: serviceFee,
        shipping_cost: shippingCost,
      })
      .select()
      .single()

    if (orderError) {
      console.error("Order creation error:", orderError)
      return {
        success: false,
        error: `Database error: ${orderError.message}. Please check your database connection.`,
      }
    }

    if (!order) {
      return { success: false, error: "Failed to create order - no data returned" }
    }

    // Insert order items
    const orderItems = items.map((item) => ({
      order_id: order.id,
      product_url: item.productUrl || null,
      product_name: item.productName,
      quantity: item.quantity,
      notes: item.notes || null,
    }))

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

    if (itemsError) {
      console.error("Order items creation error:", itemsError)
      // Rollback order creation
      await supabase.from("orders").delete().eq("id", order.id)
      return {
        success: false,
        error: `Failed to create order items: ${itemsError.message}`,
      }
    }

    revalidatePath("/admin")

    return {
      success: true,
      orderId: order.id,
      message: "Order submitted successfully! We will contact you within 2 hours with a detailed quote.",
    }
  } catch (error) {
    console.error("Submit order error:", error)
    return {
      success: false,
      error: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

export async function getOrders() {
  try {
    const supabase = createServerClient()

    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing Supabase environment variables")
      return { success: false, error: "Server configuration error" }
    }

    const { data: orders, error } = await supabase
      .from("orders")
      .select(`
        *,
        order_items (*)
      `)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Get orders error:", error)
      return { success: false, error: `Database error: ${error.message}` }
    }

    return { success: true, orders: orders || [] }
  } catch (error) {
    console.error("Get orders error:", error)
    return {
      success: false,
      error: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

export async function updateOrderStatus(orderId: string, status: string) {
  try {
    const supabase = createServerClient()

    const { error } = await supabase.from("orders").update({ status }).eq("id", orderId)

    if (error) {
      console.error("Update order status error:", error)
      return { success: false, error: `Failed to update order status: ${error.message}` }
    }

    revalidatePath("/admin")
    return { success: true, message: "Order status updated successfully" }
  } catch (error) {
    console.error("Update order status error:", error)
    return {
      success: false,
      error: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

// Admin authentication
export async function authenticateAdmin(password: string) {
  // Simple password authentication - in production, use proper auth
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123"

  if (password === adminPassword) {
    return { success: true, message: "Authentication successful" }
  }

  return { success: false, error: "Invalid password" }
}
