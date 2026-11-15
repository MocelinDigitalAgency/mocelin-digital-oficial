import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const ariaLabel = TRANSLATIONS[language].floating.scrollToTopAria;

  useEffect(() => {
    const heroEl = document.getElementById('inicio');

    const updateVisibility = () => {
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setVisible(rect.bottom <= 64);
      } else {
        setVisible(window.scrollY > 560);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          aria-label={ariaLabel}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E61E7A]/45 bg-white/95 dark:bg-[#120D16]/95 text-[#141018] dark:text-[#F5F2EB] backdrop-blur-md shadow-[0_8px_22px_rgba(20,16,24,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-colors hover:border-[#D4AF37] hover:text-[#C21462] dark:hover:text-[#F3D36B]"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
