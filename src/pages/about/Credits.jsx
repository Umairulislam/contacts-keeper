import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { creditData } from "@/constants"
import { Sparkles, Code, Server, Palette, ShieldUser } from "lucide-react"

const Credits = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-rose-900 flex items-center gap-2">
        <Sparkles className="w-7 h-7" /> Credits
      </h1>

      <p className="text-muted-foreground ">
        This project wouldn't have been possible without these amazing tools and
        libraries. Here's a list of the core technologies used:
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {creditData.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-900">
                <item.icon size={20} /> {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {item.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </CardContent>
          </Card>
        ))}
        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-900">
              <Code className="w-5 h-5" /> Frontend
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-1">
            <p>⚛️ React + Vite</p>
            <p>🎨 Tailwind CSS</p>
            <p>🧩 ShadCN UI</p>
            <p>🌐 React Router</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-900">
              <Server className="w-5 h-5" /> Backend
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-1">
            <p>🚀 NestJS</p>
            <p>🛠️ RESTful API</p>
            <p>📦 JSON Server (for mock data)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-900">
              <Palette className="w-5 h-5" /> Design & Icons
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-1">
            <p>🎯 Lucide React</p>
            <p>✨ ShadCN Theme System</p>
            <p>🎨 Custom Tailwind Theme (Rose variant)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-900">
              <ShieldUser /> Developer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Designed and developed by{" "}
            <span className="text-rose-900 font-semibold">Umair</span> as part
            of a learning project.
          </CardContent>
        </Card> */}
      </div>
    </div>
  )
}

export default Credits
