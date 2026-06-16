export default function BlogLoading() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }} aria-busy="true" aria-label="Loading journal">

      {/* Page hero skeleton */}
      <div style={{
        minHeight: '38vh',
        background: 'var(--bg-alt)',
        padding: '5rem var(--px) 4.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: '1.2rem',
      }}>
        {/* Eyebrow */}
        <div className="sk" style={{ width: 120, height: 10 }} />
        {/* Title line 1 */}
        <div className="sk" style={{ width: 'clamp(220px, 40vw, 480px)', height: 52 }} />
        {/* Title line 2 */}
        <div className="sk" style={{ width: 'clamp(160px, 28vw, 320px)', height: 52 }} />
        {/* Rule */}
        <div className="sk" style={{ width: 120, height: 1, marginTop: '0.5rem' }} />
      </div>

      {/* Featured article skeleton */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '52vh',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Image half */}
        <div className="sk-d" style={{ background: 'var(--dark-2)', minHeight: 360 }} />

        {/* Content half */}
        <div style={{
          padding: '5rem var(--px) 5rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1.2rem',
        }}>
          <div className="sk" style={{ width: 100, height: 9 }} />
          <div className="sk" style={{ width: '85%', height: 36 }} />
          <div className="sk" style={{ width: '70%', height: 36 }} />
          <div className="sk" style={{ width: '60%', height: 36, marginBottom: '0.5rem' }} />
          <div className="sk" style={{ width: '90%', height: 13 }} />
          <div className="sk" style={{ width: '80%', height: 13 }} />
          <div className="sk" style={{ width: '65%', height: 13 }} />
          <div className="sk" style={{ width: 90, height: 9, marginTop: '0.5rem' }} />
          <div className="sk" style={{ width: 130, height: 36, marginTop: '1rem' }} />
        </div>
      </div>

      {/* Article grid skeleton — 4 cards */}
      <div style={{
        padding: '5rem var(--px) 7rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '3rem 2.5rem',
      }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Image */}
            <div className="sk" style={{ width: '100%', aspectRatio: '4/3' }} />
            {/* Tag */}
            <div className="sk" style={{ width: 90, height: 9 }} />
            {/* Headline */}
            <div className="sk" style={{ width: '90%', height: 20 }} />
            <div className="sk" style={{ width: '70%', height: 20 }} />
            {/* Excerpt */}
            <div className="sk" style={{ width: '100%', height: 12 }} />
            <div className="sk" style={{ width: '85%', height: 12 }} />
            <div className="sk" style={{ width: '60%', height: 12 }} />
            {/* Meta */}
            <div className="sk" style={{ width: 110, height: 9, marginTop: '0.3rem' }} />
          </div>
        ))}
      </div>

    </div>
  );
}
