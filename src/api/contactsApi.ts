import type { Contact } from "@/types/contacts"

export const getContacts = async (): Promise<Contact[]> => {
  const response = await fetch("http://localhost:3000/contacts")
  const data = await response.json()
  return data.contacts as Contact[]
}

export const getContactById = async (uuid: string) => {
  const contacts = await getContacts()
  return contacts.find((contact) => contact.login.uuid === uuid)
}

export const addContact = async (contact: Partial<Contact>) => {
  const response = await fetch("http://localhost:3000/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  })
  if (!response.ok) {
    throw new Error("Failed to add contact")
  }
  const data = await response.json()
  return { contact: data.contact }
}

export const updateContact = async (contact: Partial<Contact>) => {
  const response = await fetch(
    `http://localhost:3000/contacts/${contact.login?.uuid}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    },
  )

  if (!response.ok) {
    throw new Error("Failed to create contact")
  }

  const data = await response.json()
  return { contact: data.contact }
}

export const deleteContact = async (contactId: string) => {
  const response = await fetch(`http://localhost:3000/contacts/${contactId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Failed to delete contact")
  }

  await response.json()
  return true
}
