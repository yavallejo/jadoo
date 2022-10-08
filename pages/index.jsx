import Layout from "../components/layout";
import CardIcon from "../components/card/cardIcon";
import CardImage from "../components/card/cardImage";
import iconCalculated from "../public/img/icon-calculated.png";
import iconBest from "../public/img/icon-traveled.png";
import iconLocal from "../public/img/icon-local.png";
import iconCustomization from "../public/img/icon-customization.png";
import destinationEngland from "../public/img/destination-england.jpg";
import destinationMexico from "../public/img/destination-mexico.jpg";
import destinationRome from "../public/img/destination-rome.jpg";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto mt-24">
        <h4 className="text-center uppercase title--5 text-dark-4 font-poppins mb-[10px]">
          Category
        </h4>
        <h2 className="text-center text-dark-2 font-volkhov title--3 lg:title--2">
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4 mt-14 md:gap-x-4">
          <CardIcon
            imageIcon={iconCalculated}
            title="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />
          <CardIcon
            imageIcon={iconBest}
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
          />
          <CardIcon
            imageIcon={iconLocal}
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          />
          <CardIcon
            imageIcon={iconCustomization}
            title="Customization"
            description="We deliver outsourced aviation services for military customers"
          />
        </div>
      </section>
      <section className="container mx-auto mt-24">
        <h4 className="text-center uppercase title--5 text-dark-4 font-poppins mb-[10px]">
          Top Selling
        </h4>
        <h2 className="text-center text-dark-2 font-volkhov title--3 lg:title--2">
          Top Destinations
        </h2>
        <div className="grid max-w-sm grid-cols-1 mx-auto gap-y-4 mt-14 md:max-w-full md:mx-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
          <CardImage
            imageCard={destinationEngland}
            titleCard="Rome, Italy"
            priceCard="$5,42k"
            daysTrip="10 Days Trip"
          />
          <CardImage
            imageCard={destinationMexico}
            titleCard="London, UK"
            priceCard="$4,2k"
            daysTrip="12 Days Trip"
          />
          <CardImage
            imageCard={destinationRome}
            titleCard="Full Europe"
            priceCard="$15k"
            daysTrip="28 Days Trip"
          />
        </div>
      </section>
    </Layout>
  );
}
