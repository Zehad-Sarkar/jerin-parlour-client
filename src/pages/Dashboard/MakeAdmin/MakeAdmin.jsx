import axios from "axios";
import React from "react";

const MakeAdmin = () => {
  const handleAdmin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    axios.patch(`http://localhost:4000/makeAdmin/${email}`).then((data) => {
      // console.log(data.data);
      //update message
    });
  };
  return (
    <form onSubmit={handleAdmin}>
      <div className="form-control">
        <label htmlFor="make admin">Make Admin</label>
        <input
          type="email"
          name="email"
          className="border-2"
          placeholder="type your email address"
        />
      </div>

      <input
        type="submit"
        value="Make Admin"
        className=" btn btn-primary w-36"
      />
    </form>
  );
};

export default MakeAdmin;
