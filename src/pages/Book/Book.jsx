import { Link } from "react-router-dom";
import logo from "../../assets/logo.avif";
import Payment from "../Payment/Payment";

const Book = () => {
  const handleBook = () => {
    console.log("booking");
  };
  return (
    <div className="grid grid-cols-5">
      {/* left side */}
      {/* <div className="col-span-1 px-2 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-12 h-12 rounded-full" />
          <h3 className="text-3xl font-bold">
            Jerins <br /> Parlour
          </h3>
        </div>

        <div>
          <Link>Book</Link> <br />
          <Link to="/bookingList">Bookings list</Link> <br />
          <Link to='/review'>Review</Link>
        </div>
      </div> */}
      {/* right side */}
      <div className="col-span-4 ">
        <form
          onSubmit={handleBook}
          className="w-1/2 p-4 mx-auto border-2 border-red-200"
        >
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="p-2 border-2"
              placeholder="full name"
              // required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="p-2 border-2"
              placeholder="email address"
              // required
            />
          </div>
          <div className="form-control">
            <label htmlFor="product">Product name</label>
            <input
              type="text"
              className="p-2 border-2"
              placeholder="product name"
              // required
            />
          </div>
          <div className="form-control">
            <label htmlFor="product">Pay with</label>
            {/* <input type="radio" /> */}
            <input
              type="text"
              className="p-2 border-2"
              placeholder="card number"
              // required
            />
          </div>
          {/* todo payment implement need */}
          {/* <Payment /> */}
          <input
            type="submit"
            value="Pay"
            className="w-32 mt-2 btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Book;
