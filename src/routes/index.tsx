import { createBrowserRouter, redirect } from "react-router-dom"
import App from "../App"
import Home from "./home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />,
    loader: async ({ params, request }) => {
      if (localStorage.getItem("userId") !== null) {
        throw redirect("/login")
      }
    }
  }
])
