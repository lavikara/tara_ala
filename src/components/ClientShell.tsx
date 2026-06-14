'use client';

import { useScrollReveal } from './useScrollReveal';
import Cursor from './Cursor';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <>
      <Cursor />
      {children}
    </>
  );
}
