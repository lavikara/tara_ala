'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service in production
    console.error('[Blog error]', error);
  }, [error]);

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Thin gold top bar to maintain brand polish */}
      <div style={{ height: '2px', background: 'var(--gold)', opacity: 0.5 }} />

      <div className="blog-error">

        {/* Icon */}
        <div className="blog-error-icon" role="img" aria-label="Error">
          <svg viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="blog-error-title">
          Something went<br /><em>unexpectedly wrong.</em>
        </h1>

        {/* Body */}
        <p className="blog-error-body">
          The journal couldn&apos;t be loaded right now. This is likely a
          temporary issue — trying again usually resolves it.
          {error.digest && (
            <span style={{
              display: 'block',
              marginTop: '1rem',
              fontFamily: 'monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
              color: 'var(--light)',
              opacity: 0.7,
            }}>
              Error ID: {error.digest}
            </span>
          )}
        </p>

        {/* Actions */}
        <div className="blog-error-actions">
          <button
            onClick={reset}
            className="nf-btn-primary"
            style={{ cursor: 'none' }}
          >
            Try Again
          </button>
          <Link href="/" className="nf-btn-ghost">Back to Home</Link>
        </div>

        {/* Helpful links */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border)',
          width: '100%',
          maxWidth: '480px',
          display: 'flex',
          justifyContent: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {[
            { href: '/blog',     label: 'Journal' },
            { href: '/services', label: 'Services' },
            { href: '/contact',  label: 'Contact' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--f-sans)',
                fontSize: '0.6rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
