import axios from "axios";
import man1 from "../../assets/man1.avif";
import useBookings from "../../hooks/useBookings";

const BookingList = () => {
  const bookings = useBookings();
  const handleStatusAction = (booking) => {
    axios
      .patch(`http://localhost:4000/bookingStatus/${booking._id}`, {
        status: "done",
      })
      .then((res) => {
        // console.log(res.data);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-4 p-3">
      {bookings.map((booking) => (
        <div className="card" key={booking._id}>
          <div className="flex justify-between gap-3">
            <img
              src={booking.image}
              alt="product picture"
              className="w-12 h-12 rounded-full"
            />
            <button
              onClick={() => handleStatusAction(booking)}
              className="btn btn-primary"
            >
              {booking.status}
            </button>
          </div>
          <h4 className="flex justify-between text-2xl font-bold">
            service name :{booking.productName}{" "}
            <span>Price : {booking.price}</span>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
