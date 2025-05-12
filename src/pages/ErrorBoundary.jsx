// src/pages/ErrorPage.jsx
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { Link } from "react-router"

export default function ErrorBoundary() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 text-rose-900 text-center p-6">
      <AlertTriangle className="w-16 h-16 text-rose-600 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops! Page not found.</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved. Don't
        worry, let's get you back home!
      </p>
      <Button
        asChild
        variant="default"
        className="bg-rose-900 hover:bg-rose-800 text-white"
      >
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  )
}
