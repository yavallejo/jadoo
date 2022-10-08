import Image from "next/future/image";
const CardImage = ({ imageCard, titleCard, priceCard, daysTrip }) => {
  return (
    <div className="block pb-8 transition-all shadow-xl rounded-3xl last-of-type:md:hidden last-of-type:lg:block">
      <figure className="max-h-96">
        <Image
          src={imageCard}
          alt={titleCard}
          width={630}
          height={656}
          className="object-cover w-full h-full rounded-b-none rounded-2xl max-h-96"
          layout="cover"
        />
      </figure>
      <div className="flex justify-between p-5 pb-0">
        <h4 className="text-dark-4 title--button font-poppins">{titleCard}</h4>
        <span className="text-dark-4 title--button font-poppins">
          {priceCard}
        </span>
      </div>
      <strong className="block px-5 pt-2 text-dark-4 title--button font-poppins">
        {daysTrip}
      </strong>
    </div>
  );
};

export default CardImage;
