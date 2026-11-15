import { motion, useReducedMotion } from 'motion/react';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface ClientBrand {
  id: string;
  name: string;
  segment: string;
  mark: 'diamond' | 'arch' | 'shield' | 'frame' | 'crest' | 'compass';
}

function BrandGlyph({ mark }: { mark: ClientBrand['mark'] }) {
  switch (mark) {
    case 'diamond':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 3L21 12L12 21L3 12L12 3Z" />
          <path d="M12 8L16 12L12 16L8 12L12 8Z" />
        </svg>
      );
    case 'arch':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 20V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V20" />
          <path d="M9 20V12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12V20" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 3L19 6V12C19 16.5 15.8 19.8 12 21C8.2 19.8 5 16.5 5 12V6L12 3Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      );
    case 'frame':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case 'crest':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 17L7 8L12 12L17 8L20 17H4Z" />
          <path d="M6 20H18" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 6.5V17.5M6.5 12H17.5" />
        </svg>
      );
  }
}

function LogoItem({ client }: { client: ClientBrand }) {
  return (
    <div className="inline-flex items-center gap-3 px-7 sm:px-9 py-2 text-[#463E4D] dark:text-[#9F98A8] opacity-70 hover:opacity-100 grayscale transition-opacity duration-200 select-none shrink-0">
      <BrandGlyph mark={client.mark} />
      <div className="flex flex-col">
        <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-[#141018] dark:text-[#E5E0EB] whitespace-nowrap">
          {client.name}
        </span>
        <span className="text-[11px] text-[#645A6C] dark:text-[#8E8798] whitespace-nowrap">
          {client.segment}
        </span>
      </div>
    </div>
  );
}

export function ClientsMarqueeSection() {
  const prefersReducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].marquee;

  return (
    <section
      aria-label={t.ariaLabel}
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] py-10 sm:py-12 transition-colors duration-200 overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-medium text-[#645A6C] dark:text-[#B3ACB8] mb-6 sm:mb-8">
            {t.headingPrefix}{' '}
            <span className="font-semibold text-[#141018] dark:text-[#F5F2EB]">
              Mocelin Digital Agency
            </span>
          </p>
        </ScrollReveal>
      </div>

      {prefersReducedMotion ? (
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-y-4">
          {t.clients.map((client) => (
            <LogoItem key={client.id} client={client} />
          ))}
        </div>
      ) : (
        <div className="relative mx-auto max-w-[1440px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...t.clients, ...t.clients].map((client, index) => (
              <LogoItem key={`${client.id}-${index}`} client={client} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
