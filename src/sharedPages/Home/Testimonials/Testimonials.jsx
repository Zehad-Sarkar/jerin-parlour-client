import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import man1 from "../../../assets/man1.avif";
import Rating from "react-rating";
import useReviews from "../../../hooks/Auth/useReviews";

const Testimonials = () => {
  const reviews = useReviews();
  return (
    <div className="my-20">
      <SectionTitle title="Testimonials" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review) => (
          <div key={review._id} className="card ">
            <div className="flex gap-2">
              <img
                src={review.image}
                alt="man"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3>{review.name}</h3>
                <p>{review.companyName}</p>
                {/* <p>CEO, Manpol</p> */}
              </div>
            </div>
            <div>
              <p>{review.message}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
