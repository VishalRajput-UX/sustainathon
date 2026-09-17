import { tracks } from '../../data/tracks';

const Tracks = () => {
  return (
    <main className="min-h-[100dvh] bg-[#101010] font-display text-secondary">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-32 md:px-12 md:pt-44 lg:px-16">
        <header className="grid gap-10 pb-14 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16 md:pb-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-accentOrange">
              Sustain-a-thon 2.0 / Tracks
            </p>
            <h1 className="font-royal text-[clamp(2.25rem,5.3vw,5rem)] uppercase leading-[1.02] tracking-tight">
              Big ideas.
              <br />
              <span className="text-accentOrange">Real impact.</span>
            </h1>
          </div>

          <div className="max-w-md md:pb-1">
            <p className="mb-4 text-xl font-medium leading-snug md:text-2xl">
              Seven themes. One better future.
            </p>
            <p className="text-base leading-relaxed text-[#AEAAA5]">
              Choose a challenge that matters to you. Bring your perspective,
              build with purpose, and turn your idea into a solution for the
              world around you.
            </p>
            <a
              href="#themes"
              className="mt-6 inline-flex min-h-11 items-center gap-4 border-b border-accentOrange/60 text-sm font-medium text-secondary transition-colors hover:text-accentOrange focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accentOrange active:translate-y-px"
            >
              Explore the themes
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </header>

        <section id="themes" aria-labelledby="themes-heading" className="scroll-mt-28">
          <div className="flex items-center justify-between border-b border-secondary/30 pb-5">
            <h2 id="themes-heading" className="text-xs font-medium uppercase tracking-[0.2em]">
              The themes
            </h2>
            <span className="font-mono text-xs text-[#AEAAA5]">01 — 07</span>
          </div>

          <ol>
            {tracks.map((track) => (
              <li
                key={track.id}
                className="grid gap-6 border-b border-secondary/15 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-10 md:py-12 lg:gap-16"
              >
                <div className="overflow-hidden rounded-sm bg-[#1B1B1B]">
                  <img
                    src={track.image}
                    alt={track.imageAlt}
                    width={1200}
                    height={800}
                    loading={track.id === '01' ? 'eager' : 'lazy'}
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <div>
                  <span aria-hidden="true" className="mb-4 block font-mono text-sm text-accentOrange">
                    {track.id}
                  </span>
                  <h3 className="mb-5 max-w-xl text-2xl font-medium leading-tight tracking-tight lg:text-[1.875rem]">
                    {track.title}
                  </h3>
                  <p className="max-w-[65ch] text-base leading-relaxed text-[#AEAAA5]">
                    {track.description}
                  </p>
                  <ul aria-label="Example focus areas" className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {track.focusAreas.map((area) => (
                      <li key={area} className="text-xs leading-relaxed text-[#D1CBC4]">
                        <span aria-hidden="true" className="mr-2 text-accentOrange">/</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="flex flex-col gap-4 pt-10 text-xs uppercase tracking-[0.16em] text-[#AEAAA5] sm:flex-row sm:items-center sm:justify-between">
          <p>Sustain-a-thon 2.0</p>
          <p>Find your challenge. Make it matter.</p>
        </footer>
      </div>
    </main>
  );
};

export default Tracks;
