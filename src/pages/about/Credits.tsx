import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { creditData } from "@/constants"
import { Sparkles } from "lucide-react"

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
      </div>
    </div>
  )
}

export default Credits
