import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, Sun, Moon } from 'lucide-react';
import { AGENCY_DATA_BY_LANGUAGE, HERO_IMAGE, buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;
  const proofMetrics = AGENCY_DATA_BY_LANGUAGE[language].proofMetrics;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 transition-colors duration-200"
    >
      {/* Subtle brand-aligned ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(230,30,122,0.1)_0%,rgba(212,175,55,0.08)_45%,transparent_72%)] dark:bg-[radial-gradient(circle,rgba(230,30,122,0.14)_0%,rgba(212,175,55,0.06)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Top Utility Row: Regional Marker + Theme Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#141018]/10 dark:border-white/10">
          <p className="text-xs sm:text-sm font-medium tracking-wide">
            <span className="font-semibold text-[#C21462] dark:text-[#FF4D9D]">{t.city}</span>
            <span aria-hidden="true" className="mx-1.5 text-[#645A6C] dark:text-[#B3ACB8]">
              ·
            </span>
            <span className="text-[#463E4D] dark:text-[#B3ACB8]">{t.tagline}</span>
          </p>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.lightModeAria : t.darkModeAria}
            className="inline-flex items-center gap-2 rounded-lg border border-[#E61E7A]/35 bg-white dark:bg-[#120D16] px-3.5 py-2 text-xs font-semibold text-[#141018] dark:text-[#F5F2EB] whitespace-nowrap shrink-0 min-h-[38px] shadow-sm dark:shadow-none transition-colors hover:border-[#C21462] dark:hover:border-[#FF4D9D]"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-[#F3D36B] shrink-0" aria-hidden="true" />
                <span>{t.lightModeBtn}</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#C21462] shrink-0" aria-hidden="true" />
                <span>{t.darkModeBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Full-Width 2-Line Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 lg:mb-10"
        >
          <h1
            className="font-display font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB] leading-[1.15] max-w-none"
            style={{ fontSize: 'clamp(1.75rem, 2.75vw, 2.55rem)' }}
          >
            {t.headlineLine1}
            <br className="hidden lg:inline" /> {t.headlineLine2Prefix}{' '}
            <span className="gold-metallic-text">{t.headlineHighlight}</span>
          </h1>
        </motion.div>

        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Lead Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-2"
          >
            <div>
              <p className="text-base sm:text-lg leading-relaxed text-[#463E4D] dark:text-[#CFC9D3] max-w-[58ch]">
                {t.description}
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl(undefined, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg gold-metallic-bg px-6 py-3.5 text-sm sm:text-base font-semibold text-[#060508] ring-1 ring-[#E61E7A]/40 whitespace-nowrap shrink-0 min-h-[48px] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E61E7A]/40 bg-white dark:bg-[#0F0D12] px-5 py-3.5 text-sm font-medium text-[#141018] dark:text-[#F5F2EB] whitespace-nowrap shrink-0 min-h-[48px] transition-colors duration-150 hover:border-[#C21462] dark:hover:border-[#FF4D9D] hover:text-[#C21462] dark:hover:text-[#FF4D9D]"
              >
                <span>{t.secondaryCta}</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Studio Visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#E61E7A]/40 ring-1 ring-[#D4AF37]/30 bg-[#0F0D12] min-h-[260px] sm:min-h-[340px]">
              <ImageWithFallback
                src={HERO_IMAGE}
                alt={t.imageAlt}
                fallbackTitle={t.imageFallback}
                className="w-full h-full lg:h-full object-cover aspect-[16/10] lg:aspect-auto"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060508]/90 via-[#060508]/25 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-[#FF4D9D]">{t.imageKicker}</p>
                  <p className="mt-0.5 text-sm sm:text-base font-medium text-[#F5F2EB]">
                    {t.imageCaption}
                  </p>
                </div>
                <span className="text-xs font-medium text-[#F3D36B] whitespace-nowrap tabular-nums">
                  {t.imageLocation}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#E61E7A]/25 divide-y sm:divide-y-0 sm:divide-x divide-[#141018]/10 dark:divide-white/10"
        >
          {proofMetrics.map((metric) => (
            <div key={metric.label} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-[#9A7210] dark:text-[#F3D36B] tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#141018] dark:text-[#F5F2EB]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#463E4D] dark:text-[#B3ACB8]">
                {metric.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
