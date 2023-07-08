import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Services = () => {
  return (
    <div className="my-4 text-center">
      <SectionTitle title="Our Awesome Services" />
      {/* services card */}
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2">
        {/* card 1 */}
        <div className="card">
          <h3>Anti Age Face Treatment</h3>
          <p>$199</p>
          <p>
            We craft stunning and amazing web UI, using a well drafted UX to fit
            your product.
          </p>
        </div>
        {/* card 2 */}
        <div className="card">
          <h3>Hair Color & Styleing</h3>
          <p>$99</p>
          <p>
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </p>
        </div>
        {/* card 3 */}
        <div className="card">
          <h3>Skin Care Treatment</h3>
          <p>$299</p>
          <p>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
      </div>
      <button className="mt-4 text-center btn btn-primary">Explore More</button>
    </div>
  );
};

export default Services;
