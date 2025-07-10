import { createServerClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const supabase = createServerClient()

    // Test basic connection
    let connection = false
    let tables = false

    try {
      // Test connection by trying to query orders table
      const { data: ordersTest, error: connectionError } = await supabase.from("orders").select("id").limit(1)

      connection = !connectionError

      if (connection) {
        // Test if our tables exist and have proper structure
        const { data: ordersTable, error: ordersError } = await supabase.from("orders").select("id").limit(1)

        const { data: itemsTable, error: itemsError } = await supabase.from("order_items").select("id").limit(1)

        // Tables exist if we can query them (even if empty)
        tables = !ordersError && !itemsError
      }
    } catch (error) {
      console.error("Connection test error:", error)
    }

    return NextResponse.json({
      connection,
      tables,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Test connection API error:", error)
    return NextResponse.json(
      {
        connection: false,
        tables: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
