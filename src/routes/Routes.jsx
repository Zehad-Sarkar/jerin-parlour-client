import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../sharedPages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Book from "../pages/Book/Book";
import BookingList from "../pages/BookingList/BookingList";
import Review from "../pages/Review/Review";
import DashBoards from "../layout/DashBoards";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AddService from "../pages/Dashboard/AddService/AddService";
import ManageService from "../pages/Dashboard/ManageService/ManageService";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "booking",
      //   element: <Book />,
      // },
      // {
      //   path: "bookingList",
      //   element: <BookingList />,
      // },
      // {
      //   path: "review",
      //   element: <Review />,
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoards />,
    children: [
      {
        path: "orderList",
        element: <OrderList />,
      },
      {
        path: "addService",
        element: <AddService />,
      },
      {
        path: "makeAdmin",
        element: <MakeAdmin />,
      },
      {
        path: "manageService",
        element: <ManageService />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "bookingList",
        element: <BookingList />,
      },
      {
        path: "review",
        element: <Review />,
      },
    ],
  },
]);
