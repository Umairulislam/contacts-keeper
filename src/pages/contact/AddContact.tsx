import { addContact } from "@/api/contactsApi"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  redirect,
  useActionData,
  type ActionFunction,
} from "react-router"
import { toast } from "sonner"

export const addContactAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  const firstName = updates.firstName?.toString()
  const lastName = updates.lastName?.toString()
  const email = updates.email?.toString()

  if (!firstName || !lastName || !email) {
    return { message: "All fields are required." }
  }

  try {
    await addContact({
      name: {
        first: firstName,
        last: lastName,
      },
      email: email,
    })
    toast("Contact added", {
      description: (
        <p className="text-foreground">New contact saved successfully.</p>
      ),
    })

    return redirect("/contacts")
  } catch (error) {
    return { message: (error as Error).message || "Failed to add contact." }
  }
}

const AddContact = () => {
  const error = useActionData() as { message?: string } | undefined

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 text-center">
      <h1 className="text-xl font-bold mb-4">Add Contact</h1>

      {error && (
        <div className="mb-4 text-rose-500 font-medium">
          {error.message || "Please fix the errors."}
        </div>
      )}

      <Form action="./" method="post" className="space-y-4">
        <div>
          <Label htmlFor="firstName" className="mb-1">
            First Name
          </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="mb-1">
            Last Name
          </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-1">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  )
}

export default AddContact
