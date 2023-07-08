import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);

  // google login event handler
  const handleGoogleLogin = () => {
     
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/");
  };
  return (
    <div className="my-2 text-center">
      <div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-4 p-3 mx-auto mb-2 border-2 btn w-80 rounded-3xl"
        >
          <FaGoogle className="text-3xl" /> Continue with google
        </button>
      </div>
      {/* <p>
        Don't have an account?
        <Link to="/signup" className="text-blue-400">
          create an account.
        </Link>
      </p> */}
    </div>
  );
};

export default SocialLogin;
