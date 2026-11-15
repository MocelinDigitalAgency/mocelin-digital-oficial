import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, target, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function ImpactMetricsSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].metrics;

  return (
    <section
      id="numeros"
      aria-labelledby="impact-metrics-heading"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] py-14 sm:py-20 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#numeros" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2
                id="impact-metrics-heading"
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
          {t.stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="surface-card rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:border-[#E61E7A]/55 hover:shadow-[0_12px_30px_-12px_rgba(230,30,122,0.2)] dark:hover:shadow-[0_0_26px_-8px_rgba(230,30,122,0.28)]"
            >
              <p className="font-numeric text-4xl sm:text-5xl font-semibold gold-metallic-text">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <h3 className="mt-3 text-base sm:text-lg font-semibold text-[#141018] dark:text-[#F5F2EB]">
                {stat.label}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#463E4D] dark:text-[#B3ACB8]">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
