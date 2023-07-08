import banner from "../../../assets/image1.avif";

const Banner = () => {
  return (
    <div className="items-center justify-center mx-2 my-8 md:flex">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">
          BEAUTY SALON <br /> FOR EVERY WOMEN
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat
        </p>
        <button className="btn btn-primary">get an appoinment</button>
      </div>
      <div className="">
        <img src={banner} alt="banner picture" className="rounded-xl" />
      </div>
    </div>
  );
};

export default Banner;
