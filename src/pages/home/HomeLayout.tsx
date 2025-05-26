import { BreadCrumbs, Header } from "@/components"
import { Outlet, useLocation } from "react-router"
import { Toaster } from "sonner"

const HomeLayout = () => {
  const location = useLocation()

  return (
    <main>
      <Header />
      {location.pathname !== "/" && <BreadCrumbs />}

      <section className="bg-rose-50 h-screen p-6">
        <Outlet />
        <Toaster />
      </section>
    </main>
  )
}

export default HomeLayout
