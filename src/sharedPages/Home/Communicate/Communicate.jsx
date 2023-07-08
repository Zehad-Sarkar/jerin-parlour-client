import React from "react";

const Communicate = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const textarea = form.textarea.value;
    console.log("click", firstName, lastName, email, phone, textarea);
  };
  return (
    <div className="">
      <h3 className="p-2 mb-4 text-4xl font-bold text-center">
        Let us handle your <br /> project, professionally.
      </h3>
      <form
        onSubmit={handleSendMessage}
        className="w-3/4 p-4 mx-auto border-2 border-red-200 rounded-md"
      >
        <div className="grid items-center justify-center grid-cols-2 gap-4 space-y-3">
          <div className="">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" className="border-2" />
          </div>
          <div className="">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" className="border-2" />
          </div>
        </div>
        <div className="grid items-center justify-center grid-cols-2 gap-4 space-y-3 ">
          <div className="">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" className="border-2" />
          </div>
          <div className="">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" className="border-2" />
          </div>
        </div>
        <div className="grid">
          <label htmlFor="textarea">Your Message</label>

          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            className="border-2 resize-none"
            
          ></textarea>
        </div>
        <button type="submit" className="mt-2 text-center btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Communicate;
