import { Contact } from "lucide-react"
import { NavLink } from "react-router"

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between px-6 py-4 gap-4 bg-rose-900 text-background font-bold">
      <div>
        <h1 className="flex items-center gap-1">
          <Contact />
          Contacts Keeper
        </h1>
      </div>
      <div className="flex gap-4 ">
        <NavLink
          to={"/"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "text-rose-200 border-b-2 border-rose-200" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "text-rose-200 border-b-2 border-rose-200" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          About
        </NavLink>
        <NavLink
          to={"contacts"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "text-rose-200 border-b-2 border-rose-200" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Contact
        </NavLink>
      </div>
    </header>
  )
}

export default Header
