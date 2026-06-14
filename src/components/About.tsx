import Image from "next/image";
import Link from "next/link";
import { imgs } from "../lib/images";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="a-img">
        <Image
          src={imgs.about}
          alt="Elegant woman in a fashion boutique"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>
      <div className="a-content rv">
        <p className="s-lbl">About</p>
        <h2 className="a-h">
          Style that speaks
          <br />
          before <em>you</em> do.
        </h2>
        <div className="a-body">
          <p>
            I work with women who understand that dressing is a considered act —
            that the space between wardrobe and world is where identity is most
            plainly expressed.
          </p>
          <p>
            With a foundation in fashion education at London College of Fashion
            and over a decade of professional experience spanning styling,
            editorial direction, and brand development, I bring an analytical
            intelligence to aesthetic decisions.
          </p>
          <p>
            This is not about trends. It is about cultivating a personal visual
            language — coherent, elevated, and entirely yours.
          </p>
        </div>
        <Link href="/about" className="cta-line">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}
