"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Database, Shield, Copy, ExternalLink, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnvSetupPage() {
  const envVars = [
    {
      name: "NEXT_PUBLIC_SUPABASE_URL",
      description: "Your Supabase project URL",
      example: "https://your-project-id.supabase.co",
      required: true,
      type: "public",
    },
    {
      name: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      description: "Your Supabase anonymous/public key",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      required: true,
      type: "public",
    },
    {
      name: "SUPABASE_SERVICE_ROLE_KEY",
      description: "Your Supabase service role key (secret)",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      required: true,
      type: "secret",
    },
    {
      name: "ADMIN_PASSWORD",
      description: "Custom admin dashboard password",
      example: "your_secure_password_123",
      required: false,
      type: "secret",
      default: "admin123",
    },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Environment Variables Setup</h1>
          <p className="text-gray-600">Configure your Supabase connection and admin access</p>
        </div>

        {/* Quick Status Check */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <CardTitle>Current Configuration Status</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {envVars.map((envVar) => {
                const isConfigured = process.env[envVar.name] !== undefined
                return (
                  <div key={envVar.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-sm">{envVar.name}</span>
                      {envVar.type === "secret" && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Secret
                        </Badge>
                      )}
                      {envVar.type === "public" && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Public
                        </Badge>
                      )}
                    </div>
                    <Badge variant={isConfigured ? "default" : "destructive"}>
                      {isConfigured ? "✓ Set" : "✗ Missing"}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Setup */}
        <div className="space-y-8">
          {/* Step 1: Supabase Setup */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                <CardTitle>Step 1: Create Supabase Project</CardTitle>
              </div>
              <CardDescription>Set up your database and get your connection keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Instructions:</h4>
                <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                  <li>
                    Go to{" "}
                    <a
                      href="https://supabase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      supabase.com
                    </a>{" "}
                    and create a free account
                  </li>
                  <li>Click "New Project" and fill in your project details</li>
                  <li>Wait for your project to be created (takes ~2 minutes)</li>
                  <li>Go to Settings → API in your project dashboard</li>
                  <li>Copy the values shown below</li>
                </ol>
              </div>

              <div className="grid gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Project URL</h5>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co")}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Template
                    </Button>
                  </div>
                  <code className="text-sm bg-white p-2 rounded border block">
                    NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
                  </code>
                  <p className="text-xs text-gray-600 mt-1">
                    Replace with your actual project URL from Supabase dashboard
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Anonymous Key</h5>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here")}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Template
                    </Button>
                  </div>
                  <code className="text-sm bg-white p-2 rounded border block">
                    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                  </code>
                  <p className="text-xs text-gray-600 mt-1">This is the "anon" key from your Supabase API settings</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Service Role Key</h5>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here")}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Template
                    </Button>
                  </div>
                  <code className="text-sm bg-white p-2 rounded border block">
                    SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                  </code>
                  <p className="text-xs text-gray-600 mt-1">This is the "service_role" key - keep this secret!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Database Setup */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-600" />
                <CardTitle>Step 2: Create Database Tables</CardTitle>
              </div>
              <CardDescription>Run the SQL script to create the necessary tables</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Instructions:</h4>
                <ol className="list-decimal list-inside space-y-2 text-purple-800 text-sm">
                  <li>Go to your Supabase project dashboard</li>
                  <li>Click on "SQL Editor" in the left sidebar</li>
                  <li>
                    Copy and paste the SQL script from <code>scripts/create-tables.sql</code>
                  </li>
                  <li>Click "Run" to execute the script</li>
                  <li>Verify tables were created in the "Table Editor"</li>
                </ol>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold">SQL Script Location</h5>
                  <Badge variant="outline">Required</Badge>
                </div>
                <code className="text-sm bg-white p-2 rounded border block">scripts/create-tables.sql</code>
                <p className="text-xs text-gray-600 mt-1">This script creates the orders and order_items tables</p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Admin Password */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <CardTitle>Step 3: Set Admin Password (Optional)</CardTitle>
              </div>
              <CardDescription>Configure a custom password for the admin dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold">Admin Password</h5>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard("ADMIN_PASSWORD=your_secure_password_123")}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy Template
                  </Button>
                </div>
                <code className="text-sm bg-white p-2 rounded border block">
                  ADMIN_PASSWORD=your_secure_password_123
                </code>
                <p className="text-xs text-gray-600 mt-1">If not set, defaults to "admin123"</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900">Security Note:</h4>
                    <p className="text-orange-800 text-sm mt-1">
                      For production use, set a strong password. The current authentication is basic - consider
                      implementing proper auth for production.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Vercel Deployment */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-green-600" />
                <CardTitle>Step 4: Add Environment Variables to Vercel</CardTitle>
              </div>
              <CardDescription>Configure your environment variables in Vercel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Instructions:</h4>
                <ol className="list-decimal list-inside space-y-2 text-green-800 text-sm">
                  <li>Go to your Vercel project dashboard</li>
                  <li>Click on "Settings" tab</li>
                  <li>Click on "Environment Variables" in the left sidebar</li>
                  <li>Add each environment variable one by one</li>
                  <li>Click "Save" after adding all variables</li>
                  <li>Redeploy your application</li>
                </ol>
              </div>

              <div className="grid gap-3">
                {envVars.map((envVar) => (
                  <div key={envVar.name} className="p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{envVar.name}</span>
                      <div className="flex gap-2">
                        {envVar.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                        {!envVar.required && (
                          <Badge variant="outline" className="text-xs">
                            Optional
                          </Badge>
                        )}
                        <Badge variant={envVar.type === "secret" ? "secondary" : "outline"} className="text-xs">
                          {envVar.type === "secret" ? "Secret" : "Public"}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{envVar.description}</p>
                    <code className="text-xs bg-white p-1 rounded border block">{envVar.example}</code>
                    {envVar.default && <p className="text-xs text-gray-500 mt-1">Default: {envVar.default}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testing */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <CardTitle>Step 5: Test Your Setup</CardTitle>
              </div>
              <CardDescription>Verify everything is working correctly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                  <a href="/request" className="block text-center">
                    <Package className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Test Order Form</div>
                    <div className="text-xs text-gray-600">Submit a test order</div>
                  </a>
                </Button>

                <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                  <a href="/admin/login" className="block text-center">
                    <Shield className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Test Admin Login</div>
                    <div className="text-xs text-gray-600">Access admin dashboard</div>
                  </a>
                </Button>

                <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                  <a href="/setup" className="block text-center">
                    <Database className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Check Status</div>
                    <div className="text-xs text-gray-600">Verify configuration</div>
                  </a>
                </Button>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Testing Checklist:</h4>
                <ul className="space-y-1 text-blue-800 text-sm">
                  <li>✓ Order form loads without errors</li>
                  <li>✓ Can submit a test order successfully</li>
                  <li>✓ Admin login works with your password</li>
                  <li>✓ Admin dashboard shows submitted orders</li>
                  <li>✓ Can update order status in admin panel</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Reference */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference - All Environment Variables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400"># Copy this template</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(`NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
ADMIN_PASSWORD=your_secure_password_123`)
                  }
                  className="text-xs"
                >
                  <Copy className="h-3 w-3 mr-1" />
                  Copy All
                </Button>
              </div>
              <div className="space-y-1">
                <div>NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co</div>
                <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here</div>
                <div>SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here</div>
                <div>ADMIN_PASSWORD=your_secure_password_123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
