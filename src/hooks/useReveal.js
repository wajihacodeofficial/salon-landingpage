import { useEffect, useRef } from 'react';

/**
 * Adds IntersectionObserver to trigger .is-visible on elements
 * with .reveal / .reveal-left / .reveal-right / .img-mask classes.
 */
export function useReveal(rootMargin = '-80px') {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .img-mask'
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
