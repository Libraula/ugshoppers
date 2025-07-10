"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Database, Key, RefreshCw, AlertTriangle } from "lucide-react"

export default function DiagnosticsPage() {
  const [diagnostics, setDiagnostics] = useState({
    envVars: {
      NEXT_PUBLIC_SUPABASE_URL: false,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: false,
      SUPABASE_SERVICE_ROLE_KEY: false,
      ADMIN_PASSWORD: false,
    },
    supabaseConnection: null as boolean | null,
    databaseTables: null as boolean | null,
    loading: true,
  })

  const checkDiagnostics = async () => {
    setDiagnostics((prev) => ({ ...prev, loading: true }))

    // Check environment variables
    const envVars = {
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      ADMIN_PASSWORD: !!process.env.ADMIN_PASSWORD,
    }

    // Test Supabase connection
    let supabaseConnection = false
    let databaseTables = false

    try {
      const response = await fetch("/api/test-connection", { method: "POST" })
      const result = await response.json()
      supabaseConnection = result.connection
      databaseTables = result.tables
    } catch (error) {
      console.error("Connection test failed:", error)
    }

    setDiagnostics({
      envVars,
      supabaseConnection,
      databaseTables,
      loading: false,
    })
  }

  useEffect(() => {
    checkDiagnostics()
  }, [])

  const getStatusIcon = (status: boolean | null) => {
    if (status === null) return <RefreshCw className="h-4 w-4 animate-spin text-gray-500" />
    if (status) return <CheckCircle className="h-4 w-4 text-green-600" />
    return <AlertCircle className="h-4 w-4 text-red-600" />
  }

  const getStatusBadge = (status: boolean | null) => {
    if (status === null) return <Badge variant="outline">Testing...</Badge>
    if (status) return <Badge className="bg-green-100 text-green-800">✓ OK</Badge>
    return <Badge variant="destructive">✗ Failed</Badge>
  }

  const allEnvVarsSet = Object.values(diagnostics.envVars).filter(Boolean).length
  const totalEnvVars = Object.keys(diagnostics.envVars).length

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">System Diagnostics</h1>
          <p className="text-gray-600">Check your UgShopper configuration and connection status</p>
        </div>

        {/* Overall Status */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                <CardTitle>System Status</CardTitle>
              </div>
              <Button onClick={checkDiagnostics} disabled={diagnostics.loading} variant="outline" size="sm">
                <RefreshCw className={`h-4 w-4 mr-2 ${diagnostics.loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                  {allEnvVarsSet}/{totalEnvVars}
                </div>
                <div className="text-sm text-gray-600">Environment Variables</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  {getStatusIcon(diagnostics.supabaseConnection)}
                </div>
                <div className="text-sm text-gray-600">Supabase Connection</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">{getStatusIcon(diagnostics.databaseTables)}</div>
                <div className="text-sm text-gray-600">Database Tables</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Variables */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-orange-600" />
              <CardTitle>Environment Variables</CardTitle>
            </div>
            <CardDescription>Check if all required environment variables are set</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(diagnostics.envVars).map(([key, isSet]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(isSet)}
                    <div>
                      <span className="font-medium text-sm">{key}</span>
                      {key === "ADMIN_PASSWORD" && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Optional
                        </Badge>
                      )}
                    </div>
                  </div>
                  {getStatusBadge(isSet)}
                </div>
              ))}
            </div>

            {allEnvVarsSet < 3 && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Missing Required Variables</h4>
                    <p className="text-red-800 text-sm mt-1">
                      You need to set the first 3 environment variables for the system to work properly. Visit{" "}
                      <a href="/env-setup" className="underline font-medium">
                        Environment Setup
                      </a>{" "}
                      for detailed instructions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Connection Tests */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              <CardTitle>Connection Tests</CardTitle>
            </div>
            <CardDescription>Test your Supabase database connection and table setup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(diagnostics.supabaseConnection)}
                  <div>
                    <span className="font-medium text-sm">Supabase Connection</span>
                    <p className="text-xs text-gray-600">Can connect to your Supabase project</p>
                  </div>
                </div>
                {getStatusBadge(diagnostics.supabaseConnection)}
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(diagnostics.databaseTables)}
                  <div>
                    <span className="font-medium text-sm">Database Tables</span>
                    <p className="text-xs text-gray-600">Required tables (orders, order_items) exist</p>
                  </div>
                </div>
                {getStatusBadge(diagnostics.databaseTables)}
              </div>
            </div>

            {diagnostics.supabaseConnection === false && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Connection Failed</h4>
                    <p className="text-red-800 text-sm mt-1">
                      Cannot connect to Supabase. Check your URL and keys are correct.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {diagnostics.databaseTables === false && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-900">Tables Missing</h4>
                    <p className="text-yellow-800 text-sm mt-1">
                      Database tables not found. Run the SQL script from <code>scripts/create-tables.sql</code> in your
                      Supabase SQL editor.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common troubleshooting steps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                <a href="/env-setup" className="block text-center">
                  <Key className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Setup Environment Variables</div>
                  <div className="text-xs text-gray-600">Step-by-step configuration guide</div>
                </a>
              </Button>

              <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                <a href="/request" className="block text-center">
                  <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Test Order Form</div>
                  <div className="text-xs text-gray-600">Submit a test order</div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
