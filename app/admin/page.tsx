"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Phone,
  MapPin,
  RefreshCwIcon as Refresh,
  LogOut,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getOrders, updateOrderStatus } from "@/lib/actions"

interface OrderItem {
  id: string
  product_name: string
  product_url?: string
  quantity: number
  notes?: string
}

interface Order {
  id: string
  customer_name: string
  phone: string
  district: string
  delivery_address: string
  urgency: string
  status: string
  total_estimated_cost?: number
  service_fee?: number
  shipping_cost?: number
  created_at: string
  order_items: OrderItem[]
}

const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  processing: "bg-blue-100 text-blue-800 border-blue-200",
  purchased: "bg-purple-100 text-purple-800 border-purple-200",
  shipped: "bg-orange-100 text-orange-800 border-orange-200",
  delivered: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
}

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "purchased", label: "Purchased" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [updating, setUpdating] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authStatus = sessionStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
      loadOrders()
    } else {
      router.push("/admin/login")
    }
    setIsCheckingAuth(false)
  }, [router])

  const loadOrders = async () => {
    setLoading(true)
    setError("")
    try {
      const result = await getOrders()
      if (result.success) {
        setOrders(result.orders || [])
      } else {
        setError(result.error || "Failed to load orders")
      }
    } catch (err) {
      setError("Network error - please check your connection")
    }
    setLoading(false)
  }

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    setUpdating(orderId)
    try {
      const result = await updateOrderStatus(orderId, newStatus)
      if (result.success) {
        await loadOrders()
      } else {
        setError(result.error || "Failed to update status")
      }
    } catch (err) {
      setError("Network error - please try again")
    }
    setUpdating(null)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated")
    router.push("/admin/login")
  }

  const filteredOrders = selectedStatus === "all" ? orders : orders.filter((order) => order.status === selectedStatus)

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    totalValue: orders.reduce((sum, order) => sum + (order.total_estimated_cost || 0), 0),
  }

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">UgShopper Admin Dashboard</h1>
                <p className="text-gray-600">Manage orders and monitor business performance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={loadOrders} variant="outline" disabled={loading}>
                <Refresh className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="text-red-600 hover:text-red-700 bg-transparent"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Connection Status */}
        <Card className="mb-6 border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <p className="text-green-800 font-medium">
                Admin authenticated • Database connected • {orders.length} orders loaded
              </p>
            </div>
          </CardContent>
        </Card>

        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800">{error}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing</CardTitle>
              <AlertCircle className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.processing}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Delivered</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.delivered}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalValue.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  {STATUS_OPTIONS.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Orders ({filteredOrders.length})</h2>

          {filteredOrders.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  {orders.length === 0
                    ? "No orders found. Database may be empty or disconnected."
                    : "No orders match the current filter."}
                </p>
                {orders.length === 0 && (
                  <Button onClick={loadOrders} className="mt-4 bg-transparent" variant="outline">
                    <Refresh className="h-4 w-4 mr-2" />
                    Retry Connection
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{order.customer_name}</CardTitle>
                      <CardDescription>
                        Order #{order.id.slice(0, 8)} • {new Date(order.created_at).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={STATUS_COLORS[order.status as keyof typeof STATUS_COLORS]}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                      <Select
                        value={order.status}
                        onValueChange={(value) => handleStatusUpdate(order.id, value)}
                        disabled={updating === order.id}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {STATUS_OPTIONS.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Customer Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{order.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm capitalize">{order.district}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm capitalize">{order.urgency}</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Delivery Address:</h4>
                    <p className="text-sm text-gray-600">{order.delivery_address}</p>
                  </div>

                  {/* Items */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Items ({order.order_items.length}):</h4>
                    <div className="space-y-2">
                      {order.order_items.map((item) => (
                        <div key={item.id} className="flex items-start justify-between p-3 bg-white border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.product_name}</p>
                            {item.product_url && (
                              <a
                                href={item.product_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:underline"
                              >
                                View Product
                              </a>
                            )}
                            {item.notes && <p className="text-xs text-gray-500 mt-1">Note: {item.notes}</p>}
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  {order.total_estimated_cost && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Cost Estimate:</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Service Fee:</span>
                          <span>${order.service_fee?.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping Cost:</span>
                          <span>${order.shipping_cost?.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium border-t pt-1">
                          <span>Total Estimate:</span>
                          <span>${order.total_estimated_cost.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
