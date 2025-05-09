import { UserTable } from "@/components"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Link } from "react-router"

function Contacts() {
  return (
    <main>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold mb-4">Contacts Management</h1>
        <Link to="/contacts/add">
          <Button>
            <Plus /> Add Contact
          </Button>
        </Link>
      </div>
      <UserTable />
    </main>
  )
}

export default Contacts
