import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { infoData } from "@/constants"
import { InfoIcon } from "lucide-react"

const Info = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-rose-900 flex items-center gap-2">
        <InfoIcon className="w-7 h-7" /> Application Info
      </h1>

      <p className="text-muted-foreground">
        This app helps you manage your contacts more efficiently. It’s built
        with Vite + React on the frontend and NestJS on the backend. The
        interface is styled using Tailwind CSS and ShadCN UI components.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {infoData.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-900">
                <item.icon size={20} /> {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Info
