import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { AGENCY_DATA_BY_LANGUAGE, buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { SectionBreadcrumb } from './SectionBreadcrumb';

export function AboutSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;
  const differentials = AGENCY_DATA_BY_LANGUAGE[language].differentials;

  return (
    <section
      id="sobre"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#F4EFF3] dark:bg-[#0A080C] py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Brand Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#sobre" />
            <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
              {t.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB] leading-tight">
              {t.title}
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
              <p>{t.paragraph1}</p>
              <p className="text-[#141018] dark:text-[#F5F2EB] font-medium">{t.paragraph2}</p>
            </div>

            <div className="mt-8">
              <a
                href={buildWhatsAppUrl(undefined, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg pink-cta-bg px-5 py-3 text-sm font-semibold text-white whitespace-nowrap min-h-[44px] transition-transform duration-150 hover:-translate-y-0.5"
              >
                <span>{t.cta}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* 5 Competitive Differentials Column */}
          <div className="lg:col-span-7 divide-y divide-[#141018]/10 dark:divide-white/10 border-t border-b border-[#E61E7A]/25">
            {differentials.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
              >
                <span className="font-numeric text-lg font-semibold text-[#9A7210] dark:text-[#F3D36B] shrink-0 w-10">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#141018] dark:text-[#F5F2EB]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#463E4D] dark:text-[#B3ACB8] max-w-[62ch]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
