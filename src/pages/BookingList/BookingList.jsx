import man1 from "../../assets/man1.avif";

const BookingList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-3">
      <div className="card">
        <div className="flex justify-between gap-3">
          <img
            src={man1}
            alt="product picture"
            className="w-12 h-12 rounded-full"
          />
          <button className="btn btn-primary">Pending</button>
        </div>
        <h4 className="text-2xl font-bold">Anti Age Face Treatment</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="card">
        <div className="flex justify-between gap-3">
          <img
            src={man1}
            alt="product picture"
            className="w-12 h-12 rounded-full"
          />
          <button className="btn btn-primary">done</button>
        </div>
        <h4 className="text-2xl font-bold">Anti Age Face Treatment</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  );
};

export default BookingList;
