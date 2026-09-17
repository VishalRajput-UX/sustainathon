import React, { useState } from 'react';
import { Send, Check, Copy, AlertCircle } from 'lucide-react';

const CATEGORIES = [
  'General Query',
  'Participant & Team',
  'Sponsorship & Partnership',
  'Mentorship & Judging',
  'Campus Ambassador',
  'Other'
];

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hackathon@sharda.ac.in');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields before proceeding.');
      return;
    }

    setError('');
    const subject = `[Sustainathon 2.0] ${category} - ${name.trim()}`;
    const body = `Name: ${name.trim()}
Email: ${email.trim()}
Inquiry Category: ${category}

Message:
${message.trim()}

---
Sent via Sustainathon 2.0 Web Portal`;

    const mailtoUrl = `mailto:hackathon@sharda.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger user's default email client
    window.location.href = mailtoUrl;
    setStatus('submitted');
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-10 shadow-2xl backdrop-blur-sm">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accentOrange">
            Direct Inquiry
          </span>
          <h2 className="font-royal text-2xl uppercase tracking-tight text-white md:text-3xl">
            Send A Message
          </h2>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-secondary/80 transition-all hover:border-accentOrange hover:bg-white/10 hover:text-white"
          title="Copy email to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {status === 'submitted' && (
        <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-sm text-emerald-300">
          <p className="font-medium">
            Your email client has been triggered with the prefilled message!
          </p>
          <p className="mt-1 text-xs text-emerald-300/80">
            If your email app did not open automatically, you can directly email us at{' '}
            <a
              href="mailto:hackathon@sharda.ac.in"
              className="underline hover:text-emerald-100 font-semibold"
            >
              hackathon@sharda.ac.in
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-3 text-xs uppercase tracking-wider text-emerald-200 underline hover:text-white"
          >
            Compose another message
          </button>
        </div>
      )}

      {error && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-950/30 p-3 text-xs text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-[#AEAAA5]">
              Full Name <span className="text-accentOrange">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className="w-full rounded-lg border border-white/10 bg-[#0C0C0C] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-accentOrange focus:outline-none focus:ring-1 focus:ring-accentOrange"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-[#AEAAA5]">
              Email Address <span className="text-accentOrange">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@university.edu"
              className="w-full rounded-lg border border-white/10 bg-[#0C0C0C] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-accentOrange focus:outline-none focus:ring-1 focus:ring-accentOrange"
            />
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-xs font-medium uppercase tracking-wider text-[#AEAAA5]">
            Inquiry Category
          </label>
          <div className="relative">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-lg border border-white/10 bg-[#0C0C0C] px-4 py-3 text-sm text-white transition-colors focus:border-accentOrange focus:outline-none focus:ring-1 focus:ring-accentOrange cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#121212] text-white">
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50">
              ▼
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-[#AEAAA5]">
            Your Message <span className="text-accentOrange">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what's on your mind or how we can assist you..."
            className="w-full resize-y rounded-lg border border-white/10 bg-[#0C0C0C] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-accentOrange focus:outline-none focus:ring-1 focus:ring-accentOrange leading-relaxed"
          />
        </div>

        {/* Submit / Mailto Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-[#8A8A8A] leading-relaxed">
            Clicking send will prepare your message in your default email client via <code className="font-mono text-white/70">mailto:</code>.
          </p>

          <button
            type="submit"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-accentOrange hover:text-white hover:scale-105 active:scale-95 shadow-lg shrink-0"
          >
            <span>Send via Email</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  );
};
