import {} from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export const useAnimatedByScroll = (
  selector: string,
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  sync: 'serialize' | 'parallel' = 'parallel',
  enableOnMobile: boolean = false,
) => {
  useEffect(() => {
    const targets: gsap.DOMTarget[] = gsap.utils.toArray(`[data-gsap="${selector}"]`);
    targets.forEach((target, idx) => {
      const toParams = {
        ...to,
        ScrollTrigger: {
          trigger: target,
          start: 'to bottom+=50px',
          ...(to.scrollTrigger || {}),
        },
      };
      if (sync === 'serialize' || to?.delay) {
        toParams.delay = sync === 'serialize' ? idx * Number(to.delay || 0) : to?.delay;
      }
      if (!enableOnMobile) {
        ScrollTrigger.matchMedia({
          '(min-width: 769)': () => gsap.fromTo(target, from, toParams),
        });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
