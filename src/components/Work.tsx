import Image from "next/image";
import Link from "next/link";
import { imgs } from "../lib/images";

const works = [
  {
    img: imgs.work1,
    alt: "AW collection editorial styling shoot",
    tag: "Editorial Styling",
    title: "AW Collection Direction",
    cls: "wi-1",
  },
  {
    img: imgs.work2,
    alt: "Personal styling session — the complete edit",
    tag: "Personal Styling",
    title: "The Complete Edit",
    cls: "wi-2",
  },
  {
    img: imgs.work3,
    alt: "Trend intelligence editorial series",
    tag: "Creative Direction",
    title: "Trend Intelligence Series",
    cls: "wi-3",
  },
];

export default function Work() {
  return (
    <section className="work" id="work">
      <p className="s-lbl">Selected Work</p>
      <h2 className="wk-h rv">
        A portfolio of
        <br />
        <em>considered</em> vision
      </h2>
      <div className="wk-grid">
        {works.map((w) => (
          <div className={`wi ${w.cls}`} key={w.cls}>
            <Image
              src={w.img}
              alt={w.alt}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
              sizes="(max-width: 800px) 100vw, 50vw"
              className="wi-photo"
            />
            <div className="wi-ov">
              <div>
                <span className="wi-tag">{w.tag}</span>
                <span className="wi-title">{w.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link
          href="/work"
          className="cta-line rv"
          style={{ color: "var(--gold-s)", borderBottomColor: "var(--gold-s)" }}
        >
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
