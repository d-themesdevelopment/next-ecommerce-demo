import ALink from "../ALink";

const MainMenu = ({ toggle, setToggle }) => {
  return (
    <>
      {toggle && (
        <div
          className="overlay bg-black/70 fixed left-0 top-0 right-0 bottom-0"
          onClick={() => setToggle(false)}
        ></div>
      )}

      <ul
        className={`${
          toggle ? "" : "-translate-x-[280px] lg:translate-x-0"
        } transition-all font-semibold  text-sm md:text-base lg:flex items-center lg:space-x-7 text-grey-100  fixed lg:relative bg-white lg:bg-transparent left-0 top-0 bottom-0 lg:w-auto w-[280px] lg:p-0 p-5`}
      >
        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            HEM
          </ALink>
        </li>

        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            OM OSS
          </ALink>
        </li>

        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            KUNDANSÖKAN
          </ALink>
        </li>

        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            TRAILER
          </ALink>
        </li>

        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            KONTAKT
          </ALink>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
