import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const FacebookLogin = () => {
  return (
    <div className="my-20 text-center">
      <div>
        <button className="flex items-center justify-center gap-4 p-3 mx-auto mb-2 border-2 btn w-80 rounded-3xl">
          <FaFacebook className="text-3xl" /> Continue with facebook
        </button>
      </div>
    </div>
  );
};

export default FacebookLogin;
