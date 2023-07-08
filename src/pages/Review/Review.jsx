import React from "react";

const Review = () => {
  return (
    <div className="">
      <form className="px-4 py-1 border-2">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" className="p-2 border-2" placeholder="full name" />
        </div>
        <div className="form-control">
          <label htmlFor="companyName">Name</label>
          <input
            type="text"
            className="p-2 border-2"
            placeholder="company name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">description</label>
          <textarea
            name="textarea"
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
