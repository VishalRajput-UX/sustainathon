

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  url?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto w-full py-6 flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
      {logos.map((logo) => {
        const Wrapper = logo.url ? 'a' : 'div';
        const linkProps = logo.url ? { href: logo.url, target: "_blank", rel: "noopener noreferrer" } : {};
        
        return (
          <Wrapper 
            {...linkProps}
            key={`logo-wrapper-${logo.alt}`}
            className="flex items-center justify-center min-w-[120px] md:min-w-[140px] min-h-[56px] md:min-h-[64px] lg:min-h-[72px] px-3 md:px-5 py-2 md:py-3 bg-white/90 border border-white/10 rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.04)] hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none select-none w-auto h-auto max-w-[140px] md:max-w-[220px] max-h-[38px] md:max-h-[48px] object-contain opacity-100"
              key={`logo-${logo.alt}`}
              loading="lazy"
              src={logo.src}
            />
          </Wrapper>
        );
      })}
    </div>
  );
}
