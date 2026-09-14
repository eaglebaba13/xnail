import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Crown,
  GraduationCap,
  Heart,
  MapPin,
  PackageOpen,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/xnail-hero.jpg";
import detailImage from "@/assets/nail-art-detail.jpg";
import logoAsset from "@/assets/xnail-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xnail Bar Franchise | Premium Nail Business India" },
      {
        name: "description",
        content:
          "Start an Xnail Bar franchise from ₹3.10 lakh + GST. Choose a premium outlet or shop-in-shop nail business with complete brand support.",
      },
      { property: "og:title", content: "Build India's Next Premium Nail Business | Xnail Bar" },
      {
        property: "og:description",
        content: "Choose Xnail Cloud or an Exclusive Outlet and build a premium nail business in your city.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FranchisePage,
});

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  city: z.string().trim().min(2, "Enter your city").max(80),
  model: z.enum(["Cloud", "Exclusive Outlet", "Both Models"]),
});

const proof = [
  ["290+", "Certified Artists", "Professionally trained network"],
  ["11", "Exclusive Stores", "Premium experience centres"],
  ["79", "Cloud Setups", "Shop-in-shop expansion model"],
  ["6,000+", "Happy Clients", "A growing customer community"],
  ["2022", "Founded in Jaipur", "Built for national expansion"],
  ["Pan-India", "Expansion", "Built for nail entrepreneurs"],
];

const comparison = [
  ["Investment", "₹10 Lakh", "₹3.10 Lakh + GST"],
  ["Format", "Exclusive Nail Outlet", "Shop-in-Shop"],
  ["Model", "FOCO", "Cloud / Shop-in-Shop"],
  ["Minimum Guarantee", "3%", "5%"],
  ["Revenue Share", "30% Net Sales", "20% Sales"],
  ["Applicable", "Whichever is higher", "Whichever is higher"],
  ["Agreement", "3 Years", "3 Years"],
  ["Royalty", "As per agreement", "Zero Royalty"],
  ["Franchise Fee", "—", "No Franchise Fee"],
  ["Academy · Wedding · Retail", "Included", "Included"],
  ["Company Support", "Full", "Full"],
];

const reasons = [
  ["01", "Proven brand positioning", "A premium nail experience brand, not simply another salon service."],
  ["02", "Professional artist ecosystem", "A growing network of trained artists supported by an education ecosystem."],
  ["03", "Premium experience", "International techniques, professional products and personalised consultation."],
  ["04", "Hygiene-first operations", "Sterilisation, station sanitisation and consistent quality standards."],
  ["05", "Complete business support", "Setup, training, marketing and systems reduce the complexity of starting alone."],
  ["06", "Multiple revenue opportunities", "Services, retail, bridal and academy income from one location."],
];

const faqs = [
  ["What is Xnail Cloud?", "A shop-in-shop model where a dedicated Xnail nail business operates inside an existing salon or suitable beauty location."],
  ["How much investment is required?", "Xnail Cloud requires ₹3.10 lakh + GST, while the Exclusive Outlet model is positioned at ₹10 lakh."],
  ["What is the revenue-sharing model?", "Cloud follows 5% minimum guarantee or 20% of sales. Exclusive follows 3% minimum guarantee or 30% of net sales—whichever is higher."],
  ["Do I need to be a nail artist?", "No. The model is built for entrepreneurs and investors, with artist training and operational support."],
  ["Can an existing salon take Xnail Cloud?", "Yes. Existing premium salons are one of the primary applications of the shop-in-shop model."],
  ["What support does Xnail provide?", "Setup, training, product support, marketing, operating standards and ongoing business guidance."],
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{copy}</p> : null}
    </div>
  );
}

function AnchorButton({ href, children, variant = "luxury" }: { href: string; children: React.ReactNode; variant?: "luxury" | "goldOutline" }) {
  return <Button asChild variant={variant} size="xl"><a href={href}>{children}</a></Button>;
}

function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = enquirySchema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((issue) => { next[String(issue.path[0])] = issue.message; });
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <main className="overflow-x-hidden bg-background pb-20 text-foreground md:pb-0">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-foreground/10">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <img src={logoAsset.url} alt="Xnail Bar — Xpress your feelings" className="h-16 w-auto object-contain" />
          <a href="tel:+919929720831" className="hidden items-center gap-2 text-sm font-semibold md:flex"><Phone className="size-4 text-primary" /> +91 99297 20831</a>
        </div>
      </header>

      <section className="relative min-h-[860px] border-b border-foreground/10 md:min-h-[820px]">
        <img src={heroImage} alt="Premium Xnail Bar manicure experience" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-[66%_center]" />
        <div className="hero-wash absolute inset-0" />
        <div className="relative mx-auto flex min-h-[860px] max-w-7xl items-end px-5 pb-16 pt-36 md:min-h-[820px] md:items-center md:pb-10 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Born in Jaipur · Built for every city</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.96] text-balance md:text-7xl lg:text-[5.8rem]">Build India&apos;s next <span className="text-primary">premium nail business.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-foreground/75 md:text-lg">Don&apos;t start another salon. Build with a premium nail-art brand powered by artistry, trained professionals and a complete operating ecosystem.</p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <a href="#exclusive" className="model-tile group"><span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Exclusive Outlet</span><strong className="mt-2 block text-3xl">₹10 Lakh</strong><span className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">Explore model <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></a>
              <a href="#cloud" className="model-tile group"><span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Xnail Cloud</span><strong className="mt-2 block text-3xl">₹3.10L + GST</strong><span className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">Explore model <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4"><AnchorButton href="#enquire">Book a franchise call <ArrowDown /></AnchorButton><span className="text-xs text-muted-foreground">Limited city opportunities available.</span></div>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 bg-surface py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow mb-7">Why Xnail is different</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {proof.map(([number, label, copy]) => <div key={label}><strong className="font-display text-3xl text-primary md:text-4xl">{number}</strong><h3 className="mt-2 text-sm font-bold">{label}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{copy}</p></div>)}
          </div>
          <p className="mt-7 text-[10px] leading-4 text-muted-foreground">Current network figures supplied by Xnail and subject to internal verification.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.1fr_.9fr] md:items-center lg:px-8">
          <div><SectionHeading eyebrow="The Xnail story" title="This is more than a nail salon." copy="It is a premium nail experience brand. In 2022, Xnail Bar started in Jaipur with one belief: Indian customers deserve the same level of luxury nail care available in global cities." /><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">From its first studio, Xnail built its reputation around artistry, hygiene, premium products and personalised care—then expanded to Hyderabad and launched its franchise programme.</p><p className="mt-9 border-l-2 border-primary pl-5 font-display text-2xl md:text-3xl">From one studio → to a national nail network.</p></div>
          <div className="relative"><img src={detailImage} alt="Premium black and gold nail artistry" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" /><div className="absolute -bottom-5 -left-4 bg-primary px-5 py-4 text-primary-foreground"><span className="block text-xs font-bold uppercase tracking-[0.15em]">One ecosystem</span><span className="mt-1 block text-sm">Stores · Cloud · Artists · Education · Retail</span></div></div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="A category on the rise" title="Nails are no longer just a salon service." copy="Self-expression, bridal beauty, social media, premium experiences, professional education and retail—Xnail is designed to participate across them all." />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{[[Sparkles,"Self-expression"],[Heart,"Wedding & bridal"],[Users,"Social beauty"],[Crown,"Premium experience"],[GraduationCap,"Education"],[PackageOpen,"Product & retail"]].map(([Icon,label]) => { const C = Icon as typeof Sparkles; return <div key={String(label)} className="flex items-center gap-4 bg-surface p-6"><C className="size-5 text-primary"/><span className="font-semibold">{String(label)}</span></div>;})}</div>
          <p className="mt-12 font-display text-3xl text-primary md:text-5xl">One brand. Multiple revenue streams.</p>
        </div>
      </section>

      <section id="models" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Two ways to partner" title="Choose the business model that fits you." />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <ModelCard id="exclusive" number="01" icon={<DiamondMark />} name="Xnail Exclusive Outlet" label="The complete premium nail bar" price="₹10 Lakh" priceNote="Investment for outlet" commercial={<>3% minimum guarantee <span>or</span> 30% of net sales</>} benefits={["FOCO business model","Company-managed operating expenses as agreed","Complete outlet setup support","Staff recruitment & training","Marketing and operational guidance","Product, inventory, systems & SOP support","3-year agreement · 2-year lock-in"]} best="Investors seeking a complete premium nail business with a larger brand presence." />
            <ModelCard id="cloud" number="02" icon={<Sparkles className="size-5" />} name="Xnail Cloud" label="Shop-in-shop nail business" price="₹3.10L + GST" priceNote="One-time investment" commercial={<>5% minimum guarantee <span>or</span> 20% of sales</>} benefits={["Dedicated shop-in-shop setup","Brand identity & visual setup","Professional nail equipment","Product and artist training","Operational and marketing support","SOPs and ongoing quality support","Zero royalty · No franchise fee · 3 years"]} best="Salon owners and beauty entrepreneurs entering nails with lower initial investment." />
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeading eyebrow="Side-by-side comparison" title="Which Xnail model is right for you?" />
          <div className="mt-12 overflow-x-auto"><table className="w-full min-w-[700px] border-collapse text-left"><thead><tr><th className="p-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">Commercial detail</th><th className="p-4 font-display text-2xl text-brand-gold">Exclusive Outlet</th><th className="p-4 font-display text-2xl text-primary">Xnail Cloud</th></tr></thead><tbody>{comparison.map(([a,b,c]) => <tr key={a} className="border-t border-border"><th className="p-4 text-sm text-muted-foreground">{a}</th><td className="p-4 text-sm font-semibold">{b}</td><td className="p-4 text-sm font-semibold">{c}</td></tr>)}</tbody></table></div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8"><p className="font-display text-2xl">Not sure which model is right for you?</p><AnchorButton href="#enquire">Talk to a business consultant <ArrowRight /></AnchorButton></div>
        </div>
      </section>

      <section className="py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Why invest in Xnail" title="Don’t build a brand from zero." copy="Build with a brand that already has an ecosystem." /><div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{reasons.map(([n,t,c]) => <article key={n} className="border-t border-border pt-5"><span className="text-xs font-bold tracking-[0.16em] text-primary">{n}</span><h3 className="mt-5 font-display text-2xl">{t}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{c}</p></article>)}</div></div></section>

      <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow-dark">The Xnail ecosystem</p><h2 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">You don’t just get a franchise. You join an ecosystem.</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">{[[Store,"Xnail Bar","Premium services"],[Building2,"Xnail Cloud","Shop-in-shop business"],[GraduationCap,"Nail Education","Artist training"],[PackageOpen,"Nail Retail","Professional products"],[Heart,"Bridal & Events","Wedding services"]].map(([Icon,t,c]) => { const C=Icon as typeof Store; return <div key={String(t)}><C className="size-7"/><h3 className="mt-4 font-bold">{String(t)}</h3><p className="mt-1 text-sm opacity-75">{String(c)}</p></div>;})}</div></div></section>

      <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Brand credibility" title="From Jaipur to the next city." /><div className="mt-14 grid gap-8 border-l border-border pl-7 md:grid-cols-5 md:border-l-0 md:border-t md:pl-0 md:pt-8">{[["2022","Founded in Jaipur"],["2023","3,000 client milestone"],["2024","Hyderabad + 6,000 clients"],["2025","Franchise programme launched"],["2026","National expansion"]].map(([y,t],i)=><div key={y} className="relative"><span className="absolute -left-[33px] top-1 size-3 rounded-full bg-primary md:-top-[39px] md:left-0"/><strong className="font-display text-3xl text-primary">{y}</strong><p className="mt-2 text-sm text-muted-foreground">{t}</p>{i===4?<span className="mt-3 inline-block text-xs font-bold uppercase tracking-[.12em] text-brand-gold">Your city could be next</span>:null}</div>)}</div></div></section>

      <SupportAndRevenue />

      <section className="py-24"><div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[.8fr_1.2fr] lg:px-8"><SectionHeading eyebrow="Who can partner" title="You don’t need to be a nail artist." copy="We bring the brand, systems and support. You bring the ambition to build your city." /><div className="grid grid-cols-2 gap-3">{["Salon Owners","Beauty Entrepreneurs","Existing Business Owners","Investors","Women Entrepreneurs","Academy Owners","Beauty Professionals","Salon Chains"].map(x=><div key={x} className="flex items-center gap-3 border-b border-border py-4 text-sm font-semibold"><Check className="size-4 text-primary"/>{x}</div>)}</div></div></section>

      <section className="border-y border-foreground/10 bg-surface py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end"><SectionHeading eyebrow="Your city could be next" title="We are looking for the right partners." copy="Xnail is expanding beyond Jaipur and Hyderabad into India's next high-potential beauty markets." /><div className="flex flex-wrap gap-2">{["Jaipur","Mumbai","Pune","Ahmedabad","Surat","Vadodara","Jhansi","Varanasi","Prayagraj","Udaipur","Hyderabad","Patiala"].map(city=><span key={city} className="border border-border px-3 py-2 text-xs text-muted-foreground"><MapPin className="mr-1 inline size-3 text-primary"/>{city}</span>)}</div></div></div></section>

      <section id="enquire" className="py-24 md:py-32"><div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[.9fr_1.1fr] lg:px-8"><div><SectionHeading eyebrow="Become a franchise partner" title="Let’s build Xnail in your city." copy="Get the complete franchise information, commercial model and investment details." /><div className="mt-8 flex items-center gap-3 text-sm"><Phone className="size-5 text-primary"/><div><span className="block text-muted-foreground">Prefer to speak directly?</span><a href="tel:+919929720831" className="font-bold">+91 99297 20831</a></div></div></div>
        <div className="border border-border bg-surface p-6 md:p-9">{submitted ? <div className="flex min-h-[410px] flex-col items-center justify-center text-center"><CircleCheck className="size-12 text-primary"/><h3 className="mt-5 font-display text-3xl">Thank you for your interest.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Your details are ready. Please call our franchise team to continue immediately.</p><div className="mt-7"><AnchorButton href="tel:+919929720831"><Phone/> Call +91 99297 20831</AnchorButton></div></div> : <EnquiryForm onSubmit={submitForm} errors={errors}/>}</div>
      </div></section>

      <section className="final-panel py-24 text-center md:py-32"><div className="mx-auto max-w-5xl px-5"><p className="eyebrow">Your city has salons</p><h2 className="mt-5 font-display text-5xl leading-[.98] md:text-7xl">Now give it <span className="text-primary">Xnail.</span></h2><p className="mx-auto mt-6 max-w-2xl text-muted-foreground">A premium nail business built around brand + artistry + education + operations + marketing.</p><div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2"><div className="border border-brand-gold/40 p-5"><strong className="font-display text-3xl text-brand-gold">₹3.10L + GST</strong><span className="mt-1 block text-xs uppercase tracking-[.15em]">Xnail Cloud</span></div><div className="border border-primary/40 p-5"><strong className="font-display text-3xl text-primary">₹10 Lakh</strong><span className="mt-1 block text-xs uppercase tracking-[.15em]">Exclusive Outlet</span></div></div><div className="mt-9"><AnchorButton href="#enquire">Book my franchise call <ArrowRight/></AnchorButton></div></div></section>

      <section className="border-t border-foreground/10 py-24"><div className="mx-auto max-w-4xl px-5 lg:px-8"><SectionHeading eyebrow="Questions, answered" title="Franchise FAQ" /><div className="mt-10 divide-y divide-border">{faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<ChevronDown className="size-4 shrink-0 text-primary transition-transform group-open:rotate-180"/></summary><p className="max-w-3xl pt-3 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div></div></section>

      <footer className="border-t border-foreground/10 bg-surface py-12"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center md:flex-row md:text-left lg:px-8"><img src={logoAsset.url} alt="Xnail Bar" className="h-16 w-auto"/><div className="text-xs leading-5 text-muted-foreground"><p>A Sister Concern Brand Under One Stop Mall of Salon Pvt. Ltd. Group</p><p>© 2026 Xnail Bar. All rights reserved.</p></div><a href="tel:+919929720831" className="flex items-center gap-2 text-sm font-bold"><Phone className="size-4 text-primary"/> +91 99297 20831</a></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/30 bg-brand-ink/95 p-3 backdrop-blur md:bottom-5 md:left-auto md:right-5 md:w-auto md:border"><Button asChild variant="luxury" size="xl" className="w-full"><a href="tel:+919929720831"><Phone/> <span>99297 20831</span><span className="opacity-60">·</span><span>Book franchise call</span></a></Button></div>
    </main>
  );
}

function DiamondMark() { return <span className="block size-4 rotate-45 border-2 border-current"/>; }

function ModelCard({ id, number, icon, name, label, price, priceNote, commercial, benefits, best }: { id:string; number:string; icon:React.ReactNode; name:string; label:string; price:string; priceNote:string; commercial:React.ReactNode; benefits:string[]; best:string }) {
  return <article id={id} className="scroll-mt-8 border border-border bg-surface p-6 md:p-9"><div className="flex items-center justify-between text-primary"><span className="flex items-center gap-3">{icon}<b className="text-xs tracking-[.15em]">MODEL {number}</b></span><span className="text-xs text-muted-foreground">FRANCHISE FORMAT</span></div><h3 className="mt-8 font-display text-3xl md:text-4xl">{name}</h3><p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">{label}</p><div className="my-8 border-y border-border py-7"><strong className="font-display text-4xl text-primary md:text-5xl">{price}</strong><span className="ml-3 text-xs text-muted-foreground">{priceNote}</span></div><p className="text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">Commercial model</p><p className="mt-3 text-xl font-bold capitalize [&_span]:mx-1 [&_span]:text-primary">{commercial}</p><p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-primary">Whichever is higher</p><div className="mt-8 space-y-3">{benefits.map(x=><p key={x} className="flex gap-3 text-sm text-foreground/80"><Check className="mt-0.5 size-4 shrink-0 text-primary"/>{x}</p>)}</div><div className="mt-8 border-t border-border pt-6"><span className="text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">Best for</span><p className="mt-2 text-sm leading-6">{best}</p></div><div className="mt-7"><AnchorButton href="#enquire" variant="goldOutline">Explore {price} model <ArrowRight/></AnchorButton></div></article>;
}

function SupportAndRevenue() {
  const support = [["Before launch",["Location guidance","Outlet planning","Setup & equipment","Product planning","Artist recruitment"]],["During launch",["Training","Marketing launch","Digital assets","SOP implementation","Service menu"]],["After launch",["Operational guidance","Marketing support","Continuous training","Replenishment","Growth support"]]] as const;
  return <section className="border-y border-foreground/10 bg-surface py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="From idea to operations" title="We support you at every stage."/><div className="mt-14 grid gap-px bg-border md:grid-cols-3">{support.map(([title,items],i)=><div key={title} className="bg-surface p-7"><span className="text-xs font-bold text-primary">0{i+1}</span><h3 className="mt-4 font-display text-2xl">{title}</h3><div className="mt-6 space-y-3">{items.map(x=><p key={x} className="flex items-center gap-3 text-sm text-muted-foreground"><Check className="size-4 text-primary"/>{x}</p>)}</div></div>)}</div><div className="mt-20 grid gap-10 md:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Revenue engine" title="One location. Multiple ways to earn."/><div className="grid grid-cols-2 gap-4">{[["Services","Extensions · Art · Gel · Mani-pedi"],["Premium bookings","Bridal · Wedding · Events"],["Retail","Products · Accessories"],["Education","Courses · Workshops · Certification"]].map(([t,c])=><div key={t} className="border-l-2 border-primary pl-4 py-2"><h3 className="font-bold">{t}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{c}</p></div>)}</div></div></div></section>;
}

function EnquiryForm({ onSubmit, errors }: { onSubmit:(e:FormEvent<HTMLFormElement>)=>void; errors:Record<string,string> }) {
  return <form onSubmit={onSubmit} noValidate><div className="grid gap-5 sm:grid-cols-2"><Field name="name" label="Full Name" placeholder="Your full name" error={errors["name"]}/><Field name="mobile" label="Mobile Number" placeholder="10-digit mobile number" inputMode="numeric" error={errors["mobile"]}/><Field name="city" label="City" placeholder="Your city" error={errors["city"]}/><div><label htmlFor="model" className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">Interested model</label><select id="model" name="model" defaultValue="" className="h-12 w-full border border-input bg-background px-3 text-sm outline-none focus:border-primary"><option value="" disabled>Select a model</option><option value="Cloud">₹3.10L + GST — Xnail Cloud</option><option value="Exclusive Outlet">₹10L — Exclusive Outlet</option><option value="Both Models">Both Models</option></select>{errors["model"]?<p className="mt-1 text-xs text-destructive">{errors["model"]}</p>:null}</div></div><Button variant="luxury" size="xl" className="mt-7 w-full" type="submit">Get franchise details <ArrowRight/></Button><p className="mt-4 text-center text-xs leading-5 text-muted-foreground">By submitting, you agree to be contacted by the Xnail franchise team.</p></form>;
}

function Field({ name, label, placeholder, error, inputMode }: { name:string; label:string; placeholder:string; error:string | undefined; inputMode?:"numeric" }) { return <div><label htmlFor={name} className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">{label}</label><Input id={name} name={name} placeholder={placeholder} inputMode={inputMode} className="h-12 rounded-none bg-background" aria-invalid={Boolean(error)}/>{error?<p className="mt-1 text-xs text-destructive">{error}</p>:null}</div>; }