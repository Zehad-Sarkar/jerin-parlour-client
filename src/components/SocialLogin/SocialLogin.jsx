import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);

  // google login event handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          imgURL: loggedUser.photoURL,
        };

        axios.post("http://localhost:4000/user", savedUser).then((data) => {
          //user updated
        });
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
    </div>
  );
};

export default SocialLogin;
