import { createBrowserRouter, redirect } from "react-router-dom"
import App from "./App"
import Home from "./home"
import SchoolSearch from "./school-message"
import MajorsSearch from "./special"
import RankSearch from "./rank"
import AIPrediction from "./predict"
import AboutAs from "./about"
import Wishlist from "./wish-list"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
        // loader: async ({ params, request }) => {
        //   if (localStorage.getItem("userId") !== null) {
        //     throw redirect("/login")
        //   }
        // }
      },
      {
        path: "schoolSearch",
        element: <SchoolSearch />
      },
      {
        path: "majorsSearch",
        element: <MajorsSearch />
      },
      {
        path: "rankSearch",
        element: <RankSearch />
      },
      {
        path: "AIPrediction",
        element: <AIPrediction />
      },
      {
        path: "wishlist",
        element: <Wishlist />
      },
      {
        path: "aboutAs",
        element: <AboutAs />
      }
    ]
  }
])
