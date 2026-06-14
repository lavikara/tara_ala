'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const curRRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cur = curRef.current;
    const curR = curRRef.current;
    if (!cur || !curR) return;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    };

    const animR = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.1;
      p.ry += (p.my - p.ry) * 0.1;
      curR.style.left = p.rx + 'px';
      curR.style.top = p.ry + 'px';
      rafRef.current = requestAnimationFrame(animR);
    };
    rafRef.current = requestAnimationFrame(animR);

    const onEnter = () => {
      if (!cur || !curR) return;
      cur.style.transform = 'translate(-50%,-50%) scale(.4)';
      curR.style.width = '48px';
      curR.style.height = '48px';
      curR.style.borderColor = '#fff';
    };
    const onLeave = () => {
      if (!cur || !curR) return;
      cur.style.transform = 'translate(-50%,-50%) scale(1)';
      curR.style.width = '30px';
      curR.style.height = '30px';
      curR.style.borderColor = '#fff';
    };

    document.addEventListener('mousemove', onMove);

    const attachHover = () => {
      document.querySelectorAll('a,button,input,textarea').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachHover();

    // Re-attach on DOM changes for dynamic content
    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cur" ref={curRef} />
      <div className="cur-r" ref={curRRef} />
    </>
  );
}
