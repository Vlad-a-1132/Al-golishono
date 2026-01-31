'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const METRIKA_ID = 106549967;

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.ym !== 'function') {
      return;
    }

    const url = search && search.length > 0 ? `${pathname}?${search}` : pathname;
    window.ym(METRIKA_ID, 'hit', url);
  }, [pathname, search]);

  return null;
}


