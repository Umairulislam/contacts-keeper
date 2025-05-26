import { getContactById } from "@/api/contactsApi"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, useLoaderData, type LoaderFunctionArgs } from "react-router"

export const contactDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.contactId) {
    throw new Response("Contact Id not found", {
      status: 404,
    })
  }
  const contact = await getContactById(params.contactId)
  return { contact }
}

const ContactDetails = () => {
  const { contact } = useLoaderData() as Awaited<
    ReturnType<typeof contactDetailsLoader>
  >

  return (
    <main>
      <Card className="w-full sm:w-[350px] mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-xl text-center font-bold">
            Contact Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Avatar className="w-14 h-14 mb-4 mx-auto">
              <AvatarImage
                src={contact?.picture?.thumbnail}
                alt={contact?.name.first}
              />
              <AvatarFallback>
                {contact?.name.first[0]}
                {contact?.name.first[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center gap-4 ">
            <h1 className="font-bold">Name:</h1>
            <p>
              {contact?.name.first} {contact?.name.last}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-bold">Email:</h1>
            <p>{contact?.email}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Form
            method="post"
            action={`/contacts/${contact?.login.uuid}/delete`}
            onSubmit={(e) => {
              if (!confirm("Are you sure you want to delete this contact?")) {
                e.preventDefault()
              }
            }}
          >
            <Button>Delete</Button>
          </Form>
        </CardFooter>
      </Card>
    </main>
  )
}

export default ContactDetails
