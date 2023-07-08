import React from "react";

const MakeAdmin = () => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="make admin">Make Admin</label>
        <input
          type="email"
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
