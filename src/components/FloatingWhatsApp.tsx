import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].floating;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Hover / Focus Tooltip Label */}
      <AnimatePresence>
        {(isHovered || isFocusVisible) && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            role="tooltip"
            className="pointer-events-none rounded-lg border border-[#E61E7A]/45 bg-white dark:bg-[#120D16] px-3.5 py-2 text-xs font-medium text-[#141018] dark:text-[#F5F2EB] shadow-[0_10px_28px_-8px_rgba(20,16,24,0.28)] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.8)] whitespace-nowrap"
          >
            <span className="font-semibold text-[#C21462] dark:text-[#FF4D9D]">
              {t.tooltipHighlight}
            </span>
            <span aria-hidden="true" className="mx-1.5 text-[#645A6C] dark:text-[#B3ACB8]">
              ·
            </span>
            <span>{t.tooltipSuffix}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle continuous pulsate halo behind button (intensifies on keyboard focus) */}
      <div className="relative">
        <motion.span
          aria-hidden="true"
          animate={
            isFocusVisible
              ? { scale: 1.26, opacity: 0.8 }
              : { scale: [1, 1.18, 1], opacity: [0.38, 0.08, 0.38] }
          }
          transition={
            isFocusVisible
              ? { duration: 0.2, ease: 'easeOut' }
              : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
          }
          className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#E61E7A] via-[#FF4D9D] to-[#F3D36B] transition-[filter] duration-200 ${
            isFocusVisible ? 'blur-[10px]' : 'blur-[5px]'
          }`}
        />

        <motion.a
          href={buildWhatsAppUrl(undefined, language)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.ariaLabel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={(e) => {
            setIsHovered(true);
            if (e.currentTarget.matches(':focus-visible')) {
              setIsFocusVisible(true);
            }
          }}
          onBlur={() => {
            setIsHovered(false);
            setIsFocusVisible(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          animate={{ scale: isFocusVisible ? 1.06 : [1, 1.025, 1] }}
          transition={{
            scale: isFocusVisible
              ? { duration: 0.18, ease: 'easeOut' }
              : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="group relative overflow-hidden inline-flex items-center gap-2.5 rounded-full gold-metallic-bg px-4 sm:px-5 h-12 text-xs sm:text-sm font-semibold text-[#060508] ring-2 ring-[#E61E7A]/70 hover:ring-[#FF4D9D] shadow-[0_10px_28px_rgba(0,0,0,0.35)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.75)] hover:shadow-[0_12px_30px_rgba(243,211,107,0.4),0_8px_22px_rgba(230,30,122,0.28)] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:brightness-110 focus-visible:saturate-110 focus-visible:ring-4 focus-visible:ring-[#D61B70] dark:focus-visible:ring-[#FF4D9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F9] dark:focus-visible:ring-offset-[#060508] focus-visible:shadow-[0_0_24px_4px_rgba(214,27,112,0.5),0_0_12px_2px_rgba(243,211,107,0.7)] dark:focus-visible:shadow-[0_0_28px_6px_rgba(255,77,157,0.65),0_0_16px_2px_rgba(243,211,107,0.85)]"
        >
          {/* Smooth hover gradient shift to a lighter, more vibrant gold */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#FFF0B3_0%,#F6D86E_50%,#E5BE3B_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/65 to-transparent whatsapp-shine-effect"
          />
          <MessageCircle className="relative z-10 w-5 h-5 shrink-0" aria-hidden="true" />
          <span className="relative z-10 hidden sm:inline whitespace-nowrap">{t.ctaLabel}</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
