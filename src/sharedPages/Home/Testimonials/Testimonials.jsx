import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import man1 from "../../../assets/man1.avif";
import Rating from "react-rating";

const Testimonials = () => {
  return (
    <div className="my-20">
      <SectionTitle title="Testimonials" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="card ">
          <div className="flex gap-2">
            <img src={man1} alt="man" className="w-12 h-12 rounded-full" />
            <div>
              <h3>Nash Patrik</h3>
              <p>CEO, Manpol</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <p>
              <Rating
                placeholderRating={4}
                emptySymbol={<FaStar />}
                placeholderSymbol={<FaStar className="text-yellow-400" />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="flex gap-2">
            <img src={man1} alt="man" className="w-12 h-12 rounded-full" />
            <div>
              <h3>Miriam Barron</h3>
              <p>CEO, Manpol</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <p>
              <Rating
                placeholderRating={4}
                emptySymbol={<FaStar />}
                placeholderSymbol={<FaStar className="text-yellow-400" />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="flex gap-2">
            <img src={man1} alt="man" className="w-12 h-12 rounded-full" />
            <div>
              <h3>Bria Malone</h3>
              <p>CEO, Manpol</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <p>
              <Rating
                placeholderRating={4}
                emptySymbol={<FaStar />}
                placeholderSymbol={<FaStar className="text-yellow-400" />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
