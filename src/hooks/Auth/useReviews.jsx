import axios from "axios";
import React, { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/reviews")
      .then((res) => setReviews(res.data));
  }, []);
  return reviews;
};

export default useReviews;
