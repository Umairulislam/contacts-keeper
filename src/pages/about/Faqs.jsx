import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const Faqs = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-rose-900 flex items-center gap-2 mb-6">
        <HelpCircle className="w-7 h-7" /> Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>What is this app about?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            This app helps you manage contacts efficiently using modern frontend
            tools and design patterns.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>Is this mobile friendly?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes! The layout is fully responsive and optimised for mobile devices
            using Tailwind CSS and ShadCN UI components.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>How can I edit a contact?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Just click the “Edit” button next to a contact. You’ll be taken to a
            form where you can quickly update the details.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>Where is the data stored?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Currently, the data is stored on a mock API built with JSON Server.
            You can replace it with a real database if needed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>Can I contribute to this project?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Absolutely! You’re welcome to fork the repository, improve it, and
            submit a pull request.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Faqs
