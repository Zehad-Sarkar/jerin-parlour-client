import axios from "axios";
import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/bookingList")
      .then((data) => setBookings(data.data));
  }, []);
  return bookings;
};

export default useBookings;
