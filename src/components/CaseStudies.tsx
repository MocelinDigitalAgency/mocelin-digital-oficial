import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { AGENCY_DATA_BY_LANGUAGE, buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

export function CaseStudies() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].caseStudies;
  const caseStudies = AGENCY_DATA_BY_LANGUAGE[language].caseStudies;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = caseStudies[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="estudos-de-caso"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#estudos-de-caso" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
                {t.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={t.prevAria}
                className="inline-flex items-center justify-center rounded-lg border border-[#141018]/15 dark:border-white/15 bg-white dark:bg-[#0F0D12] text-[#141018] dark:text-[#F5F2EB] min-w-[40px] min-h-[40px] hover:border-[#C21462] dark:hover:border-[#FF4D9D] hover:text-[#C21462] dark:hover:text-[#FF4D9D] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <span className="px-2 font-numeric text-xs font-semibold text-[#463E4D] dark:text-[#B3ACB8] whitespace-nowrap">
                {activeCase.number} / 0{caseStudies.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label={t.nextAria}
                className="inline-flex items-center justify-center rounded-lg border border-[#141018]/15 dark:border-white/15 bg-white dark:bg-[#0F0D12] text-[#141018] dark:text-[#F5F2EB] min-w-[40px] min-h-[40px] hover:border-[#C21462] dark:hover:border-[#FF4D9D] hover:text-[#C21462] dark:hover:text-[#FF4D9D] transition-colors"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Project Deep-Dive Selector Tabs */}
        <div
          role="tablist"
          aria-label={t.tabListAria}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {caseStudies.map((study, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={study.id}
                type="button"
                role="tab"
                id={`tab-${study.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${study.id}`}
                onClick={() => setActiveIndex(idx)}
                className={`text-left rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between gap-3 min-h-[112px] ${
                  isActive
                    ? 'surface-card-featured ring-1 ring-[#E61E7A]/40'
                    : 'surface-card hover:border-[#E61E7A]/45'
                }`}
              >
                <div className="flex items-center justify-between gap-3 w-full">
                  <span
                    className={`font-numeric text-base font-semibold ${
                      isActive
                        ? 'text-[#9A7210] dark:text-[#F3D36B]'
                        : 'text-[#645A6C] dark:text-[#B3ACB8]'
                    }`}
                  >
                    {study.number}.
                  </span>
                  <span
                    className={`text-xs font-medium truncate ${
                      isActive
                        ? 'text-[#C21462] dark:text-[#FF4D9D]'
                        : 'text-[#645A6C] dark:text-[#B3ACB8]'
                    }`}
                  >
                    {study.segment}
                  </span>
                </div>

                <div>
                  <p className="font-display text-lg font-semibold text-[#141018] dark:text-[#F5F2EB]">
                    {study.client}
                  </p>
                  <p className="mt-1 text-xs font-semibold tabular-nums text-[#9A7210] dark:text-[#F3D36B]">
                    {study.headlineMetric}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Deep-Dive Case Panel */}
        <AnimatePresence mode="wait">
          <motion.article
            key={`${language}-${activeCase.id}`}
            role="tabpanel"
            id={`panel-${activeCase.id}`}
            aria-labelledby={`tab-${activeCase.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="surface-card rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Project Visual */}
              <div className="lg:col-span-5 relative bg-[#141018] aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                <ImageWithFallback
                  src={activeCase.image}
                  alt={`${activeCase.client} — ${activeCase.segment}`}
                  fallbackTitle={activeCase.client}
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060508]/90 via-[#060508]/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-medium text-[#F3D36B]">{activeCase.location}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-[#F5F2EB]">
                    {activeCase.client}
                  </p>
                  <p className="mt-1 text-xs text-[#DFDAE3] tabular-nums">
                    {activeCase.deliveryTime}
                  </p>
                </div>
              </div>

              {/* Right Problem & Solution Deep Dive */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#645A6C] dark:text-[#B3ACB8]">
                    <span className="font-semibold text-[#C21462] dark:text-[#FF4D9D]">
                      {t.caseLabel} {activeCase.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeCase.segment}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{activeCase.deliveryTime}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
                    {activeCase.headline}
                  </h3>

                  {/* Client Problem & Agency Solution */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#141018]/10 dark:border-white/10 pt-6">
                    <div>
                      <h4 className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                        {t.problemHeading}
                      </h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                        {activeCase.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold tracking-wide text-[#9A7210] dark:text-[#F3D36B]">
                        {t.solutionHeading}
                      </h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                        {activeCase.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Executed Deliverables */}
                <div className="border-t border-[#141018]/10 dark:border-white/10 pt-5">
                  <p className="text-xs font-semibold text-[#141018] dark:text-[#F5F2EB]">
                    {t.implementedHeading}
                  </p>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeCase.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#2A2330] dark:text-[#DFDAE3]"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#D4AF37] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Quantified Results Band */}
            <div className="border-t border-[#141018]/10 dark:border-white/10 bg-[#FAF5F8] dark:bg-[#0D0A10] p-6 sm:p-8 lg:px-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-[#141018]/10 dark:border-white/10">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-[#9A7210] dark:text-[#F3D36B]">
                    {t.resultsHeading}
                  </h4>
                  <p className="mt-1.5 text-sm text-[#3D3544] dark:text-[#DFDAE3] max-w-2xl">
                    {activeCase.resultsSummary}
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl(undefined, language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg gold-metallic-bg px-5 py-2.5 text-xs font-semibold text-[#060508] ring-1 ring-[#E61E7A]/40 whitespace-nowrap shrink-0 min-h-[42px] transition-transform duration-150 hover:-translate-y-0.5 self-start lg:self-auto"
                >
                  <span>{t.cta}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activeCase.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1">
                    <span className="font-numeric text-3xl sm:text-4xl font-semibold gold-metallic-text">
                      {metric.value}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed text-[#463E4D] dark:text-[#B3ACB8]">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
