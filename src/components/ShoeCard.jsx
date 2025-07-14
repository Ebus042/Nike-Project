const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
    ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-24 sm:h-24 rounded-xl max-sm:p-2">
        <img
          src={imgURL.thumbnail}
          alt="shoe Collection"
          width={70}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
