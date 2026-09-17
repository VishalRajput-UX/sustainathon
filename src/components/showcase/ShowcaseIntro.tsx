import { MagicText } from '../ui/magic-text';

const ShowcaseIntro = () => {
  const introText = "Sustainathon is a National-Level Hackathon bringing together innovative minds from across the country to develop technology-driven solutions for real-world sustainability challenges. Join us to innovate, collaborate, and build a smarter, greener future.";

  return (
    <div className="w-full flex justify-center items-center px-6 pt-4 pb-8">
      <MagicText 
        text={introText}
        className="max-w-[420px] text-center text-black font-medium text-[15px] md:text-[17px] leading-relaxed"
      />
    </div>
  );
};

export default ShowcaseIntro;
