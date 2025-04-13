import { RouterProvider } from "react-router-dom"
import router from "./routes"
import Layout from "./Componants/page/LayOut/Layout"

const App = () => {


  return (
    <>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </>
  )
}

export default App
