import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Database, Key, Shield } from "lucide-react"

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">UgShopper Setup Guide</h1>
          <p className="text-gray-600">Configure your environment variables to get started</p>
        </div>

        <div className="space-y-6">
          {/* Supabase Setup */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                <CardTitle>Supabase Database Setup</CardTitle>
              </div>
              <CardDescription>Configure your Supabase database connection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Required Environment Variables:</h4>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">NEXT_PUBLIC_SUPABASE_URL</Badge>
                    <span className="text-gray-600">Your Supabase project URL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">NEXT_PUBLIC_SUPABASE_ANON_KEY</Badge>
                    <span className="text-gray-600">Your Supabase anon key</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">SUPABASE_SERVICE_ROLE_KEY</Badge>
                    <span className="text-gray-600">Your Supabase service role key</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Database Tables Required:</h4>
                    <p className="text-blue-800 text-sm mt-1">
                      Make sure to run the SQL script in <code>scripts/create-tables.sql</code> to create the necessary
                      tables.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Admin Setup */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <CardTitle>Admin Authentication Setup</CardTitle>
              </div>
              <CardDescription>Configure admin access to the dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Optional Environment Variable:</h4>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">ADMIN_PASSWORD</Badge>
                    <span className="text-gray-600">Custom admin password (default: admin123)</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-start gap-2">
                  <Key className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900">Security Note:</h4>
                    <p className="text-orange-800 text-sm mt-1">
                      The current admin authentication is basic. For production, implement proper authentication with
                      NextAuth.js or similar.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Check */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <CardTitle>System Status</CardTitle>
              </div>
              <CardDescription>Current configuration status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Supabase URL</span>
                  <Badge variant={process.env.NEXT_PUBLIC_SUPABASE_URL ? "default" : "destructive"}>
                    {process.env.NEXT_PUBLIC_SUPABASE_URL ? "Configured" : "Missing"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Supabase Anon Key</span>
                  <Badge variant={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "default" : "destructive"}>
                    {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Configured" : "Missing"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Service Role Key</span>
                  <Badge variant={process.env.SUPABASE_SERVICE_ROLE_KEY ? "default" : "destructive"}>
                    {process.env.SUPABASE_SERVICE_ROLE_KEY ? "Configured" : "Missing"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Steps</CardTitle>
              <CardDescription>Follow these steps to get your system running</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Create a Supabase project at{" "}
                  <a href="https://supabase.com" className="text-blue-600 hover:underline">
                    supabase.com
                  </a>
                </li>
                <li>Copy your project URL and keys from the Supabase dashboard</li>
                <li>
                  Add the environment variables to your <code>.env.local</code> file
                </li>
                <li>Run the SQL script to create database tables</li>
                <li>
                  Test the order submission form at <code>/request</code>
                </li>
                <li>
                  Access the admin dashboard at <code>/admin</code>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
