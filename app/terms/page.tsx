import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="ml-4">
          <h1 className="text-lg font-semibold">Terms of Service</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Terms of Service</CardTitle>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h3 className="text-lg font-semibold">1. Service Description</h3>
              <p>
                UgShopper provides international shopping and shipping services to customers in Uganda. We purchase
                items from international retailers on behalf of our customers and arrange delivery to Uganda.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">2. How Our Service Works</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customer submits a shopping request with product details</li>
                <li>We provide a quote including item cost, service fee (15%), and shipping</li>
                <li>Customer pays the quoted amount before we make any purchases</li>
                <li>We purchase the items and ship them to our warehouse</li>
                <li>Items are consolidated and shipped to Uganda</li>
                <li>Customer receives their items with tracking information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">3. Pricing and Fees</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service fee: 15% of item cost (minimum $5 per order)</li>
                <li>Shipping: $8 per kg (minimum $15 per package)</li>
                <li>Express shipping available for additional fees</li>
                <li>All fees are disclosed upfront in our quote</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">4. Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is required in full before we purchase any items</li>
                <li>We accept Mobile Money, Bank Transfer, and PayPal</li>
                <li>Refunds are processed if items are unavailable or cancelled before purchase</li>
                <li>No refunds after items have been purchased unless defective</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">5. Delivery and Risk</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delivery timeframes are estimates and may vary</li>
                <li>We are not responsible for customs delays or fees</li>
                <li>Risk transfers to customer upon delivery in Uganda</li>
                <li>We provide tracking information when available</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">6. Prohibited Items</h3>
              <p>We cannot purchase or ship:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal or restricted items in Uganda</li>
                <li>Hazardous materials or liquids</li>
                <li>Perishable goods</li>
                <li>Items requiring special licenses</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">7. Limitation of Liability</h3>
              <p>
                Our liability is limited to the amount paid for our services. We are not responsible for product
                defects, merchant policies, or issues beyond our control.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">8. Contact Information</h3>
              <p>
                For questions about these terms, contact us at hello@ugshopper.com or{" "}
                <a
                  href="https://wa.me/256764725740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  WhatsApp +256 764 725 740
                </a>
                .
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
