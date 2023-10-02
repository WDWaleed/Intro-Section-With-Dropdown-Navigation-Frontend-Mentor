import "./IntroSection.css";

const IntroSection = () => {
  return (
    <main className=" flex w-full flex-col custom:mx-auto custom:mt-12 custom:h-[calc(100vh-150px)] custom:max-w-[1200px] custom:flex-row-reverse custom:justify-between custom:gap-4 custom:p-4">
      <div id="hero-image-container"></div>
      <div
        id="hero-content-container"
        className="flex flex-col items-center px-4 py-6 text-center custom:items-start custom:justify-center custom:gap-8 custom:text-left"
      >
        <h1 id="title" className="text-[2.2rem] font-bold custom:text-7xl">
          Make remote work
        </h1>
        <p className=" max-w-[405px] text-[16px] text-MediumGray custom:text-custom">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="my-5 rounded-2xl border border-AlmostBlack bg-AlmostBlack px-4 py-2 text-AlmostWhite transition-colors hover:bg-transparent hover:text-AlmostBlack custom:my-0 ">
          Learn more
        </button>

        <div
          id="clients"
          className="mt-10 flex w-full flex-wrap justify-between gap-4"
        >
          <img
            src="images/client-databiz.svg"
            alt="DataBiz"
            className="h-[20px] w-[114px]"
          />
          <img
            src="images/client-audiophile.svg"
            alt="Audiophile"
            className="h-[36px] w-[73px]"
          />
          <img
            src="images/client-meet.svg"
            alt="Meet"
            className="h-[20px] w-[90px]"
          />
          <img
            src="images/client-maker.svg"
            alt="Maker"
            className="h-[24px] w-[83px]"
          />
        </div>
      </div>
    </main>
  );
};
export default IntroSection;
