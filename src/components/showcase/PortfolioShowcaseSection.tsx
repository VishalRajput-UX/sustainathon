import ShowcaseHeading from './ShowcaseHeading';
import ShowcaseIntro from './ShowcaseIntro';
import ShowcaseCTA from './ShowcaseCTA';
import InfinitePortfolioCarousel from './InfinitePortfolioCarousel';

const PortfolioShowcaseSection = () => {
  return (
    <section data-nav-theme="light" className="w-full bg-[#F5F5F3] pt-16 pb-24 overflow-hidden relative z-20">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        <ShowcaseHeading />
        <ShowcaseIntro />
        <ShowcaseCTA />
        <InfinitePortfolioCarousel />
      </div>
    </section>
  );
};

export default PortfolioShowcaseSection;
