import Banner from "../Bannar/Banner";
import Communicate from "../Communicate/Communicate";
import CustomerView from "../CustomerView/CustomerView";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <CustomerView />
      <Testimonials />
      <Communicate />
    </div>
  );
};

export default Home;
