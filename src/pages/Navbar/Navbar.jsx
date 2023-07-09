import { Link } from "react-router-dom";
import logo from "../../assets/logo.avif";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, loading, userLogout } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }

  // logout event handler
  const handleLogout = () => {
    userLogout()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navMenu = (
    <>
      <li>
        <Link className="ml-4" to="/">
          Home
        </Link>
      </li>
      {/* <li>
        <Link to="/booking" className="ml-4">
          Booking
        </Link>
      </li> */}
      <li>
        <Link className="ml-4" to="/">
          Our Team
        </Link>
      </li>
      <li>
        <Link className="ml-4" to="/">
          Contact Us
        </Link>
      </li>
      {user && user ? (
        <>
          <li>
            <Link className="ml-4" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link onClick={handleLogout}>
              <p className="ml-4 mr-4">Logout</p>
            </Link>
          </li>
          <li>
            <Link>
              <img
                className="w-12 h-12 rounded-full"
                src={user ? user?.photoURL : ""}
                alt="no user photo available"
                title={user?.displayName}
              />
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <p className="ml-4">Login</p>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <p className="ml-4 ">Sign up</p>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="flex justify-between">
      <div className="">
        <img src={logo} alt="logo" className="w-12 h-12 mr-3 rounded-full" />
        <h2 className="text-4xl font-extrabold">Jerins Parlour</h2>
      </div>
      <div>
        <ul className="flex items-center p-2 mt-3 font-bold shadow bg-base-100 rounded-box">
          {navMenu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
