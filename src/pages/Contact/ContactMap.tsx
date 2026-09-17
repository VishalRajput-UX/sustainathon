import React from 'react';
import { MapPin, Navigation, Compass, Train, Car } from 'lucide-react';

export const ContactMap: React.FC = () => {
  return (
    <section aria-labelledby="venue-heading" className="w-full py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/15">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accentOrange block mb-3">
            Grand Finale Venue
          </span>
          <h2 id="venue-heading" className="font-royal text-3xl md:text-5xl uppercase leading-none tracking-tight text-white">
            Find Us On Campus
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#AEAAA5] leading-relaxed">
          The offline Grand Finale of Sustainathon 2.0 will take place at the School of Computing Science & Engineering, Sharda University.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-stretch">
        {/* Google Maps Embed Container */}
        <div className="relative min-h-[380px] md:min-h-[460px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-2xl">
          <iframe
            title="Sharda University Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4646738980836!2d77.47970427550186!3d28.46552639164286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f7b91511b%3A0x486f13bd49e5e7ae!2sSharda%20University!5e0!3m2!1sen!2sin!4v1710672000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%) brightness(90%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full opacity-90 transition-opacity duration-300 hover:opacity-100"
          />

          {/* Floating Venue Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 rounded-xl border border-white/15 bg-black/80 px-4 py-2.5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-accentOrange animate-pulse" />
              <span>Sharda University Campus</span>
            </div>
            <p className="text-[10px] text-[#AEAAA5] mt-0.5">Knowledge Park III, Greater Noida</p>
          </div>
        </div>

        {/* Location Details & Transit Card */}
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">
          <div>
            <div className="flex items-center gap-2 text-accentOrange mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">Address</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Sharda University
            </h3>
            <p className="text-sm leading-relaxed text-[#AEAAA5] mb-6">
              Plot No. 32-34, Knowledge Park III,<br />
              Greater Noida, Uttar Pradesh 201310<br />
              <span className="text-white/80">School of Computing Science & Engineering (SCSE)</span>
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <Train className="h-4 w-4 text-accentOrange shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-white">Nearest Metro</h4>
                  <p className="text-xs text-[#AEAAA5] mt-0.5">
                    Knowledge Park II Station (Noida Metro Aqua Line) — ~1.2 km
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="h-4 w-4 text-accentOrange shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-white">Expressway Access</h4>
                  <p className="text-xs text-[#AEAAA5] mt-0.5">
                    Direct access via Noida–Greater Noida Expressway and Yamuna Expressway.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="h-4 w-4 text-accentOrange shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-white">Landmark</h4>
                  <p className="text-xs text-[#AEAAA5] mt-0.5">
                    Opposite Sharda Hospital, Institutional Area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href="https://maps.google.com/?q=Sharda+University+Knowledge+Park+III+Greater+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all hover:border-accentOrange hover:bg-white hover:text-black hover:scale-[1.02]"
            >
              <Navigation className="h-3.5 w-3.5" />
              <span>Get Driving Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
