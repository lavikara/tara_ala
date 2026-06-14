import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Personal Styling',
    desc: 'A comprehensive styling engagement — wardrobe edit, colour and body profile, style architecture, and curated shopping — aligned to your lifestyle and how you wish to present yourself.',
  },
  {
    num: '02',
    title: 'Wardrobe Consultation',
    desc: "An incisive audit of your existing wardrobe. What works, what doesn't, and the precise gaps that — once filled — will make everything else function at its best.",
  },
  {
    num: '03',
    title: 'Editorial Direction',
    desc: 'Creative and fashion direction for editorial, campaign, and digital content — bringing a discerning, trend-intelligent eye to every visual narrative and brand story.',
  },
];

export default function Services() {
  return (
    <section className="svc" id="services">
      <div className="svc-hdr rv">
        <h2 className="svc-h">
          How I can work<br /><em>with you</em>
        </h2>
        <p className="svc-intro">
          Each engagement begins with listening — your life, your values, your aspirations.
          These become the architecture from which everything is built.
        </p>
      </div>
      <div className="svc-grid">
        {services.map((s) => (
          <div className="sc" key={s.num}>
            <span className="sc-n">{s.num}</span>
            <h3 className="sc-title">{s.title}</h3>
            <p className="sc-d">{s.desc}</p>
            <Link href="/contact" className="sc-lk">Enquire &rarr;</Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/services" className="cta-line rv">View All Services</Link>
      </div>
    </section>
  );
}
