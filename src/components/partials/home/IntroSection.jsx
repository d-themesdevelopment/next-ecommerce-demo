import ALink from "@/components/common/ALink";

const IntroSection = () => {
  return (
    <section
      className="intro h-screen min-h-[1000px] lg:min-h-[600px] relative flex justify-center items-center"
      style={{
        background: "no-repeat 60%/cover url(/images/slides/slide-1.jpg)",
      }}
    >
      <div className="overlay"></div>

      <div className="max-w-[1500px] text-white px-5 absolute w-full">
        <div className="max-w-[1056px] mx-auto">
          <h5 className="text-white mb-2">Part Type</h5>
          <div className="flex items-center mb-7">
            <button className="text-white bg-black text-sm lg:text-base text-center w-1/2 py-2 px-1">
              Click here to search for spare parts for cars and vans
            </button>

            <button className="text-white bg-primary text-sm lg:text-base text-center w-1/2 py-2 px-3">
              Click here to search for spare parts for truckss
            </button>
          </div>

          <div className="flex items-center justify-center space-x-1 lg:space-x-3">
            <button className="bg-grey-100 px-4 py-3 rounded-t-xl text-[10px] lg:text-base h-[50px]">
              Reg.no.search
            </button>
            <button className="bg-white/70 text-black px-4 py-3 rounded-t-xl text-[10px] lg:text-base h-[50px]">
              Search by OEM number
            </button>
            <button className="bg-white/70 text-black px-4 py-3 rounded-t-xl text-[10px] lg:text-base h-[50px]">
              Search by VIN number
            </button>
          </div>

          <div className="p-2 flex items-center input-group bg-white lg:rounded-[3rem] overflow-hidden space-x-2">
            <input className="h-12 lg:px-5 flex-1 lg:rounded-3xl" placeholder="Please search key..." />
            <button className="bg-primary font-bold px-5 lg:px-10 py-3 lg:rounded-3xl">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
