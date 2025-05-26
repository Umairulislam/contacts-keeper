import { Button } from "../ui/button"
import { MoveRight, Plus } from "lucide-react"
import { homeData } from "@/constants"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Link } from "react-router"

const Hero = () => {
  return (
    <main className="max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Manage Your Contacts Effortlessly
        </h1>
        <p className="text-lg mb-6">
          Add, view, update and organize all your contacts in one place
        </p>
        <div className="flex gap-2 justify-center">
          <Link to="/contacts/add">
            <Button>
              <Plus />
              Add Contact
            </Button>
          </Link>
          <Link to="/contacts">
            <Button variant="outline">
              <MoveRight />
              View Contact
            </Button>
          </Link>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {homeData.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-900">
                <item.icon size={20} />
                {item.title}
              </CardTitle>
              <CardContent className="text-muted-foreground">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  )
}

export default Hero
