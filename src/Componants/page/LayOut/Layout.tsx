import { Outlet } from "react-router-dom"
import Nav from "../../Nav/Nav"
import Footer from "../../Footer/Footer"
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      {/* المحتوى المتغير */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
export default Layout