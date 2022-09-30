import Image from "next/future/image"
import Link from "next/link";

import style from "../../styles/header.module.css"

const Navigation = () => {
  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <Link href="/">
          <a className={style.logo}>
            <Image src="/img/logo-jadoo.png" width="231" height="69" className="w-full"/>
          </a>
        </Link>
      </div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/hotels">Hotels</Link>
          </li>
          <li>
            <Link href="/flights">Flights</Link>
          </li>
          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">
              <a className="btn btn__outline btn__outline--dark">Sign up</a>
            </Link>
          </li>
          <li>
            <a href="#">EN</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation