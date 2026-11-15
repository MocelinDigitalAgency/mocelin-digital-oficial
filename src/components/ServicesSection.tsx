import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { AGENCY_DATA_BY_LANGUAGE, buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

export function ServicesSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].services;
  const services = AGENCY_DATA_BY_LANGUAGE[language].services;

  return (
    <section
      id="servicos"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#servicos" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
                {t.title}
              </h2>
            </div>

            <a
              href={buildWhatsAppUrl(undefined, language)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9A7210] dark:text-[#F3D36B] hover:text-[#C21462] dark:hover:text-[#FF4D9D] whitespace-nowrap shrink-0 transition-colors"
            >
              <span>{t.topCta}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>

        {/* Asymmetric Bento Grid with Luxurious Border Glow on Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                } ${
                  service.featured
                    ? 'surface-card-featured hover:border-[#E61E7A]/80 dark:hover:border-[#F3D36B]/75 hover:shadow-[0_14px_38px_-10px_rgba(230,30,122,0.28),0_0_24px_-4px_rgba(212,175,55,0.25)] dark:hover:shadow-[0_0_36px_-6px_rgba(230,30,122,0.38),0_0_24px_-6px_rgba(243,211,107,0.32)]'
                    : 'surface-card hover:border-[#E61E7A]/65 dark:hover:border-[#FF4D9D]/65 hover:shadow-[0_14px_36px_-10px_rgba(230,30,122,0.24),0_0_20px_-4px_rgba(212,175,55,0.22)] dark:hover:shadow-[0_0_32px_-6px_rgba(230,30,122,0.34),0_0_20px_-6px_rgba(212,175,55,0.26)]'
                }`}
              >
                {/* Soft Metallic Border Glow Rim on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E61E7A] via-[#F3D36B] to-[#E61E7A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-numeric text-xl font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                      {service.number}
                    </span>
                    <span className="text-xs font-medium text-[#C21462] dark:text-[#FF4D9D]">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#463E4D] dark:text-[#CFC9D3] max-w-[62ch]">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-[#141018]/10 dark:border-white/10 pt-5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#2A2330] dark:text-[#DFDAE3]"
                      >
                        <Check
                          className="w-4 h-4 text-[#B8860B] dark:text-[#D4AF37] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4 border-t border-[#141018]/10 dark:border-white/10 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#645A6C] dark:text-[#B3ACB8]">
                    {t.cardFooterNote}
                  </span>
                  <a
                    href={buildWhatsAppUrl(undefined, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9A7210] dark:text-[#F3D36B] hover:text-[#C21462] dark:hover:text-[#FF4D9D] whitespace-nowrap shrink-0 transition-colors"
                  >
                    <span>{t.cardCta}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
