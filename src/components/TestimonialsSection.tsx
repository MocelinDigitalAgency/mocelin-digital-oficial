import { motion } from 'motion/react';
import { AGENCY_DATA_BY_LANGUAGE } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].testimonials;
  const testimonials = AGENCY_DATA_BY_LANGUAGE[language].testimonials;

  return (
    <section
      id="depoimentos"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#F4EFF3] dark:bg-[#0A080C] py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#depoimentos" />
            <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
              {t.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
              {t.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#E61E7A]/45 transition-colors"
            >
              <div>
                <p className="text-xs font-medium">
                  <span className="font-semibold text-[#C21462] dark:text-[#FF4D9D]">
                    {item.service}
                  </span>
                  <span aria-hidden="true" className="text-[#645A6C] dark:text-[#B3ACB8] mx-1">
                    ·
                  </span>
                  <span className="text-[#9A7210] dark:text-[#F3D36B] font-medium">
                    {item.city}
                  </span>
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#2A2330] dark:text-[#EBE6F0]">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-6 pt-5 border-t border-[#141018]/10 dark:border-white/10">
                <p className="text-sm font-semibold text-[#141018] dark:text-[#F5F2EB]">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-[#645A6C] dark:text-[#B3ACB8]">
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
