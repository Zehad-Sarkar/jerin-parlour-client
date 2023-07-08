import React from "react";

const AddService = () => {
  return (
    <form className="w-3/4 mx-auto">
      <h4 className="text-4xl font-bold">add a service</h4>
      <div className="form-control">
        <label htmlFor="service title">Service Title</label>
        <input type="text" className="border-2" />
      </div>
      <div className="form-control">
        <label htmlFor="service photo">Service Photo</label>
        <input type="file" className="border-2" />
      </div>
      <div className="form-control">
        <label htmlFor="service description">Service Description</label>
        <textarea
          type="text"
          col="30"
          rows="5"
          className="w-3/4 border-2 rounded-md resize-none"
        />
      </div>
      <input type="submit" value="Add Service" className="w-40 btn btn-primary"/>
    </form>
  );
};

export default AddService;
