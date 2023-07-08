import { Link } from "react-router-dom";
import logo from "../../assets/logo.avif";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { user, loading } = useContext(AuthContext);
  // loading state

  if (loading) {
    return <div>Loading...</div>;
  }
  // if (user === null) {
  //   return <div>Loading...</div>;
  // }
  console.log(user);
  return (
    <div className="my-16">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
        <h3 className="text-3xl font-bold">
          Jerins <br /> Parlour
        </h3>
      </div>
      <h4 className="mt-12 mb-2 text-2xl font-bold text-center">Login With</h4>
      <SocialLogin />
      <p className="text-center">
        Don't have an account?
        <Link to="/signup" className="text-blue-400 ">
          create an account.
        </Link>
      </p>
    </div>
  );
};

export default Login;
