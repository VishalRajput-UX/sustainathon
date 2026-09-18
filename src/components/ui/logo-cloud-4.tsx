import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto w-full py-6 opacity-60 hover:opacity-100 transition-opacity duration-500">

      <InfiniteSlider gap={64} reverse duration={40} durationOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-6 md:h-8 lg:h-10 select-none brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="right"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="left"
      />
    </div>
  );
}
