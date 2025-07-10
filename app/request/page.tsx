"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, Plus, Trash2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { submitOrder } from "@/lib/actions"

interface RequestItem {
  id: string
  productUrl: string
  productName: string
  quantity: number
  notes: string
}

const DISTRICTS = [
  { value: "busia", label: "Busia" },
  { value: "tororo", label: "Tororo" },
  { value: "mbale", label: "Mbale" },
  { value: "kapchorwa", label: "Kapchorwa" },
  { value: "sironko", label: "Sironko" },
  { value: "bukwo", label: "Bukwo" },
]

export default function RequestPage() {
  const [items, setItems] = useState<RequestItem[]>([
    { id: "1", productUrl: "", productName: "", quantity: 1, notes: "" },
  ])
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    district: "",
    address: "",
    urgency: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error">("success")

  const addItem = () => {
    const newItem: RequestItem = {
      id: Date.now().toString(),
      productUrl: "",
      productName: "",
      quantity: 1,
      notes: "",
    }
    setItems([...items, newItem])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof RequestItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const formData = new FormData()
      formData.append("customerName", customerInfo.name)
      formData.append("phone", customerInfo.phone)
      formData.append("district", customerInfo.district)
      formData.append("deliveryAddress", customerInfo.address)
      formData.append("urgency", customerInfo.urgency)
      formData.append(
        "items",
        JSON.stringify(
          items.map((item) => ({
            productUrl: item.productUrl,
            productName: item.productName,
            quantity: item.quantity,
            notes: item.notes,
          })),
        ),
      )

      const result = await submitOrder(formData)

      if (result.success) {
        setMessageType("success")
        setSubmitMessage(result.message || "Order submitted successfully!")
        // Reset form
        setItems([{ id: "1", productUrl: "", productName: "", quantity: 1, notes: "" }])
        setCustomerInfo({
          name: "",
          phone: "",
          district: "",
          address: "",
          urgency: "",
          agreeToTerms: false,
        })
      } else {
        setMessageType("error")
        setSubmitMessage(result.error || "Failed to submit order. Please try again.")
      }
    } catch (error) {
      setMessageType("error")
      setSubmitMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 py-3">
          <div className="flex items-center gap-4">
            <Link className="flex items-center justify-center shrink-0" href="/">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">Back</span>
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-sm sm:text-lg font-semibold truncate">Request Shopping Service</h1>
            </div>
            <div className="w-12 sm:w-16"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Introduction */}
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="text-center p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                Submit Your Shopping Request
              </CardTitle>
              <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-4">
                Fill out this form with the items you want us to purchase for you. We'll get back to you within 2 hours
                with a detailed quote including all costs.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Success/Error Message */}
          {submitMessage && (
            <Card
              className={`border-2 ${
                messageType === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
              }`}
            >
              <CardContent className="p-4">
                <p className={`text-sm font-medium ${messageType === "success" ? "text-green-800" : "text-red-800"}`}>
                  {submitMessage}
                </p>
              </CardContent>
            </Card>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Items Section */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Items to Purchase</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                  Add the products you want us to buy for you. Include product links when possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="border-2 border-gray-100 rounded-xl p-4 sm:p-6 space-y-4 hover:border-orange-200 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base sm:text-lg text-gray-900">Item {index + 1}</h3>
                      {items.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 sm:h-auto sm:w-auto sm:px-3"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only sm:not-sr-only sm:ml-2">Remove</span>
                        </Button>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor={`url-${item.id}`} className="text-xs sm:text-sm font-medium text-gray-700">
                          Product URL (if available)
                        </Label>
                        <Input
                          id={`url-${item.id}`}
                          placeholder="https://amazon.com/product-link"
                          value={item.productUrl}
                          onChange={(e) => updateItem(item.id, "productUrl", e.target.value)}
                          className="border-2 focus:border-orange-500 transition-colors text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`name-${item.id}`} className="text-xs sm:text-sm font-medium text-gray-700">
                          Product Name/Description *
                        </Label>
                        <Input
                          id={`name-${item.id}`}
                          placeholder="iPhone 15 Pro Max 256GB Blue"
                          value={item.productName}
                          onChange={(e) => updateItem(item.id, "productName", e.target.value)}
                          required
                          className="border-2 focus:border-orange-500 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor={`quantity-${item.id}`} className="text-xs sm:text-sm font-medium text-gray-700">
                          Quantity *
                        </Label>
                        <Input
                          id={`quantity-${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, "quantity", Number.parseInt(e.target.value) || 1)}
                          required
                          className="border-2 focus:border-orange-500 transition-colors text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`notes-${item.id}`} className="text-xs sm:text-sm font-medium text-gray-700">
                          Special Notes
                        </Label>
                        <Input
                          id={`notes-${item.id}`}
                          placeholder="Color preference, size, etc."
                          value={item.notes}
                          onChange={(e) => updateItem(item.id, "notes", e.target.value)}
                          className="border-2 focus:border-orange-500 transition-colors text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addItem}
                  className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-300 text-blue-700 hover:text-blue-800 transition-all duration-300 h-12 text-sm sm:text-base"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Item
                </Button>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Your Information</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                  We need this information to contact you and deliver your items.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      required
                      className="border-2 focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+256 764 725 740"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      required
                      className="border-2 focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="district" className="text-xs sm:text-sm font-medium text-gray-700">
                      District *
                    </Label>
                    <Select
                      value={customerInfo.district}
                      onValueChange={(value) => setCustomerInfo({ ...customerInfo, district: value })}
                      required
                    >
                      <SelectTrigger className="border-2 focus:border-orange-500 transition-colors text-sm">
                        <SelectValue placeholder="Select your district" />
                      </SelectTrigger>
                      <SelectContent>
                        {DISTRICTS.map((district) => (
                          <SelectItem key={district.value} value={district.value}>
                            {district.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-xs sm:text-sm font-medium text-gray-700">
                      How urgent is this order?
                    </Label>
                    <Select
                      value={customerInfo.urgency}
                      onValueChange={(value) => setCustomerInfo({ ...customerInfo, urgency: value })}
                    >
                      <SelectTrigger className="border-2 focus:border-orange-500 transition-colors text-sm">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (2-3 weeks)</SelectItem>
                        <SelectItem value="fast">Fast (1-2 weeks) - Extra $20</SelectItem>
                        <SelectItem value="express">Express (5-7 days) - Extra $50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-xs sm:text-sm font-medium text-gray-700">
                    Delivery Address *
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Plot 123, Street Name, Neighborhood, Busia"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    required
                    className="border-2 focus:border-orange-500 transition-colors min-h-[80px] sm:min-h-[100px] text-sm resize-none"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-4 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={customerInfo.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setCustomerInfo({ ...customerInfo, agreeToTerms: checked as boolean })
                      }
                      required
                      className="mt-1 shrink-0"
                    />
                    <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed text-gray-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-orange-600 hover:text-orange-700 font-medium underline">
                        Terms of Service
                      </Link>{" "}
                      and understand that I will pay the quoted amount before items are purchased.
                    </Label>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-orange-200">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">What happens next?</h4>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span>We'll review your request and send you a detailed quote within 2 hours</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span>The quote will include item costs, our service fee (15%), and shipping costs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span>Once you approve and pay, we'll purchase your items immediately</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span>You'll receive tracking information and regular updates</span>
                      </li>
                    </ul>
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                      <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-900">
                        Need help? Contact us on WhatsApp:
                      </p>
                      <a
                        href="https://wa.me/256764725740?text=Hi%20UgShopper,%20I%20need%20help%20with%20my%20shopping%20request"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full"
                      >
                        <Button
                          variant="outline"
                          type="button"
                          className="w-full bg-green-50 border-2 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 transition-all duration-300 h-10 sm:h-12 text-xs sm:text-sm"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          <span className="hidden xs:inline">Chat on WhatsApp: </span>
                          <span className="font-medium">+256 764 725 740</span>
                        </Button>
                      </a>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={!customerInfo.agreeToTerms || isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base lg:text-lg py-4 sm:py-6 h-12 sm:h-14 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Shopping Request
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
    </div>
  )
}
