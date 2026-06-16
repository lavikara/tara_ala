const U = 'https://images.unsplash.com';

export type ArticleSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'ul'; items: string[] };

export interface Article {
  slug: string;
  tag: string;
  img: string;
  imgWide: string;
  alt: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  body: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: 'capsule-wardrobe',
    tag: 'Style Intelligence',
    img: `${U}/photo-1483985988355-763728e1935b?w=700&q=80&auto=format&fit=crop`,
    imgWide: `${U}/photo-1483985988355-763728e1935b?w=1400&q=85&auto=format&fit=crop`,
    alt: 'Woman browsing a fashion boutique',
    title: "Why Your Capsule Wardrobe Isn't Working",
    excerpt:
      "The capsule wardrobe has been romanticised to the point of uselessness. Here's what a truly functional minimal wardrobe actually requires.",
    date: 'June 2026',
    dateISO: '2026-06-01',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: "The capsule wardrobe promised simplicity. Instead, it has become its own form of anxiety — a curated checklist of 'essentials' that somehow never quite feels essential. The Pinterest boards are flawless. The actual wardrobe is not.",
      },
      {
        type: 'p',
        text: "After a decade of working with women on their wardrobes, I have come to believe the capsule wardrobe concept fails not because minimalism is wrong, but because most people apply it backwards. They start with a list of pieces. They should start with a life.",
      },
      {
        type: 'h2',
        text: 'The list is not the problem',
      },
      {
        type: 'p',
        text: "The 'ten pieces' or 'thirty pieces' frameworks you find in every style guide are not inherently flawed. The flaw is in treating them as universal rather than personal. A white shirt is a capsule essential for a barrister. It is largely useless for a ceramicist. Context is not a footnote — it is the entire premise.",
      },
      {
        type: 'p',
        text: "The first question I ask every client is not 'what do you want to wear?' but 'what does your week actually look like?' Most people are surprised by how specific the answer needs to be. Not just 'I work in an office' but: What is the culture of that office? Do you present to clients? Do you travel for work, and if so, to where?",
      },
      {
        type: 'quote',
        text: "A wardrobe built for the life you aspire to is aspirational furniture. It looks beautiful and goes largely unused.",
        attribution: 'Tara Ala',
      },
      {
        type: 'h2',
        text: 'The identity gap',
      },
      {
        type: 'p',
        text: "There is a second, more uncomfortable reason capsule wardrobes fail: most people do not have a clear enough sense of their own aesthetic to build one coherently. And so they default to what looks 'right' in theory — the navy blazer, the white trainers, the camel coat — rather than what is true to them.",
      },
      {
        type: 'p',
        text: "This produces a wardrobe that is entirely acceptable and almost entirely joyless. Everything matches because everything is neutral. Nothing speaks because nothing was chosen with enough conviction to have a voice.",
      },
      {
        type: 'h2',
        text: 'What actually works',
      },
      {
        type: 'ul',
        items: [
          'Start with your three most-worn outfits from the last six months. These are your real aesthetic, not your aspirational one.',
          'Identify what they have in common — silhouette, colour temperature, fabric weight, formality level.',
          'Build out from those common threads, not from a generic list.',
          'Allow for exactly one category of aspiration: pieces that stretch your style just far enough to be energising without being alienating.',
          'Revisit the wardrobe seasonally, not to add but to audit — what has not been worn and why?',
        ],
      },
      {
        type: 'p',
        text: "The capsule wardrobe works when it is a reflection of who you are and how you live right now — not a projection of who you intend to become. That gap between reality and aspiration is where unworn clothes go to wait.",
      },
      {
        type: 'h2',
        text: 'The role of a stylist',
      },
      {
        type: 'p',
        text: "This is precisely the work I do with clients: not imposing a formula, but excavating the personal. What are you already drawn to? What do you reach for instinctively? What makes you feel most like yourself? The answers to those questions are the only valid starting points for a wardrobe that will actually be worn.",
      },
    ],
  },
  {
    slug: 'mood-board',
    tag: 'Creative Direction',
    img: `${U}/photo-1490481651871-ab68de25d43d?w=700&q=80&auto=format&fit=crop`,
    imgWide: `${U}/photo-1490481651871-ab68de25d43d?w=1400&q=85&auto=format&fit=crop`,
    alt: 'Flat lay of elegant clothing pieces',
    title: 'The Art of the Mood Board',
    excerpt:
      "A mood board is not a Pinterest board. It is a precision instrument — and knowing the difference is what separates good creative direction from great.",
    date: 'May 2026',
    dateISO: '2026-05-15',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: "Every creative director has a mood board story — the one where the client looked at it and said 'I love it' and then, on the day of the shoot, was visibly confused by what appeared on set. The mood board had communicated something. Unfortunately, it had communicated it only to the person who made it.",
      },
      {
        type: 'p',
        text: "This is the central challenge of mood boarding: images mean different things to different people. What reads as 'editorial cool' to a stylist might read as 'unwearable' to a brand director. What feels like 'minimal luxury' in one context registers as 'cold and inaccessible' in another.",
      },
      {
        type: 'h2',
        text: 'Intention, not inspiration',
      },
      {
        type: 'p',
        text: "The distinction I make in all my creative direction work is between an inspiration board and a mood board. An inspiration board is a collection of things you find beautiful. A mood board is a precise brief — every image chosen to communicate something specific about colour, texture, silhouette, feeling, or cultural reference.",
      },
      {
        type: 'p',
        text: "When I build a mood board for an editorial project, each image is there for a reason I can articulate. Not 'I love this photograph' but 'this photograph communicates the quality of light I want.' Not 'this outfit is beautiful' but 'this silhouette is the shape language of the collection.'",
      },
      {
        type: 'quote',
        text: "A mood board should answer questions before they are asked. If you find yourself explaining it, it is not finished yet.",
        attribution: 'Tara Ala',
      },
      {
        type: 'h2',
        text: 'The anatomy of a good board',
      },
      {
        type: 'ul',
        items: [
          'A dominant colour story — not a colour palette, but a feeling expressed through colour',
          'Two or three reference silhouettes that define the shape of the work',
          'Texture and fabric references that communicate materiality',
          'A cultural or art historical anchor — something that places the work in a lineage',
          'One unexpected image that introduces tension and prevents the whole thing from being too safe',
        ],
      },
      {
        type: 'h2',
        text: 'When to break the rules',
      },
      {
        type: 'p',
        text: "Sometimes the best mood board is the one that refuses categorisation. I have presented boards built entirely around a single painting, a paragraph of text, and three fabric swatches. What matters is not the format but the clarity of intention it produces in everyone who encounters it.",
      },
    ],
  },
  {
    slug: 'difficult-colour',
    tag: 'Considered Dressing',
    img: `${U}/photo-1539109136881-3be0616acf4b?w=700&q=80&auto=format&fit=crop`,
    imgWide: `${U}/photo-1539109136881-3be0616acf4b?w=1400&q=85&auto=format&fit=crop`,
    alt: 'Model in colourful editorial fashion look',
    title: 'In Praise of the Difficult Colour',
    excerpt:
      'The colours you instinctively avoid are often the ones that would transform your wardrobe. On overcoming the tyranny of safe choices.',
    date: 'May 2026',
    dateISO: '2026-05-01',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: "Most wardrobes I encounter have a shape. They tend towards one end of a spectrum and away from another. The spectrum is usually light-to-dark, warm-to-cool, or neutral-to-saturated. And almost universally, there is a colour — sometimes a whole family of colours — that the wardrobe has arranged itself to avoid.",
      },
      {
        type: 'p',
        text: "When I ask clients about this colour, they rarely say they dislike it. More often they say: 'it doesn't suit me', or 'I've never been able to wear it', or simply 'I don't know, I've just never gone there.' These are not aesthetic judgements. They are habits, usually formed in adolescence and never revisited.",
      },
      {
        type: 'h2',
        text: "The colour that doesn't suit you",
      },
      {
        type: 'p',
        text: "The belief that certain colours are simply incompatible with certain people is widespread and, in my experience, largely incorrect. What is usually true is that certain shades within a colour family are unflattering — but the family itself contains a shade that would be extraordinary.",
      },
      {
        type: 'p',
        text: "Clients who tell me they 'can't wear yellow' almost always mean they can't wear a particular cool, acid yellow. They are usually electrifying in a warm ochre or a deep, burnt gold. The category has taken the blame for a specific failure of shade.",
      },
      {
        type: 'quote',
        text: "The colour you have never worn is the most interesting data point in your wardrobe.",
        attribution: 'Tara Ala',
      },
      {
        type: 'h2',
        text: 'How to approach it',
      },
      {
        type: 'ul',
        items: [
          'Identify the colour family you avoid. Then identify the specific shade that put you off.',
          'Find three different iterations of that colour across the temperature and saturation spectrum.',
          'Try them against your face in natural light — not in a changing room, not on a screen.',
          'Introduce the colour first in a small piece: a scarf, a shoe, a bag. Give yourself permission to experiment without commitment.',
          'Notice how the colour changes against your existing wardrobe — sometimes the issue is not the colour itself but what it is being paired with.',
        ],
      },
      {
        type: 'h2',
        text: 'The wardrobe that takes no risks',
      },
      {
        type: 'p',
        text: "A wardrobe composed entirely of safe colours is a wardrobe that has never been fully inhabited. Colour is one of the primary means by which clothing communicates — mood, energy, intention. To avoid it entirely is to limit the range of what you can say.",
      },
      {
        type: 'p',
        text: "I am not arguing for maximalism. I am arguing for one considered departure from the established palette — one colour that surprises, that energises, that gives the rest of the wardrobe something to respond to.",
      },
    ],
  },
  {
    slug: 'professional-dressing',
    tag: 'Style Intelligence',
    img: `${U}/photo-1441984904996-e0b6ba687e04?w=700&q=80&auto=format&fit=crop`,
    imgWide: `${U}/photo-1441984904996-e0b6ba687e04?w=1400&q=85&auto=format&fit=crop`,
    alt: 'Clothing rack in a minimal fashion studio',
    title: 'Dressing for the Job You Have',
    excerpt:
      'Professional dressing has been democratised to the point of chaos. How do you project authority and authenticity when anything goes?',
    date: 'April 2026',
    dateISO: '2026-04-15',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: "The collapse of the dress code has been, depending on your perspective, either a liberation or a catastrophe. For most of the women I work with, it has been both. The freedom is real. The anxiety that fills the vacuum where rules used to be is also real.",
      },
      {
        type: 'p',
        text: "When everything is acceptable, nothing communicates. The implicit grammar of professional dress — the signals that once told you at a glance whether someone was a senior partner or a graduate trainee — has been dismantled. And in its place, there is only individual choice, which is another way of saying individual responsibility.",
      },
      {
        type: 'h2',
        text: 'Authority is not a suit',
      },
      {
        type: 'p',
        text: "The old solution to professional dressing was straightforward: dress like the most senior person in the room, slightly better. The suit was the shorthand for seriousness. Now that the suit is optional, what is?",
      },
      {
        type: 'p',
        text: "What projects authority in contemporary professional contexts is not a specific garment but a quality of presence — the sense that what you are wearing was a considered choice, that it fits impeccably, that it is appropriate without being conformist. The opposite of authority is not casualness; it is carelessness.",
      },
      {
        type: 'quote',
        text: "People notice when you are dressed with intention, even if they cannot articulate what they are noticing. They notice when you are not, too.",
        attribution: 'Tara Ala',
      },
      {
        type: 'h2',
        text: 'Reading the room',
      },
      {
        type: 'p',
        text: "Professional dressing is fundamentally contextual. The correct approach in a creative agency is the wrong approach in a law firm. Both have dress codes; neither is written down. Learning to read these unspoken codes — and to dress within them while still maintaining a coherent personal aesthetic — is a sophisticated skill.",
      },
      {
        type: 'ul',
        items: [
          'Observe the dress of the most respected people in your professional environment, not the most fashionable.',
          'Identify the upper and lower registers of acceptable dress and position yourself consistently at the upper end.',
          'Invest in quality of construction and fit above all else — a simple, well-cut outfit always reads as more authoritative than a complex, poorly fitted one.',
          'Dress for who is in the room, not just who is usually there — always consider the most senior or most formal presence that might be encountered.',
          'Build a small set of what I call "authority pieces" — two or three garments that can elevate any outfit when needed.',
        ],
      },
      {
        type: 'h2',
        text: 'Authenticity within constraint',
      },
      {
        type: 'p',
        text: "The most powerful professional dressing achieves something that looks effortless but is not: it signals belonging to the professional context while simultaneously expressing something individual. A distinctive accessory. An unexpected colour within an otherwise conventional palette. A silhouette that is contemporary rather than generic.",
      },
      {
        type: 'p',
        text: "This is the work. Not choosing between authenticity and authority, but finding the specific expression of both that belongs to you and to this context at this moment in your professional life.",
      },
    ],
  },
  {
    slug: 'investment-pieces',
    tag: 'Wardrobe Architecture',
    img: `${U}/photo-1523381294911-8d3cead13475?w=700&q=80&auto=format&fit=crop`,
    imgWide: `${U}/photo-1523381294911-8d3cead13475?w=1400&q=85&auto=format&fit=crop`,
    alt: 'Neatly organised wardrobe with neutral tones',
    title: 'The Investment Piece Framework',
    excerpt:
      "Not everything deserves to be an investment. On developing the discernment to know which pieces warrant spending more — and which don't.",
    date: 'April 2026',
    dateISO: '2026-04-01',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: "The fashion industry has a vested interest in convincing you that everything is an investment. The cashmere jumper is an investment. The handbag is an investment. The shoes, the coat, the jewellery — all investments. At the logical extreme of this argument, everything you buy is justified and nothing is a luxury.",
      },
      {
        type: 'p',
        text: "The truth is considerably more useful and considerably less flattering: most things you buy are not investments. They are purchases. Some of those purchases are good ones and some are not, but calling them investments does not change what they are.",
      },
      {
        type: 'h2',
        text: 'What actually qualifies',
      },
      {
        type: 'p',
        text: "An investment piece, properly defined, is a garment that will repay its cost through sustained use over multiple years, improve with age or at minimum maintain its quality, and remain aesthetically relevant for a period that justifies its price relative to cheaper alternatives.",
      },
      {
        type: 'p',
        text: "By this definition, a £400 cashmere jumper worn 150 times over five years is a better investment than a £40 jumper that pills after ten washes. The calculation is not about price but about cost-per-wear — and cost-per-wear is a function of quality, versatility, and longevity, not of initial expenditure.",
      },
      {
        type: 'quote',
        text: "The question is never 'is this expensive?' It is 'is this worth it for how, and how often, I will actually use it?'",
        attribution: 'Tara Ala',
      },
      {
        type: 'h2',
        text: 'Where to invest and where not to',
      },
      {
        type: 'ul',
        items: [
          'Invest in structure: coats, tailoring, and footwear. These are the pieces where construction quality is most visible and most consequential.',
          'Invest in the pieces you wear most frequently — identify your three most-reached-for categories and spend accordingly.',
          'Do not invest in trend pieces, however well made. A beautifully constructed garment that is season-specific is still season-specific.',
          'Do not invest in aspirational pieces — things bought for a lifestyle you do not yet live. A cost-per-wear of zero is not an investment.',
          'Invest in fit above all else. The most expensive garment, incorrectly fitted, is worth less than a cheap one that fits perfectly.',
        ],
      },
      {
        type: 'h2',
        text: 'The long view',
      },
      {
        type: 'p',
        text: "The wardrobe that is built slowly, with discernment, is always more useful and more coherent than the one assembled quickly and with enthusiasm. Investment pieces are not about spending more money. They are about spending it with more thought — and being honest about what your life actually requires rather than what you wish it did.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}

// ── Async data fetchers (simulate network latency) ────────────────────────
// In production, replace the delay with a real CMS/API call (e.g. Contentful,
// Sanity, or a database query). The artificial wait ensures loading.tsx fires.

const SIMULATED_DELAY_MS = 1800;

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function fetchArticles(): Promise<Article[]> {
  await delay(SIMULATED_DELAY_MS);
  return articles;
}

export async function fetchArticleBySlug(slug: string): Promise<Article | undefined> {
  await delay(SIMULATED_DELAY_MS);
  return articles.find((a) => a.slug === slug);
}

export async function fetchRelatedArticles(
  currentSlug: string,
  count = 3
): Promise<Article[]> {
  await delay(SIMULATED_DELAY_MS);
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}
