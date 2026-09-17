import React from 'react';
import { Mail, MessageCircle, Clock, Users, ArrowUpRight, Instagram, Youtube } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ContactMap } from './ContactMap';
import { ContactFAQ } from './ContactFAQ';
import Footer from '../../components/layout/Footer';

const Contact: React.FC = () => {
  return (
    <main className="min-h-[100dvh] bg-[#0A0A0A] font-display text-secondary selection:bg-accentOrange selection:text-white">
      {/* Container matching Tracks & Home styling */}
      <div className="mx-auto max-w-[1400px] px-6 pt-32 md:px-12 md:pt-44 lg:px-16">
        
        {/* HERO HEADER */}
        <header className="grid gap-8 pb-16 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16 md:pb-24 border-b border-white/15">
          <div>
            <p className="mb-4 text-xs font-mono font-medium uppercase tracking-[0.25em] text-accentOrange">
              Sustain-a-thon 2.0 / Support & Connect
            </p>
            <h1 className="font-royal text-[clamp(2.5rem,5.5vw,5.5rem)] uppercase leading-[1] tracking-tight text-white">
              HAVE QUESTIONS?
              <br />
              <span className="text-accentOrange">LET&apos;S CONNECT.</span>
            </h1>
          </div>

          <div className="max-w-md pb-1">
            <p className="mb-4 text-xl font-medium leading-snug text-white md:text-2xl">
              We&apos;re here to support your hackathon journey.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#AEAAA5]">
              Get in touch with the Infusion Society organizing committee and the School of Computing Science & Engineering at Sharda University for registration, mentorship, sponsorship, or venue assistance.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#AEAAA5]">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 border-b border-accentOrange/60 pb-1 text-white hover:text-accentOrange transition-colors"
              >
                <span>Jump to form</span>
                <span>↓</span>
              </a>
              <span>•</span>
              <a
                href="#venue-heading"
                className="inline-flex items-center gap-2 border-b border-accentOrange/60 pb-1 text-white hover:text-accentOrange transition-colors"
              >
                <span>Campus Location</span>
                <span>↓</span>
              </a>
              <span>•</span>
              <a
                href="#faq-heading"
                className="inline-flex items-center gap-2 border-b border-accentOrange/60 pb-1 text-white hover:text-accentOrange transition-colors"
              >
                <span>Read FAQ</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </header>

        {/* PRIMARY CONTACT SECTION (CHANNELS + MAILTO FORM) */}
        <section id="inquiry" aria-labelledby="inquiry-heading" className="py-16 md:py-24 scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 items-start">
            
            {/* LEFT: DIRECT SUPPORT CHANNELS */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accentOrange block mb-2">
                  Direct Channels
                </span>
                <h2 id="inquiry-heading" className="font-royal text-3xl md:text-4xl uppercase tracking-tight text-white">
                  Get Immediate Help
                </h2>
                <p className="mt-2 text-sm text-[#AEAAA5]">
                  Reach out through your preferred communication platform for prompt responses from the core team.
                </p>
              </div>

              {/* Official Email Card */}
              <div className="group rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8 transition-all hover:border-accentOrange/60 hover:bg-[#161616]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accentOrange/10 text-accentOrange">
                    <Mail className="h-6 w-6" />
                  </div>
                  <a
                    href="mailto:hackathon@sharda.ac.in"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-secondary transition-all hover:border-accentOrange hover:text-accentOrange"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="mt-5">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#AEAAA5]">Official Support Email</h3>
                  <a
                    href="mailto:hackathon@sharda.ac.in"
                    className="mt-1 block text-xl md:text-2xl font-medium text-white transition-colors hover:text-accentOrange break-all"
                  >
                    hackathon@sharda.ac.in
                  </a>
                  <p className="mt-2 text-xs text-[#8A8A8A] flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accentOrange" />
                    <span>Average reply time: within 24 hours</span>
                  </p>
                </div>
              </div>

              {/* WhatsApp Community Card */}
              <div className="group rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8 transition-all hover:border-emerald-500/60 hover:bg-[#161616]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <a
                    href="https://chat.whatsapp.com/DxDyWzt3cPV9bqY1keIntq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 transition-all hover:bg-emerald-500 hover:text-black"
                  >
                    <span>Join Group</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="mt-5">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#AEAAA5]">WhatsApp Community</h3>
                  <a
                    href="https://chat.whatsapp.com/DxDyWzt3cPV9bqY1keIntq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-xl md:text-2xl font-medium text-white transition-colors hover:text-emerald-400"
                  >
                    Infusion Hackathon Desk
                  </a>
                  <p className="mt-2 text-xs text-[#8A8A8A]">
                    Join the participant hub for real-time announcements, team matching, and instant support.
                  </p>
                </div>
              </div>

              {/* Organization & Socials */}
              <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">
                <div className="flex items-center gap-3 text-white mb-4">
                  <Users className="h-5 w-5 text-accentOrange" />
                  <h3 className="text-base font-medium">Organized By</h3>
                </div>
                <p className="text-sm text-[#AEAAA5] leading-relaxed">
                  School of Computing Science and Engineering (SCSE), Sharda University in collaboration with the Infusion Society student body.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href="https://www.instagram.com/_team_infusion_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white transition-colors hover:border-accentOrange hover:text-accentOrange"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span>@_team_infusion_</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@shardauniversity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white transition-colors hover:border-accentOrange hover:text-accentOrange"
                  >
                    <Youtube className="h-3.5 w-3.5" />
                    <span>Sharda University</span>
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT: MAILTO CONTACT FORM */}
            <div className="w-full">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* GOOGLE MAPS & VENUE SECTION */}
        <ContactMap />

        {/* QUICK FAQ SECTION */}
        <ContactFAQ />

      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default Contact;
