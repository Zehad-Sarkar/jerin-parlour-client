import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("navbar") ||
    location.pathname.includes("signup");
  return (
    <div>
      {<Navbar />}
      <Outlet />
      {noFooter || <Footer />}
    </div>
  );
};

export default Main;
