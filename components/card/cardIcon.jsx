import Image from "next/future/image";

const cardIcon = ({ imageIcon,title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imageIcon}
        alt={description}
        width={100}
        height={100}
        className="max-w-[50px] max-h-[50px]"
        layout="cover"
      />
      <h4 className="mb-4 text-dark-3 title--4 font-opensans mt-7">{title}</h4>
      <p className="max-w-[185px] mx-auto text-center font-poppins title--6 text-dark-4">
        {description}
      </p>
    </div>
  );
};

export default cardIcon;
