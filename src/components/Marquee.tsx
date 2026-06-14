const words = [
  "Style Intelligence",
  "Considered Dressing",
  "Fashion Direction",
  "Wardrobe Architecture",
  "Editorial Vision",
  "Timeless Elegance",
];

// Duplicate for seamless loop
const items = [...words, ...words, ...words];

export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-t">
        {items.map((word, i) => (
          <span key={i}>
            <span className="mq-w">{word}</span>
            <span className="mq-d">&mdash;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
