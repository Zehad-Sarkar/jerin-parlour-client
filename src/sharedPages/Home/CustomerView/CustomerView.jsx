import banner2 from "../../../assets/image2.avif";

const CustomerView = () => {
  return (
    <div className="items-center gap-4 my-20 lg:flex md:flex">
      <img src={banner2} alt="image" className="w-full h-96 rounded-xl" />
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">
          Let us handle your <br /> screen Professionally.
        </h2>
        <p>
          With well written codes, we build amazing apps for all platforms,
          mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus commodo ipsum.
        </p>
        <div className="flex justify-between pr-20">
         
          <div className="">
            <p className="text-3xl font-extrabold text-red-400">500+</p>
            <p>Happy Customers</p>
          </div>
          <div className="">
            <p className="text-3xl font-extrabold text-red-400">16+</p>
            <p>Total Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
