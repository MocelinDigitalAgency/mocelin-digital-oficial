import { motion } from 'motion/react';
import { ShieldCheck, Headset, Award } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

const BADGE_ICONS = {
  'secure-payment': ShieldCheck,
  'support-24-7': Headset,
  'satisfaction-guarantee': Award,
} as const;

export function TrustBadgesSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].trust;

  return (
    <section
      id="garantias"
      aria-labelledby="trust-badges-heading"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] py-14 sm:py-20 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#garantias" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2
                id="trust-badges-heading"
                className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]"
              >
                {t.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#463E4D] dark:text-[#B3ACB8] max-w-md">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.badges.map((badge, idx) => {
            const Icon = BADGE_ICONS[badge.id];
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#E61E7A]/60 hover:shadow-[0_14px_34px_-12px_rgba(230,30,122,0.22),0_0_18px_-6px_rgba(212,175,55,0.22)] dark:hover:shadow-[0_0_28px_-6px_rgba(230,30,122,0.3),0_0_18px_-6px_rgba(212,175,55,0.24)]"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#E61E7A]/35 bg-[#FAF5F8] dark:bg-[#170F1A] text-[#C21462] dark:text-[#F3D36B] transition-colors group-hover:border-[#D4AF37]">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                    {badge.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#9A7210] dark:text-[#FF4D9D]">
                    {badge.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#463E4D] dark:text-[#B3ACB8]">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
