'use client';

import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref.
 * Any child with class `reveal` will get `revealed` added when it enters
 * the viewport. Pair with the `.reveal` / `.revealed` CSS classes.
 */
export function useScrollReveal(threshold = 0.12) {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const targets = container.querySelectorAll<HTMLElement>('.reveal');
        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [threshold]);

    return containerRef;
}
