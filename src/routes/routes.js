import { contactsLoader } from "@/components/common/UserTable";
import { About, AddContact, ContactDetails, Contacts, Credits, Faqs, Home, Info, HomeLayout, UpdateContact, AboutLayout } from "@/pages";
import { addContactAction } from "@/pages/contacts/AddContact";
import { contactDetailsLoader } from "@/pages/contacts/ContactDetails";
import deleteContactAction from "@/pages/contacts/DeleteContact";
import { contactUpdateLoader, updateContactAction } from "@/pages/contacts/UpdateContact";
import {
    createBrowserRouter,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "contacts",
                Component: Contacts,
                loader: contactsLoader
            },
            {
                path: "contacts/:contactId",
                Component: ContactDetails,
                loader: contactDetailsLoader
            },
            {
                path: "contacts/add",
                Component: AddContact,
                action: addContactAction
            },
            {
                path: "contacts/:contactId/update",
                Component: UpdateContact,
                loader: contactUpdateLoader,
                action: updateContactAction
            },
            {
                path: "contacts/:contactId/delete",
                action: deleteContactAction
            },
            {
                path: "about",
                Component: AboutLayout,
                children: [
                    {
                        index: true,
                        Component: About,
                    },
                    {
                        path: "info",
                        Component: Info
                    },
                    {
                        path: "credits",
                        Component: Credits
                    },
                    {
                        path: "faqs",
                        Component: Faqs
                    }
                ]
            }
        ]
    }
])

export default router