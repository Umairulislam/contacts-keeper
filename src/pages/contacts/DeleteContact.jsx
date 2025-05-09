import { deleteContact } from "@/api/contactsApi"

import { redirect } from "react-router"
import { toast } from "sonner"

const deleteContactAction = async ({ params }) => {
  await deleteContact(params.contactId)
  toast("Contact deleted", {
    description: (
      <p className="text-foreground">Contact was removed from your list.</p>
    ),
  })

  return redirect("/contacts")
}

export default deleteContactAction
