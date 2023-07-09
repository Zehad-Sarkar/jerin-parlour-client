import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const user = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  axios.get(`http://localhost:4000/users?email=${user?.email}`).then((res) => {
    const { role } = res.data;
    setIsAdmin(role === "admin");
  });
  return isAdmin;
};

export default useAdmin;
