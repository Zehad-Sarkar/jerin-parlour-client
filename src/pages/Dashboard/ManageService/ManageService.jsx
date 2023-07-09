import React from "react";
import useService from "../../../hooks/useService";
import axios from "axios";
import Swal from "sweetalert2";

const ManageService = () => {
  const [services, setService] = useService();

  //event handler for delete action
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/serviceDelete/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // update state for ui change
              const updateUi = services.filter((service) => service._id !== id);
              setService(updateUi);
            }
          });
      }
    });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>service name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service?.name}</td>
              <td>{service?.email}</td>
              <td>{service?.service}</td>
              <td>
                <button onClick={() => handleDelete(service._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
