import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/allServices")
      .then((res) => setService(res.data));
  }, []);
  return [service, setService];
};

export default useService;
