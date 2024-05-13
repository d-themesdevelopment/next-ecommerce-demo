const BannersSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-flex-row grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center relative banner h-[270px] overflow-hidden rounded-2xl">
              <div className="overlay"></div>
              <img
                src="/images/banners/1.jpg"
                className="w-full h-full"
                alt="banner"
              />

              <div className="left-5 lg:left-16 absolute details text-white">
                <h3 className="text-4xl font-bold mb-7">Product news</h3>
                <button className="bg-grey-100 px-5 py-3 text-sm">READ MORE</button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center relative banner h-[270px] overflow-hidden rounded-2xl">
              <div className="overlay"></div>
              <img
                src="/images/banners/2.jpg"
                className="w-full h-full"
                alt="banner"
              />

              <div className="left-5 lg:left-16 absolute details text-white">
                <h3 className="text-4xl font-bold mb-7">Industry news</h3>
                <button className="bg-grey-100 px-5 py-3 text-sm">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
