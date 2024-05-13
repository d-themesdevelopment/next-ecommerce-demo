const BestSellerSection = () => {
  const Data = [
    {
      title: "Heating package SCANIA",
      imgUrl: "1.jpg",
    },
    {
      title: "Heating package SCANIA",
      imgUrl: "2.jpg",
    },
    {
      title: "Heating package SCANIA",
      imgUrl: "3.jpg",
    },
    {
      title: "Heating package SCANIA",
      imgUrl: "4.jpg",
    },
  ];

  return (
    <section className="pt-20">
      <div className="container">
        <h3 className="text-2xl font-bold mb-7">Best Seller</h3>

        <div className="grid grid-cols-12 grid-flex-row gap-5">
          {Data?.map((item, index) => (
            <div className="col-span-6 lg:col-span-3" key={index}>
              <div className="group p-5 product border shadow-lg rounded-3xl overflow-hidden">
                <div className="relative selection:media overflow-hidden">
                  <img
                    src={`/images/products/${item.imgUrl}`}
                    className="w-full"
                    width={338}
                    height={338}
                    alt="product"
                  />

                  <button className="text-xs lg:text-base translate-y-[48px] transition-all group-hover:translate-y-0 absolute bottom-0 bg-primary text-white py-3 w-full rounded-[3rem]">
                    Log in to see price
                  </button>
                </div>

                <div className="details mt-2">
                  <h3 className="text-xs lg:text-lg text-grey-100 font-semibold">
                    {item?.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
