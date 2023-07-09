import axios from "axios";
import React from "react";
import useAuth from "../../hooks/Auth/useAuth";
import Swal from "sweetalert2";

const Review = () => {
  const user = useAuth();
  const handleReviews = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const companyName = e.target.companyName.value;
    const message = e.target.description.value;
    const reviews = {
      name,
      companyName,
      email: user.email,
      message,
      image: user?.photoURL,
    };

    axios.post("http://localhost:4000/reviews", reviews).then((res) => {
      if (res.data.insertedId) {
        e.target.reset(); //reset the form
        //update ui message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your reviews has been success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="">
      <form className="px-4 py-1 border-2" onSubmit={handleReviews}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="p-2 border-2"
            placeholder="full name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="p-2 border-2"
            placeholder="company name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            className="w-3/5 border-2 resize-none"
          ></textarea>
        </div>
        <input type="submit" value="submit" className="w-32 btn btn-primary" />
      </form>
    </div>
  );
};

export default Review;
