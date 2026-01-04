import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (
  thresholdOrOptions: number | UseScrollAnimationOptions = 0.1
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle both old API (just threshold) and new API (options object)
  const options: UseScrollAnimationOptions = 
    typeof thresholdOrOptions === 'number' 
      ? { threshold: thresholdOrOptions }
      : thresholdOrOptions;

  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref, isVisible };
};

// Hook for staggered animations on multiple items
export const useStaggeredAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) => {
  const { staggerDelay = 100, ...scrollOptions } = options;
  const { ref, isVisible } = useScrollAnimation(scrollOptions);
  
  const getItemStyle = useCallback((index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * staggerDelay}ms, 
                 transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * staggerDelay}ms`,
  }), [isVisible, staggerDelay]);

  const getItemClassName = useCallback((index: number, baseClass: string = '') => {
    return `${baseClass} transition-all duration-600`.trim();
  }, []);

  return { ref, isVisible, getItemStyle, getItemClassName };
};

// Hook for parallax-like scroll effects
export const useParallaxScroll = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        setOffset(scrolled * speed * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
