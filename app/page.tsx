import { ArrowRight, CheckCircle, Globe, Package, Star, Truck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link className="flex items-center justify-center" href="/">
            <Package className="h-7 w-7 text-orange-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              UgShopper
            </span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="/request">
              Request Item
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
          <Button variant="default" size="sm" className="md:hidden" asChild>
            <Link href="/request">Shop Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="w-fit mx-auto lg:mx-0">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Your trusted shopping service</span>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Shop from Any Global Store, Delivered to Uganda
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl mx-auto lg:mx-0 leading-relaxed">
                    We shop on your behalf from Amazon, eBay, AliExpress, and thousands of other international stores.
                    Get the products you want with secure payment and reliable delivery to Uganda.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/request">
                      Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 hover:bg-orange-50 transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium">Secure Payments</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium">Fast Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center space-y-2">
                      <Globe className="h-10 w-10 text-blue-600" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">1000+</p>
                        <p className="text-sm text-gray-600">Global Stores</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center space-y-2">
                      <Package className="h-10 w-10 text-green-600" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">5000+</p>
                        <p className="text-sm text-gray-600">Orders Delivered</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center space-y-2">
                      <Star className="h-10 w-10 text-yellow-600" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                        <p className="text-sm text-gray-600">Customer Rating</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center space-y-2">
                      <Truck className="h-10 w-10 text-orange-600" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">7-14</p>
                        <p className="text-sm text-gray-600">Days Delivery</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  How It Works
                </h2>
                <p className="max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Simple, secure, and reliable. Get your favorite products from anywhere in the world delivered to
                  Uganda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-3">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="flex flex-col items-center text-center p-8 relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Submit Your Request
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Send us the link to the product you want to buy, or describe what you're looking for. We'll find the
                    best deals for you across multiple platforms.
                  </p>
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="flex flex-col items-center text-center p-8 relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    We Shop & Pay
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team purchases your items using our international payment methods and ships them to our secure
                    warehouse for processing.
                  </p>
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="flex flex-col items-center text-center p-8 relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Delivered to You
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We consolidate your packages and ship them directly to your address in Uganda. Track your order
                    every step of the way with real-time updates.
                  </p>
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Stores Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Popular Stores We Shop From
                </h2>
                <p className="max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Access thousands of international stores and millions of products
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Amazon",
                  description: "Everything from A to Z",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "eBay",
                  description: "Buy It Now or Auction",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png",
                  color: "from-blue-500 to-purple-500",
                },
                {
                  name: "AliExpress",
                  description: "Global Shopping Made Easy",
                  logo: "https://images.icon-icons.com/2699/PNG/512/aliexpress_logo_icon_167892.png",
                  color: "from-red-500 to-orange-500",
                },
                {
                  name: "Alibaba",
                  description: "Global Trade Starts Here",
                  logo: "https://images.icon-icons.com/2232/PNG/512/alibaba_logo_icon_134594.png",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Shein",
                  description: "Fashion & Lifestyle",
                  logo: "https://static.vecteezy.com/system/resources/previews/054/650/813/large_2x/shein-logo-rounded-shein-logo-free-png.png",
                  color: "from-pink-500 to-purple-500",
                },
                {
                  name: "Temu",
                  description: "Shop Like a Billionaire",
                  logo: "https://images.seeklogo.com/logo-png/46/1/temu-logo-png_seeklogo-467490.png",
                  color: "from-blue-500 to-green-500",
                },
              ].map((store, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${store.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <CardHeader className="pb-4 pt-8">
                    <div className="flex items-center justify-center mb-4 h-20">
                      <img
                        src={store.logo || "/placeholder.svg"}
                        alt={`${store.name} logo`}
                        className="h-16 w-auto object-contain max-w-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardTitle className="text-xl text-center font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {store.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <p className="text-gray-600 text-center font-medium">{store.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Transparent Pricing
                </h2>
                <p className="max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  No hidden fees. Pay only for what you see.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="relative p-8 bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Service Fee</CardTitle>
                  <CardDescription className="text-gray-600">Our shopping service charge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-gray-900 mb-2">15%</div>
                  <p className="text-gray-600">Of item cost (minimum $5)</p>
                </CardContent>
              </Card>
              <Card className="relative p-8 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 md:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Shipping Cost</CardTitle>
                  <CardDescription className="text-gray-600">From our warehouse to Uganda</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-orange-600 mb-2">$8/kg</div>
                  <p className="text-gray-600">Minimum $15 per package</p>
                </CardContent>
              </Card>
              <Card className="relative p-8 bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Payment Methods</CardTitle>
                  <CardDescription className="text-gray-600">How you can pay us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <p className="font-semibold text-gray-900">Mobile Money</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <p className="font-semibold text-gray-900">Bank Transfer</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <p className="font-semibold text-gray-900">PayPal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Shopping?</h2>
                <p className="max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who trust us with their international shopping needs.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/request">
                    Request Your First Item <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Have questions? We're here to help you shop smarter.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/256764725740"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <p className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors mb-2">
                      +256 764 725 740
                    </p>
                  </a>
                  <p className="text-gray-600 mb-4">Available 24/7</p>
                  <a
                    href="https://wa.me/256764725740?text=Hi%20UgShopper,%20I%20need%20help%20with%20shopping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-blue-600 mb-2">hello@ugshopper.com</p>
                  <p className="text-gray-600">Response within 2 hours</p>
                </CardContent>
              </Card>
              <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-gray-900 mb-2">Kampala, Uganda</p>
                  <p className="text-gray-600">Mon-Sat: 8AM-8PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  UgShopper
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted international shopping partner. We make global shopping accessible to everyone in Uganda
                with secure payments and reliable delivery.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#how-it-works" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/request" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Request Item
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300 text-sm">Personal Shopping</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">Package Consolidation</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">Express Delivery</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">Order Tracking</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/256764725740"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    +256 764 725 740
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">hello@ugshopper.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Kampala, Uganda</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2025 UgShopper. All rights reserved.</p>
              <nav className="flex gap-6">
                <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <span className="text-gray-400 text-sm">Made with ❤️ in Uganda</span>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
