import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="ml-4">
          <h1 className="text-lg font-semibold">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h3 className="text-lg font-semibold">1. Information We Collect</h3>
              <p>We collect information you provide when using our shopping service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information (name, email, phone, address)</li>
                <li>Shopping requests and product preferences</li>
                <li>Payment information (processed securely by third parties)</li>
                <li>Communication records for customer support</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your shopping requests and orders</li>
                <li>Communicate with you about your orders</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Send important service updates</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">3. Information Sharing</h3>
              <p>We do not sell or rent your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping partners for delivery purposes</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">4. Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">5. Data Retention</h3>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">6. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">7. Contact Us</h3>
              <p>
                For privacy-related questions, contact us at hello@ugshopper.com or{" "}
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
