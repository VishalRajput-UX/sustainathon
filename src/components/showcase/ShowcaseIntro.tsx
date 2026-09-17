import { MagicText } from '../ui/magic-text';

const ShowcaseIntro = () => {
  const introText = "Sustainathon is a National-Level Hackathon, proudly presented by the Sharda School of Computing Science & Engineering with the Infusion Society, bringing together innovators, developers, and problem-solvers from across the country to create technology-driven solutions for real-world sustainability challenges.";

  return (
    <div className="w-full flex justify-center items-center px-6 pt-4 pb-8">
      <MagicText 
        text={introText}
        className="max-w-[500px] text-center text-black font-medium text-[15px] md:text-[17px] leading-relaxed"
      />
    </div>
  );
};

export default ShowcaseIntro;
