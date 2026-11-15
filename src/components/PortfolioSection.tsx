import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  AGENCY_DATA_BY_LANGUAGE,
  PortfolioFilterKey,
  buildWhatsAppUrl,
} from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

const FILTER_KEYS: PortfolioFilterKey[] = ['all', 'websites', 'branding', 'social'];

export function PortfolioSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].portfolio;
  const projects = AGENCY_DATA_BY_LANGUAGE[language].portfolioProjects;

  const [activeFilter, setActiveFilter] = useState<PortfolioFilterKey>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<PortfolioFilterKey, number> = {
      all: projects.length,
      websites: 0,
      branding: 0,
      social: 0,
    };
    for (const project of projects) {
      counts[project.categoryKey] += 1;
    }
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.categoryKey === activeFilter),
    [projects, activeFilter]
  );

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="border-b border-[#141018]/10 dark:border-white/10 bg-[#F4EFF3] dark:bg-[#0A080C] py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6 sm:mb-8">
            <div className="max-w-2xl">
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#portfolio" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
                {t.title}
              </h2>
            </div>

            {/* Interactive Category Filter Controls */}
            <div
              role="tablist"
              aria-label={t.filterAria}
              className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-white dark:bg-[#120F16] border border-[#E61E7A]/25 p-1 self-start lg:self-auto"
            >
              {FILTER_KEYS.map((key) => {
                const isActive = activeFilter === key;
                const count = categoryCounts[key];
                const label = t.categories[key];
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(key)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 min-h-[38px] transition-colors duration-150 ${
                      isActive
                        ? 'pink-cta-bg text-white'
                        : 'text-[#463E4D] dark:text-[#B3ACB8] hover:text-[#141018] dark:hover:text-[#F5F2EB]'
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`tabular-nums text-[11px] ${
                        isActive ? 'text-white/85' : 'text-[#84798C] dark:text-[#7F7887]'
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Status Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#141018]/10 dark:border-white/10 pb-4 text-xs text-[#645A6C] dark:text-[#B3ACB8]">
            <p className="tabular-nums">
              {t.showing}{' '}
              <span className="font-semibold text-[#141018] dark:text-[#F5F2EB]">
                {filteredProjects.length}
              </span>{' '}
              {filteredProjects.length === 1 ? t.projectSingular : t.projectPlural}
              {activeFilter !== 'all' && (
                <>
                  {' '}
                  {t.inCategory}{' '}
                  <span className="font-semibold text-[#C21462] dark:text-[#FF4D9D]">
                    {t.categories[activeFilter]}
                  </span>
                </>
              )}
            </p>

            {activeFilter !== 'all' && (
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className="font-semibold text-[#C21462] dark:text-[#FF4D9D] hover:underline whitespace-nowrap"
              >
                {t.resetFilter}
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Filtered Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.04, 0.16),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group surface-card rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-[#E61E7A]/55"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    aria-label={`${t.openProjectAriaPrefix} ${project.client}`}
                    className="relative block w-full text-left overflow-hidden bg-[#141018] aspect-[4/3]"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} — ${project.client}`}
                      fallbackTitle={project.client}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060508]/85 via-transparent to-transparent"
                    />
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-[#060508]/90 border border-[#E61E7A]/40 px-3 py-1.5 text-xs font-medium text-[#F5F2EB]">
                      {t.viewDetails}
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D9D]" aria-hidden="true" />
                    </span>
                  </button>

                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#645A6C] dark:text-[#B3ACB8]">
                      <button
                        type="button"
                        onClick={() => setActiveFilter(project.categoryKey)}
                        className="font-semibold text-[#C21462] dark:text-[#FF4D9D] hover:underline"
                      >
                        {project.category}
                      </button>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.deliveryTime}</span>
                    </div>

                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                      {project.client}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#3D3544] dark:text-[#DFDAE3]">
                      {project.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#463E4D] dark:text-[#B3ACB8]">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#141018]/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                    {project.outcome}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className="text-xs font-semibold text-[#141018] dark:text-[#F5F2EB] hover:text-[#C21462] dark:hover:text-[#FF4D9D] whitespace-nowrap self-start sm:self-auto transition-colors"
                  >
                    {t.readDetails}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#060508]/80 dark:bg-[#060508]/88 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E61E7A]/45 ring-1 ring-[#D4AF37]/25 bg-white dark:bg-[#0F0D12] text-[#141018] dark:text-[#F5F2EB]"
            >
              <button
                type="button"
                onClick={() => setSelectedProjectId(null)}
                aria-label={t.closeModalAria}
                className="sticky top-4 float-right mr-4 mt-4 z-10 inline-flex items-center justify-center rounded-lg border border-white/25 bg-[#060508]/90 text-[#F5F2EB] min-w-[44px] min-h-[44px] hover:border-[#FF4D9D] hover:text-[#FF4D9D] transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="aspect-[16/10] w-full bg-[#16121A] overflow-hidden">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={`${selectedProject.title} — ${selectedProject.client}`}
                  fallbackTitle={selectedProject.client}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#645A6C] dark:text-[#B3ACB8]">
                  <span className="font-semibold text-[#C21462] dark:text-[#FF4D9D]">
                    {selectedProject.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.deliveryTime}</span>
                </div>

                <h3
                  id="case-modal-title"
                  className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-[#141018] dark:text-[#F5F2EB]"
                >
                  {selectedProject.client}
                </h3>
                <p className="mt-1 text-base font-medium text-[#3D3544] dark:text-[#DFDAE3]">
                  {selectedProject.title}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#141018]/10 dark:border-white/10 pt-6">
                  <div>
                    <h4 className="text-xs font-semibold text-[#C21462] dark:text-[#FF4D9D]">
                      {t.challengeHeading}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                      {t.solutionHeading}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#E61E7A]/35 bg-[#FAF5F8] dark:bg-[#150E17] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#645A6C] dark:text-[#B3ACB8]">{t.outcomeLabel}</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                      {selectedProject.outcome}
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(undefined, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg gold-metallic-bg px-4 py-2.5 text-xs font-semibold text-[#060508] whitespace-nowrap shrink-0 min-h-[40px]"
                  >
                    <span>{t.modalCta}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
