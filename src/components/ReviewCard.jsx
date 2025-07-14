import { star } from "../assets/icons";

const ReviewCard = ({ customerName, rating, imgURL, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-24 object-cover h-24"
      />

      <p className="mt-4 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center mt-2 gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt=""
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-2 font-palanquin text-xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
