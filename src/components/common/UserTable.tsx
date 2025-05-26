import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Eye, PencilLine, Trash2 } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"
import { useState } from "react"
import { getContacts } from "@/api/contactsApi"
import { Form, Link, useLoaderData } from "react-router"
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip"
import { TooltipTrigger } from "@radix-ui/react-tooltip"

const tableHead: string[] = [
  "Avatar",
  "First Name",
  "Last Name",
  "Email",
  "Action",
]

export const contactsLoader = async () => {
  const contacts = await getContacts()
  return { contacts }
}

const UserTable = () => {
  const { contacts } = useLoaderData() as Awaited<
    ReturnType<typeof contactsLoader>
  >
  const [page, setPage] = useState<number>(1)
  const PER_PAGE = 5

  const totalPages = Math.ceil(contacts.length / PER_PAGE)
  const currentContacts = contacts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  return (
    <main>
      <Table className="border border-rose-900 text-base">
        <TableHeader>
          <TableRow>
            {tableHead.map((header, index) => (
              <TableHead key={index} className="text-white bg-rose-900 ">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentContacts.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={contact?.picture?.thumbnail}
                    alt={contact?.name.first}
                  />
                  <AvatarFallback>
                    {contact.name.first[0]}
                    {contact.name.first[0]}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{contact?.name.first}</TableCell>
              <TableCell>{contact?.name.last}</TableCell>
              <TableCell>{contact?.email}</TableCell>
              <TableCell className="space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link to={`/contacts/${contact.login.uuid}`}>
                        <Button variant="outline" size="icon">
                          <Eye />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link to={`/contacts/${contact.login.uuid}/update`}>
                        <Button variant="outline" size="icon">
                          <PencilLine />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Update</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Form
                        method="post"
                        action={`/contacts/${contact.login.uuid}/delete`}
                        onSubmit={(e) => {
                          if (
                            !confirm(
                              "Are you sure you want to delete this contact?",
                            )
                          ) {
                            e.preventDefault()
                          }
                        }}
                      >
                        <Button variant="outline" size="icon">
                          <Trash2 />
                        </Button>
                      </Form>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination className="mt-1">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="text-sm text-muted-foreground px-2">
              Page {page} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={
                page === totalPages ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  )
}

export default UserTable
