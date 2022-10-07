import Layout from "../components/layout";
import Cardicon from "../components/card/cardIcon";
import iconCalculated from "../public/img/icon-calculated.png";
import iconBest from "../public/img/icon-traveled.png";
import iconLocal from "../public/img/icon-local.png";
import iconCustomization from "../public/img/icon-customization.png";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto mt-24">
        <h4 className="text-center uppercase title--5 text-dark-4 font-poppins mb-[10px]">Category</h4>
        <h2 className="text-center text-dark-2 font-volkhov title--3 lg:title--2">
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4 mt-14 md:gap-x-4">
          <Cardicon
            imageIcon={iconCalculated}
            title="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />
          <Cardicon
            imageIcon={iconBest}
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
          />
          <Cardicon
            imageIcon={iconLocal}
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          />
          <Cardicon
            imageIcon={iconCustomization}
            title="Customization"
            description="We deliver outsourced aviation services for military customers"
          />
        </div>
      </section>
    </Layout>
  );
}
