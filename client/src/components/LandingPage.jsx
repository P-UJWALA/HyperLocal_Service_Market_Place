import { useState } from "react";
import { categories } from "../data/categories";
import logo from "../assets/logo.png";
import "../landing.css";

/* ------------------------------------------------------------------ */
/* Small inline icon set — no external icon library dependency.        */
/* ------------------------------------------------------------------ */
function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5h4v5h3.5a1 1 0 0 0 1-1v-9" />
        </svg>
      );
    case "repair":
      return (
        <svg {...common}>
          <path d="M14.5 3.5a4 4 0 0 0-5.4 4.6l-6.4 6.4a2 2 0 1 0 2.8 2.8l6.4-6.4a4 4 0 0 0 4.6-5.4l-2.8 2.8-2-2Z" />
        </svg>
      );
    case "beauty":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "events":
      return (
        <svg {...common}>
          <path d="M12 3c2 2 2 4 0 6s-2 4 0 6" />
          <path d="M9 11h6l1 4H8l1-4Z" />
          <path d="M8 21h8l-1-6H9l-1 6Z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 0 4 23Z" />
          <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 1 2.5 2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2 4.5 5.4 3.7 7.7 3.1 10 4 12 6.5 14 4 16.3 3.1 18.6 3.7 22 4.5 23.3 8 21.5 11.2 19 15.6 12 20 12 20Z" />
        </svg>
      );
    case "needle":
      return (
        <svg {...common}>
          <path d="M20 4 9 15" />
          <circle cx="6" cy="18" r="2.2" />
          <path d="M9 15l2 2M17 4l3 3" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "check-shield":
      return (
        <svg {...common}>
          <path d="M12 3 4.5 6v6c0 5 3.4 8 7.5 9 4.1-1 7.5-4 7.5-9V6L12 3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
          <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16v10H8l-4 4V5Z" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="17" height="12" rx="2" />
          <path d="M16 12h2.5" />
          <path d="M3.5 9h17" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

const accentClasses = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  cta: { bg: "bg-cta/10", text: "text-cta" },
  success: { bg: "bg-success/10", text: "text-success" },
};

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-4">
  <img
    src={logo}
    alt="Nearo Logo"
    className="h-14 w-14 object-contain"
  />

  <span className="font-display text-2xl font-bold text-ink">
    Nearo
  </span>
</a>
        <nav className="hidden items-center gap-8 font-body text-sm font-medium text-muted md:flex">
          <a href="#categories" className="hover:text-ink">Services</a>
          <a href="#how-it-works" className="hover:text-ink">How it works</a>
          <a href="#trust" className="hover:text-ink">Trust & safety</a>
          <a href="#for-workers" className="hover:text-ink">Become a Pro</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#waitlist" className="hidden font-body text-sm font-medium text-ink hover:text-primary sm:block">
            Log in
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-cta px-5 py-2.5 font-body text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */
function ServiceProviderCard() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-ink/5">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
          RK
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-base font-bold text-ink">Ravi Kumar</p>
          <p className="font-body text-sm text-muted">Electrician · 6 yrs experience</p>
        </div>
        <span className="ml-auto flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-success">
          <Icon name="check-shield" className="h-3.5 w-3.5" />
          <span className="font-body text-[11px] font-semibold">Verified</span>
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4 text-cta" />
        ))}
        <span className="ml-1 font-body text-sm font-medium text-ink">4.9</span>
        <span className="font-body text-sm text-muted">(212 ratings)</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["9–11 AM", "2–4 PM", "6–8 PM"].map((slot) => (
          <span key={slot} className="rounded-lg border border-border bg-bg-soft px-3 py-1.5 font-body text-xs font-medium text-ink">
            {slot}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="font-body text-xs text-muted">Starts at</p>
          <p className="font-display text-xl font-bold text-ink">₹149</p>
        </div>
        <button className="rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-white transition hover:brightness-95">
          Book now
        </button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-glow">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1.5 font-body text-xs font-semibold text-success">
            <Icon name="check-shield" className="h-4 w-4" />
            Background-verified professionals
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Trusted local help, booked in minutes.
          </h1>
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-muted">
            Plumbers, electricians, beauticians, tutors and more — verified,
            rated, and paid for safely, all in one app.
          </p>

          <form
            className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-2 shadow-sm sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-1 items-center gap-2 px-3 py-2">
              <Icon name="search" className="h-5 w-5 shrink-0 text-muted" />
              <input
                type="text"
                placeholder="What do you need help with? Try “AC repair”"
                className="w-full bg-transparent font-body text-sm text-ink placeholder:text-muted focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-cta px-6 py-3 font-body text-sm font-semibold text-white transition hover:brightness-95"
            >
              Search
            </button>
          </form>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.slice(0, 5).map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-body text-xs font-medium text-muted transition hover:border-primary/40 hover:text-primary"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>

        <ServiceProviderCard />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */
function TrustStrip() {
  const points = [
    { icon: "check-shield", label: "Verified professionals" },
    { icon: "lock", label: "Secure in-app payments" },
    { icon: "wallet", label: "Transparent, locked pricing" },
    { icon: "star", label: "Rated after every job" },
  ];
  return (
    <div className="border-y border-border bg-bg-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-6 sm:grid-cols-4">
        {points.map((p) => (
          <div key={p.label} className="flex items-center gap-2.5">
            <Icon name={p.icon} className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-body text-sm font-medium text-ink">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Tell us the job",
      body: "Pick a fixed-price service, or describe the problem for a custom quote — photos welcome.",
    },
    {
      n: 2,
      title: "Get matched & chat",
      body: "A verified pro nearby accepts your slot. Chat unlocks in-app — no numbers exchanged.",
    },
    {
      n: 3,
      title: "Pay & rate, both ways",
      body: "Pay by UPI or card at the quoted price — locked, no surprises. Rate each other after.",
    },
  ];
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <span className="font-body text-sm font-semibold uppercase tracking-wide text-primary">
          How it works
        </span>
        <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-bold text-ink sm:text-4xl">
          Booking a pro shouldn't feel like a gamble
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-surface p-7">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */
function Categories() {
  return (
    <section id="categories" className="bg-bg-soft py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-primary">
            What you can book
          </span>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-bold text-ink sm:text-4xl">
            Eight categories, one trusted pro for each
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const accent = accentClasses[c.accent];
            return (
              <a
                key={c.id}
                id={c.id}
                href="#waitlist"
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.bg} ${accent.text}`}>
                  <Icon name={c.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{c.name}</h3>
                <p className="mt-1 font-body text-sm text-muted">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                  Explore
                  <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust & safety — the enhancements over the typical service-app model */
/* ------------------------------------------------------------------ */
function TrustSection() {
  const items = [
    {
      icon: "check-shield",
      title: "Verification that actually means something",
      body: "Every pro clears ID and address checks. In-home categories like eldercare, babysitting and home cleaning require full police verification before they're marked Premium Verified.",
    },
    {
      icon: "wallet",
      title: "The price you approve is the price you pay",
      body: "Once you approve a quote in-app, it's locked as the reference price. Any change needs a new quote and your approval — never a handwritten bill.",
    },
    {
      icon: "chat",
      title: "Your number stays private",
      body: "Chat and calls happen inside the app. Contact details are never exchanged directly, on either side.",
    },
    {
      icon: "star",
      title: "Trust runs in both directions",
      body: "Pros can rate customers too — for safety, punctuality and no-shows — not just the other way around.",
    },
  ];
  return (
    <section id="trust" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <span className="font-body text-sm font-semibold uppercase tracking-wide text-primary">
          Trust & safety
        </span>
        <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-bold text-ink sm:text-4xl">
          Built to fix what other service apps get wrong
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
              <Icon name={item.icon} className="h-5.5 w-5.5" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* For workers                                                         */
/* ------------------------------------------------------------------ */
function ForWorkers() {
  const perks = [
    { icon: "wallet", k: "You set the price", v: "Fixed rate or custom quote — your call, every job." },
    { icon: "clock", k: "You set the hours", v: "Block dates, pause bookings, add buffer time between jobs." },
    { icon: "check-shield", k: "You get paid fast", v: "In-app UPI payouts, no chasing customers for cash." },
  ];
  return (
    <section id="for-workers" className="bg-bg-soft py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-primary">
            For skilled professionals
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Your skill, your schedule, more work with less hassle
          </h2>
          <p className="mt-4 max-w-md font-body text-muted">
            List your services, get verified once, and let nearby customers
            book your open slots directly.
          </p>
          <a
            href="#waitlist"
            className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-ink/90"
          >
            Join as a Pro
          </a>
        </div>
        <div className="space-y-4">
          {perks.map((p) => (
            <div key={p.k} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">{p.k}</p>
                <p className="mt-0.5 font-body text-sm text-muted">{p.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Waitlist CTA banner                                                  */
/* ------------------------------------------------------------------ */
function WaitlistBanner() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="waitlist" className="bg-primary py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Be the first to book — or the first to get booked
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-white/80">
          We're launching in one city first. Leave your number and we'll text
          you the moment we're live nearby.
        </p>
        {submitted ? (
          <p className="mt-8 font-body font-medium text-white">
            You're on the list — we'll be in touch soon.
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="tel"
              required
              placeholder="Your phone number"
              className="w-full rounded-lg border-0 bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-cta px-6 py-3 font-body text-sm font-semibold text-white transition hover:brightness-95"
            >
              Notify me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-display text-xs font-bold text-white">
                
              </span>
              <span className="font-display text-lg font-bold text-ink">Nearo</span>
            </div>
            <p className="mt-3 font-body text-sm text-muted">
              Trusted local services at your doorstep.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-2">
              {categories.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="font-body text-sm text-muted hover:text-ink">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink">Company</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#how-it-works" className="font-body text-sm text-muted hover:text-ink">How it works</a></li>
              <li><a href="#trust" className="font-body text-sm text-muted hover:text-ink">Trust & safety</a></li>
              <li><a href="#for-workers" className="font-body text-sm text-muted hover:text-ink">Become a Pro</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink">Get in touch</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#waitlist" className="font-body text-sm text-muted hover:text-ink">Join the waitlist</a></li>
              <li><span className="font-body text-sm text-muted">support@nearo.app</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6">
          <p className="font-body text-xs text-muted">© 2026 Nearo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function LandingPage() {
  return (
    <div className="font-body text-ink">
      <Navbar />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Categories />
      <TrustSection />
      <ForWorkers />
      <WaitlistBanner />
      <Footer />
    </div>
  );
}
