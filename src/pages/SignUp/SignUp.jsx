import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FacebookLogin from "../../components/SocialLogin/FacebookLogin";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye } from "react-icons/fa";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    // console.log("password", showPassword);
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
    // console.log("pass", showPass);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // two input field password validation check
  const password = useRef({});
  password.current = watch("password", "");

  //image hosting url imgbb
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  // event handler for sign up form
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    try {
      const res = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      let imgURL = "";
      if (imgData.status) {
        imgURL = imgData.data.display_url;
      }

      const signUpUser = await createUser(
        data.email,
        data.password,
        data.confirmPassword
      );
      const userInfo = {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        imgURL,
      };

      await Promise.all([
        updateUserProfile(data.firstName + " " + data.lastName, imgURL),
        fetch("http://localhost:4000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }),
      ]);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User sign up successful",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="w-3/4 p-4 mx-auto my-20 space-y-4 border-2 rounded-md">
      <h3 className="mb-4 text-4xl font-bold">Create an account</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <div className="form-control">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            className="p-1 border-2 rounded-sm"
            placeholder="firstName"
            {...register("firstName", { required: true })}
          />
          {/* required message */}
          {errors.lastName && <span>First name is required</span>}
        </div>
        <div className="form-control">
          <label htmlFor="LastName">Last Name</label>
          <input
            className="p-1 border-2 rounded-sm"
            placeholder="lastName"
            {...register("lastName", { required: true })}
          />
          {/* required message */}
          {errors.lastName && <span>Last name is required</span>}
        </div>
        <div className="form-control">
          <label htmlFor="email">User Email</label>
          <input
            className="p-1 border-2 rounded-sm"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {/* required message */}
          {errors.email && <span>User email is required</span>}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            // type="password"
            className="p-1 border-2 rounded-sm"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: /^[A-Z]/,
              minLength: 8,
              maxLength: 20,
            })}
          />
          <p onClick={handleShowPassword}>
            <FaRegEye />
          </p>
          {/* required message */}
          {errors.password && (
            <span>Password is required 8 charecter and must one capital</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="confirmPass">Confirm Password</label>
          <input
            // type="password"
            type={showPass ? "text" : "password"}
            className="p-1 border-2 rounded-sm"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password.current || "password do not match",
            })}
          />
          <p onClick={handleShowPass}>
            <FaRegEye />
          </p>
          {/* required message */}
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="service photo">Service Photo</label>
          <input type="file" className="border-2" {...register("photo")} />
        </div>

        <input
          type="submit"
          value="Create account"
          className="mt-2 btn btn-primary w-52"
        />
        <p>
          Already have an account?
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </form>
      <div className="divider">Or</div>
      <FacebookLogin />
      <SocialLogin />
    </div>
  );
};

export default SignUp;
