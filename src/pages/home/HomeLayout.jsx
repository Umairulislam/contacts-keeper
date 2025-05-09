import { BreadCrumbs, Header } from "@/components"
import { Toaster } from "@/components/ui/sonner"
import React from "react"
import { Outlet } from "react-router"

const HomeLayout = () => {
  return (
    <main>
      <Header />
      <BreadCrumbs />
      <section className="bg-rose-50 h-screen p-6">
        <Outlet />
        <Toaster />
      </section>
    </main>
  )
}

export default HomeLayout
