import { createBrowserRouter, redirect } from "react-router-dom"
import App from "./App"
import Home from "./home"
import SchoolSearch from "./school-message"
import MajorsSearch from "./majors"
import RankSearch from "./rank"
import Wishlist from "./wish-list"
import UserCenter from "./user-center"
import { MajorsDetails } from "./majors/majors-details"
import { SchoolDetails } from "./school-message/school-detail"
import VolunteerPrediction from "./predict"

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
      },
      {
        path: "schoolSearch",
        element: <SchoolSearch />
      },
      {
        path: "schoolSearch/:schoolId/:schoolName?",
        element: <SchoolDetails />
      },
      {
        path: "majorsSearch",
        element: <MajorsSearch />
      },
      {
        path: "majorsSearch/:majorId/:majorName?",
        element: <MajorsDetails />
      },
      {
        path: "rankSearch",
        element: <RankSearch />
      },
      {
        path: "volunteerPrediction",
        element: <VolunteerPrediction />
      },
      {
        path: "wishlist",
        element: <Wishlist />
      },
      {
        path: "userCenter",
        element: <UserCenter />
      }
    ]
  }
])
