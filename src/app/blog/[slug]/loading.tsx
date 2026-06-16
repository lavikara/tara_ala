export default function ArticleLoading() {
  return (
    <div aria-busy="true" aria-label="Loading article">

      {/* Hero skeleton — dark, full bleed */}
      <div
        style={{
          height: '72vh',
          minHeight: 480,
          background: 'var(--dark)',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {/* Shimmer overlay */}
        <div
          className="sk-d"
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* Content placeholders */}
        <div
          style={{
            position: 'relative',
            padding: '0 var(--px) 4.5rem',
            width: '100%',
            maxWidth: 860,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {/* Tag */}
          <div className="sk-d" style={{ width: 110, height: 9, borderRadius: 2 }} />
          {/* Title lines */}
          <div className="sk-d" style={{ width: 'clamp(200px, 55%, 540px)', height: 56, borderRadius: 2 }} />
          <div className="sk-d" style={{ width: 'clamp(140px, 38%, 380px)', height: 56, borderRadius: 2 }} />
          {/* Meta bar */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <div className="sk-d" style={{ width: 80,  height: 9, borderRadius: 2 }} />
            <div className="sk-d" style={{ width: 70,  height: 9, borderRadius: 2 }} />
            <div className="sk-d" style={{ width: 60,  height: 9, borderRadius: 2 }} />
          </div>
        </div>
      </div>

      {/* Article body skeleton */}
      <div
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '5rem var(--px) 6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {/* Back link */}
        <div className="sk" style={{ width: 120, height: 9, marginBottom: '2rem' }} />

        {/* Intro paragraph (larger) */}
        <div className="sk" style={{ width: '100%', height: 22 }} />
        <div className="sk" style={{ width: '95%',  height: 22 }} />
        <div className="sk" style={{ width: '80%',  height: 22, marginBottom: '1rem' }} />

        {/* Normal paragraphs */}
        {[100, 92, 85, 100, 96, 78].map((w, i) => (
          <div key={i} className="sk" style={{ width: `${w}%`, height: 14 }} />
        ))}

        {/* H2 skeleton */}
        <div className="sk" style={{ width: '55%', height: 28, margin: '2rem 0 0.5rem' }} />

        {[100, 94, 87, 100, 91, 70].map((w, i) => (
          <div key={i + 10} className="sk" style={{ width: `${w}%`, height: 14 }} />
        ))}

        {/* Pull-quote skeleton */}
        <div
          style={{
            borderLeft: '2px solid var(--border)',
            paddingLeft: '2.5rem',
            margin: '2.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
        >
          <div className="sk" style={{ width: '90%', height: 22 }} />
          <div className="sk" style={{ width: '70%', height: 22 }} />
          <div className="sk" style={{ width: 90,   height: 9, marginTop: '0.3rem' }} />
        </div>

        {/* H2 skeleton */}
        <div className="sk" style={{ width: '48%', height: 28, margin: '1rem 0 0.5rem' }} />

        {/* Bullet list skeleton */}
        {[80, 92, 76, 88, 70].map((w, i) => (
          <div key={i + 20} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div className="sk" style={{ width: 20, height: 1, flexShrink: 0 }} />
            <div className="sk" style={{ width: `${w}%`, height: 14 }} />
          </div>
        ))}

        {/* Divider */}
        <div className="sk" style={{ width: '100%', height: 1, margin: '3rem 0' }} />

        {/* Author byline skeleton */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="sk" style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div className="sk" style={{ width: 100, height: 14 }} />
            <div className="sk" style={{ width: 200, height: 9  }} />
          </div>
        </div>
      </div>

      {/* Related articles skeleton */}
      <div style={{ background: 'var(--bg-alt)', padding: '6rem var(--px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3.5rem' }}>
          <div className="sk" style={{ width: 120, height: 9  }} />
          <div className="sk" style={{ width: 260, height: 32 }} />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div className="sk" style={{ width: '100%', aspectRatio: '4/3' }} />
              <div className="sk" style={{ width: 80,   height: 9  }} />
              <div className="sk" style={{ width: '88%', height: 18 }} />
              <div className="sk" style={{ width: '70%', height: 18 }} />
              <div className="sk" style={{ width: '100%', height: 12 }} />
              <div className="sk" style={{ width: '80%', height: 12 }} />
              <div className="sk" style={{ width: 110, height: 9  }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
