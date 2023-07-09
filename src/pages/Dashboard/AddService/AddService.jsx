import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/Auth/useAuth";
import Swal from "sweetalert2";
// imgBB image hosting api key
const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
// console.log('host token',image_hosting_token);

const AddService = () => {
  const user = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // imgBB image hosting upload url
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    // console.log("add a service", data);
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.status) {
          const imgURL = imgData.data.display_url;
          const { service, description } = data;
          const newService = {
            service,
            image: imgURL,
            description,
            email: user?.email,
            name: user?.displayName,
          };
          axios
            .post("http://localhost:4000/addedService", newService)
            .then((data) => {
              // console.log(data.data);
              if (data.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "service added successfull",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
    // console.log(formData);
  };
  return (
    <form className="w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-4xl font-bold">add a service</h4>
      <div className="form-control">
        <label htmlFor="service title">Service Title</label>
        <input
          type="text"
          className="border-2"
          placeholder="service name"
          {...register("service")}
        />
      </div>
      <div className="form-control">
        <label htmlFor="service photo">Service Photo</label>
        <input type="file" className="border-2" {...register("photo")} />
      </div>
      <div className="form-control">
        <label htmlFor="service description">Service Description</label>
        <textarea
          type="text"
          col="30"
          rows="5"
          className="w-3/4 p-2 border-2 rounded-md resize-none"
          {...register("description")}
        />
      </div>
      <input
        type="submit"
        value="Add Service"
        className="w-40 btn btn-primary"
      />
    </form>
  );
};

export default AddService;
