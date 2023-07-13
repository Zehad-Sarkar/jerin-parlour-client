import { Link } from "react-router-dom";
import logo from "../../assets/logo.avif";
import useAuth from "../../hooks/Auth/useAuth";
import axios from "axios";

const Book = () => {
  const user = useAuth();
  const handleBook = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const productName = e.target.productName.value;
    const bookingItem = {
      name,
      email,
      productName,
      image: user?.photoURL,
      status: "Pending",
      price: parseFloat("200"),
    };
    axios
      .post("http://localhost:4000/bookingProduct", bookingItem)
      .then((res) => {
        if (res.data.insertedId) {
          //message
        }
      });
  };
  return (
    <form
      onSubmit={handleBook}
      className="w-1/2 p-4 mx-auto border-2 border-red-200"
    >
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          className="p-2 border-2"
          placeholder="full name"
          // required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          defaultValue={user?.email}
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
          name="productName"
          // required
        />
      </div>
      {/* <div className="form-control">
        <label htmlFor="product">Pay with</label>
        <input type="text" className="p-2 border-2" placeholder="card number" />
      </div> */}
      <input type="submit" value="Book" className="w-32 mt-2 btn btn-primary" />
    </form>
  );
};

export default Book;
