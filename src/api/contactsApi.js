export const getContacts = async () => {
    const response = await fetch("http://localhost:3000/contacts")
    const data = await response.json()
    return data.contacts
}

export const getContactById = async (uuid) => {
    const contacts = await getContacts()
    return contacts.find((contact) => contact.login.uuid === uuid)
}

export const addContact = async (contact) => {
    const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact)
    })
    if (!response.ok) {
        throw new Error("Failed to add contact")
    }
    const data = await response.json()
    return { copntact: data.contact }
}

export const updateContact = async (contact) => {
    const response = await fetch(`http://localhost:3000/contacts/${contact.login?.uuid}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact)
    })

    if (!response.ok) {
        throw new Error("Failed to create contact")
    }

    const data = await response.json()
    return { contact: data.contact }
}

export const deleteContact = async (contactId) => {
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