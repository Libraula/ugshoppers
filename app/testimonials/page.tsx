import Link from "next/link"
import { ArrowLeft, Star, MapPin, Calendar, Package, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/african-male-receiving-parcel-from-delivery-service-worker_181624-45377.jpg",
    name: "James Mukasa",
    location: "Kampala",
    testimonial:
      "Amazing service! Got my iPhone 15 from Amazon delivered right to my doorstep. The whole process was smooth and transparent. The team kept me updated every step of the way, from purchase to delivery. I couldn't be happier with the service!",
    item: "iPhone 15 Pro Max 256GB",
    store: "Amazon",
    deliveryTime: "12 days",
    rating: 5,
    date: "December 2024",
    verified: true,
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/63987b3b1925277bbc0fe8b0/649412bf533aff4831f3a447_Shipping-Services-For-Small-Business-Owners-In-Nigeria-Image.jpg",
    name: "Sarah Namukasa",
    location: "Mbale",
    testimonial:
      "UgShopper helped me get my business supplies from Alibaba. Professional service and great communication throughout! They helped me navigate the bulk ordering process and ensured everything arrived in perfect condition. My business is thriving thanks to them!",
    item: "Business Equipment & Supplies",
    store: "Alibaba",
    deliveryTime: "18 days",
    rating: 5,
    date: "November 2024",
    verified: true,
  },
  {
    id: 3,
    image:
      "https://www.s-ge.com/sites/default/files/styles/sge_header_lg/public/publication/images/e-commercereportsudafrika2.jpg?itok=7aH6k1o9",
    name: "David Okello",
    location: "Tororo",
    testimonial:
      "Ordered electronics from eBay and they arrived in perfect condition. The packaging was excellent and delivery was fast! I was worried about buying expensive electronics online, but UgShopper made the whole process stress-free. Will definitely use them again!",
    item: "Gaming Setup (PS5 + Accessories)",
    store: "eBay",
    deliveryTime: "10 days",
    rating: 5,
    date: "December 2024",
    verified: true,
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/african-delivery-man-woman-sign-with-portrait-package-stock-documents-front-door-people-courier-writing-with-invoice-clipboard-box-with-customer-satisfaction-apartment_590464-352922.jpg",
    name: "Grace Achieng",
    location: "Busia",
    testimonial:
      "The team at UgShopper is incredible! They found exactly what I was looking for and delivered it safely to my home. I had a very specific request for designer clothes, and they went above and beyond to find the exact items I wanted. Exceptional service!",
    item: "Designer Fashion Collection",
    store: "Multiple Stores",
    deliveryTime: "15 days",
    rating: 5,
    date: "November 2024",
    verified: true,
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/african-female-signing-proof-delivery-while-receiving-parcel-from-courier_181624-41714.jpg",
    name: "Mary Nakato",
    location: "Kapchorwa",
    testimonial:
      "Excellent customer service! They kept me updated throughout the entire process and the items arrived exactly as described. I ordered kitchen appliances for my new restaurant, and everything was perfect. The quality exceeded my expectations!",
    item: "Professional Kitchen Appliances",
    store: "Amazon",
    deliveryTime: "14 days",
    rating: 5,
    date: "October 2024",
    verified: true,
  },
  {
    id: 6,
    image: "https://img.freepik.com/free-photo/close-up-delivery-person-giving-parcel-client_23-2149095900.jpg",
    name: "Peter Wanyama",
    location: "Sironko",
    testimonial:
      "I've used UgShopper multiple times now. They're reliable, honest, and their prices are very fair. Highly recommended! From sports equipment to electronics, they've helped me get everything I need. Their consistency is what keeps me coming back.",
    item: "Sports Equipment & Gear",
    store: "Various Stores",
    deliveryTime: "11 days",
    rating: 5,
    date: "December 2024",
    verified: true,
  },
  {
    id: 7,
    image: "https://img.freepik.com/free-photo/close-up-delivery-person-giving-parcel-client_23-2149095913.jpg",
    name: "Ruth Akello",
    location: "Bukwo",
    testimonial:
      "Got my dream laptop from Amazon through UgShopper. The whole experience was seamless and professional! As a university student, I needed a reliable laptop for my studies. They helped me find the best deal and ensured it arrived safely. Thank you UgShopper!",
    item: "MacBook Pro M3",
    store: "Amazon",
    deliveryTime: "9 days",
    rating: 5,
    date: "November 2024",
    verified: true,
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/african-male-receiving-parcel-from-delivery-service-worker_181624-45377.jpg",
    name: "Robert Ssemakula",
    location: "Kampala",
    testimonial:
      "UgShopper made my wedding shopping so much easier! I was able to get decorations and accessories from international stores at great prices. The team was patient with all my questions and changes. Our wedding was perfect thanks to them!",
    item: "Wedding Decorations & Accessories",
    store: "AliExpress",
    deliveryTime: "16 days",
    rating: 5,
    date: "October 2024",
    verified: true,
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/african-female-signing-proof-delivery-while-receiving-parcel-from-courier_181624-41714.jpg",
    name: "Agnes Nabirye",
    location: "Mbale",
    testimonial:
      "As a small business owner, UgShopper has been a game-changer for me. I can now access products from global suppliers that I never could before. Their service has helped me expand my inventory and grow my business significantly.",
    item: "Beauty & Cosmetics Products",
    store: "Multiple International Suppliers",
    deliveryTime: "13 days",
    rating: 5,
    date: "December 2024",
    verified: true,
  },
]

const stats = [
  { label: "Happy Customers", value: "5,000+", icon: CheckCircle },
  { label: "Orders Delivered", value: "8,500+", icon: Package },
  { label: "Countries Shipped From", value: "25+", icon: MapPin },
  { label: "Average Rating", value: "4.9/5", icon: Star },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link className="flex items-center justify-center" href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Customer Success Stories</h1>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Real Stories, Real Deliveries
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            See how UgShopper has helped thousands of customers across Uganda get their dream products from
            international stores. Every delivery tells a story of trust, reliability, and satisfaction.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Customer Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} receiving delivery`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm font-medium">{testimonial.item}</p>
                      </div>
                      {testimonial.verified && (
                        <Badge className="bg-green-600 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {testimonial.date}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {testimonial.store}
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Delivered in {testimonial.deliveryTime}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Customers?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Start your international shopping journey today and experience the same excellent service that thousands
                of Ugandans trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                  asChild
                >
                  <Link href="/request">Start Shopping Now</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-200 hover:bg-orange-50 text-orange-600 bg-transparent"
                  asChild
                >
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
