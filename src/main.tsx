import ReactDOM from "react-dom/client"
import "antd/dist/reset.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>
)
