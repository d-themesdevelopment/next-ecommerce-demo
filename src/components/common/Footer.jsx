import ALink from "./ALink";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container">
        <div className="footer-middle py-16 lg:py-28 border-b border-white/30">
          <div className="grid grid-cols-12 grid-flex-row gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">INFORMATION</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>Electric cars</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">TERMS</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">CONTACT</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">NEWSLETTER</h4>

                <p className="mb-10">
                  Sign up for each newsletter and take part in the latest news,
                  campaigns and offers.
                </p>

                <form action="#" className="input-group flex items-center">
                  <input
                    type="email"
                    className="h-[50px] bg-white px-4"
                    placeholder="Enter your e-mail..."
                    required
                  />
                  <button className="uppercase h-[50px] px-5 bg-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-sm py-10">
          <div className="flex items-center justify-center">
            <p>Copyright © 2024 TTB Wholesale. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
