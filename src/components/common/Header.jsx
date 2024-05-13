import { useEffect, useState } from "react";
import MainMenu from "./partials/MainMenu";
import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`shadow-lg fixed bg-white w-full left-0 top-0 z-10 py-4 lg:py-0`}>
      <div className="container flex items-center justify-between">
        <div className="header-left flex items-center lg:space-x-10">
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="space-y-1 lg:hidden"
              onClick={(e) => {
                e.preventDefault();
                setToggle(!toggle);
              }}
            >
              <div className="w-5 h-[1px] bg-black"></div>
              <div className="w-5 h-[1px] bg-black"></div>
              <div className="w-5 h-[1px] bg-black"></div>
            </a>

            <Image
              src={"/images/logo.png"}
              width={145}
              height={53}
              alt="Logo"
            />
          </div>

          <MainMenu toggle={toggle} setToggle={setToggle} />
        </div>

        <div className="header-right flex items-center space-x-5">
          <div className="hidden lg:flex items-center space-x-2">
            <img src="/images/icons/favorite.png" alt="cart" />
            <span>My wishlist</span>
          </div>

          <div className="hidden flex items-center space-x-2">
            <img src="/images/icons/user.png" alt="cart" />
            <span>Sign in</span>
          </div>

          <img src="/images/icons/calendar.png" alt="cart" />
          <div className="h-10 w-[2px] bg-grey-200"></div>
          <img src="/images/icons/cart.png" alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
