import { contactsLoader } from "@/components/common/UserTable"
import {
  About,
  AboutLayout,
  AddContact,
  ContactDetails,
  Contacts,
  Credits,
  ErrorBoundary,
  Faqs,
  Home,
  HomeLayout,
  Info,
  UpdateContact,
} from "@/pages"
import { addContactAction } from "@/pages/contact/AddContact"
import { contactDetailsLoader } from "@/pages/contact/ContactDetails"
import deleteContactAction from "@/pages/contact/DeleteContact"
import {
  contactUpdateLoader,
  updateContactAction,
} from "@/pages/contact/UpdateContact"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contacts",
        Component: Contacts,
        loader: contactsLoader,
      },
      {
        path: "contacts/:contactId",
        Component: ContactDetails,
        loader: contactDetailsLoader,
      },
      {
        path: "contacts/add",
        Component: AddContact,
        action: addContactAction,
      },
      {
        path: "contacts/:contactId/update",
        Component: UpdateContact,
        loader: contactUpdateLoader,
        action: updateContactAction,
      },
      {
        path: "contacts/:contactId/delete",
        action: deleteContactAction,
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
            Component: Info,
          },
          {
            path: "credits",
            Component: Credits,
          },
          {
            path: "faqs",
            Component: Faqs,
          },
        ],
      },
    ],
  },
])

export default router
