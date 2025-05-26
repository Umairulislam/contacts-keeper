import { deleteContact } from "@/api/contactsApi"

import { redirect, type ActionFunction } from "react-router"
import { toast } from "sonner"

const deleteContactAction: ActionFunction = async ({ params }) => {
  await deleteContact(params.contactId!)
  toast("Contact deleted", {
    description: (
      <p className="text-foreground">Contact was removed from your list.</p>
    ),
  })

  return redirect("/contacts")
}

export default deleteContactAction
