import { InfiniteSlider } from "./infinite-slider";

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
    </div>
  );
}
