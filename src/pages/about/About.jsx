import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutData } from "@/constants"

const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-rose-900 mb-4">About This App</h1>
      <p className="text-muted-foreground">
        Welcome! This is a modern contact management app built with{" "}
        <strong>React Router</strong>, <strong>Tailwind CSS</strong>, and{" "}
        <strong>ShadCN UI</strong>. It's designed to help you manage contacts
        easily and efficiently.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        {aboutData.map((item, index) => (
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
    </section>
  )
}

export default About
