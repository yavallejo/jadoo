import Link from "next/link";
import Image from "next/future/image";
import Navigation from "../navigation"
import style from "../../styles/slide.module.css";

const Header = () => {
  return (
    <>
      <Navigation />
      {/* Home */}
      <div className={style.slide}>
        <div className={style.slide__left}>
          <h3 className={style.slide__subtitle}>
            Best Destinations around the world
          </h3>
          <h1 className={style.slide__title}>
            Travel, enjoy and live a new and full life
          </h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className={style.slide__button}>
            <Link href="/">
              <a className="btn btn__primary">Find out more</a>
            </Link>
            <Link href="/">
              <a className="flex items-center btn gap-x-4">
                <Image src="/img/icon-plays.png" width="52" height="52" />
                Play Demo
              </a>
            </Link>
          </div>
        </div>
        <div className={style.slide__right}>
          <Image
            src="/img/travelers.png"
            width="1239"
            height="1485"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Header