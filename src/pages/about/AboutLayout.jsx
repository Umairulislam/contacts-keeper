import { Card } from "@/components/ui/card"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import React from "react"
import { NavLink, Outlet } from "react-router"

const AboutLayout = () => {
  return (
    <main>
      <Card className="flex flex-row w-full md:w-96 mx-auto px-10">
        <NavLink
          to="info"
          className={({ isActive, isPending }) =>
            [
              "px-5 py-1 rounded transition-colors",
              isPending ? "pending" : "",
              isActive ? "bg-rose-900 text-white" : "",
            ].join(" ")
          }
        >
          Info
        </NavLink>
        <NavLink
          to="credits"
          className={({ isActive, isPending }) =>
            [
              "px-5 py-1 rounded transition-colors",
              isPending ? "pending" : "",
              isActive ? "bg-rose-900 text-white" : "",
            ].join(" ")
          }
        >
          Credits
        </NavLink>
        <NavLink
          to="faqs"
          className={({ isActive, isPending }) =>
            [
              "px-5 py-1 rounded transition-colors",
              isPending ? "pending" : "",
              isActive ? "bg-rose-900 text-white" : "",
            ].join(" ")
          }
        >
          Faqs
        </NavLink>
      </Card>

      <section className="mt-10">
        <Outlet />
      </section>
    </main>
  )
}

export default AboutLayout
