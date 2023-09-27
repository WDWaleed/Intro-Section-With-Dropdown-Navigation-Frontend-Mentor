import "./IntroSection.css";

const IntroSection = () => {
  return (
    <main className=" flex flex-col custom:flex-row-reverse custom:justify-between custom:max-w-[1200px] custom:mx-auto custom:gap-4 custom:p-4 custom:mt-12 custom:h-[calc(100vh-150px)] w-full">
      <div id="hero-image-container" className=""></div>
      <div
        id="hero-content-container"
        className="px-4 py-6 flex flex-col items-center text-center custom:items-start custom:justify-center custom:text-left custom:gap-8"
      >
        <h1 id="title" className="text-[2.2rem] custom:text-7xl font-bold">Make remote work</h1>
        <p className=" text-MediumGray text-[16px] custom:text-custom max-w-[405px]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="py-2 px-4 rounded-2xl bg-AlmostBlack text-AlmostWhite my-5 custom:my-0 hover:bg-transparent hover:text-AlmostBlack border border-AlmostBlack transition-colors ">Learn more</button>


        <div id="clients" className="w-full flex justify-between gap-4 flex-wrap mt-10">
            <img src="images/client-databiz.svg" alt="DataBiz" className="max-w-[114px] max-h-[20px] aspect-[114/20] "/>
            <img src="images/client-audiophile.svg" alt="Audiophile" className="max-w-[73px] max-h-[36px] aspect-[73/36]" />
            <img src="images/client-meet.svg" alt="Meet" className="max-w-[90px] max-h-[20px] aspect-[90/20]" />
            <img src="images/client-maker.svg" alt="Maker" className="max-w-[83px] max-h-[24px] aspect-[83/24]" />
        </div>
      </div>
    </main>
  );
};
export default IntroSection;
