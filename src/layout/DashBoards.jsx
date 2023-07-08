import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/Auth/useAuth";

const DashBoards = () => {
  const user= useAuth();
  console.log("auth", user);
  return (
    <>
      <div className="flex justify-between mx-3 my-1">
        <h4>list</h4>
        <h3>User name:{user?.displayName}</h3>
      </div>
      <div className="grid grid-cols-5 mx-3 my-12">
        <div className="h-screen col-span-1 bg-slate-600">
          <ul className="flex flex-col px-2 text-white">
            <Link to="/dashboard/orderList">Order list</Link>
            <Link to="/dashboard/AddService">Add service</Link>
            <Link to="/dashboard/makeAdmin">Make admin</Link>
            <Link to="/dashboard/manageService">Manage service</Link>
            <Link to="/">Home</Link>
          </ul>
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoards;
