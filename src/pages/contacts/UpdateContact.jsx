import { getContactById, updateContact } from "@/api/contactsApi"
import { Form, redirect, useActionData, useLoaderData } from "react-router"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export const contactUpdateLoader = async ({ params }) => {
  const contact = await getContactById(params.contactId)
  return { contact }
}

export const updateContactAction = async ({ request, params }) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  if (
    !updates.firstName.trim() ||
    !updates.lastName.trim() ||
    !updates.email.trim()
  ) {
    return { message: "All fields are required." }
  }

  try {
    await updateContact({
      name: {
        first: updates.firstName,
        last: updates.lastName,
      },
      email: updates.email,
      login: {
        uuid: params.contactId,
      },
    })
    toast("Contact updated", {
      description: <p className="text-foreground">Changes have been saved.</p>,
    })

    return redirect("/contacts")
  } catch (error) {
    return { message: error.message || "Failed to update contact." }
  }
}

const UpdateContact = () => {
  const { contact } = useLoaderData()
  const error = useActionData()

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 text-center">
      <h1 className="text-xl font-bold mb-4">Update Contact</h1>

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
            defaultValue={contact.name.first}
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
            defaultValue={contact.name.last}
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
            defaultValue={contact.email}
          />
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  )
}

export default UpdateContact
