import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, X } from 'lucide-react';
import { AGENCY_DATA_BY_LANGUAGE, buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

export function PricingSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].pricing;
  const { pricingPlans, additionalServices } = AGENCY_DATA_BY_LANGUAGE[language];

  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [hoveredPlanId, setHoveredPlanId] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const defaultHighlightedPlanId =
    pricingPlans.find((plan) => plan.highlighted)?.id ?? 'site-essencial';
  const activeSpotlightId = hoveredPlanId ?? selectedPlanId ?? defaultHighlightedPlanId;
  const selectedPlan = pricingPlans.find((plan) => plan.id === selectedPlanId) ?? null;

  const togglePlanSelection = (planId: string) => {
    setSelectedPlanId((prev) => (prev === planId ? null : planId));
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const selectedAddonItems = additionalServices.filter((service) =>
    selectedAddons.includes(service.id)
  );

  return (
    <section
      id="planos"
      className="relative overflow-hidden border-b border-[#141018]/10 dark:border-white/10 bg-[#FAF8F9] dark:bg-[#060508] py-16 sm:py-24 transition-colors duration-200"
    >
      {/* Subtle Velvet Rosa Pink + Gold Ambient Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-[460px] max-w-4xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(230,30,122,0.08)_0%,rgba(212,175,55,0.07)_42%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(230,30,122,0.11)_0%,rgba(212,175,55,0.07)_42%,transparent_72%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#planos" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
                {t.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#463E4D] dark:text-[#B3ACB8] max-w-sm">
              {t.helper}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Main Website Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const isActive = activeSpotlightId === plan.id;
            const isSelected = selectedPlanId === plan.id;

            return (
              <motion.div
                key={plan.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => togglePlanSelection(plan.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    togglePlanSelection(plan.id);
                  }
                }}
                onMouseEnter={() => setHoveredPlanId(plan.id)}
                onMouseLeave={() => setHoveredPlanId(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-b from-[#FFF7FA] via-[#FFFFFF] to-[#FFFDF8] dark:from-[#1B101D] dark:via-[#120D15] dark:to-[#0B090E] border border-[#C21462]/60 dark:border-[#F3D36B]/70 shadow-[0_20px_44px_-16px_rgba(230,30,122,0.22),0_0_0_1px_rgba(184,134,11,0.3)] dark:shadow-[0_22px_50px_-16px_rgba(230,30,122,0.36),0_0_0_1px_rgba(230,30,122,0.35)]'
                    : 'bg-white dark:bg-[#0E0B11] border border-[#141018]/10 dark:border-white/10 shadow-[0_12px_30px_-18px_rgba(20,16,24,0.12)] dark:shadow-none hover:border-[#E61E7A]/50'
                }`}
              >
                {/* Luxury Metallic Top Shimmer Edge */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] transition-opacity duration-200 bg-gradient-to-r from-[#E61E7A] via-[#F3D36B] to-[#E61E7A] ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                  }`}
                />

                {/* Subtle Inner Metallic Glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-20 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,rgba(230,30,122,0.08)_50%,transparent_75%)] transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[#C21462] dark:text-[#FF4D9D] tabular-nums">
                      {plan.delivery}
                    </span>
                    {plan.highlighted ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>
                          {isSelected ? `${t.mostPopular} · ${t.selected}` : t.mostPopular}
                        </span>
                      </span>
                    ) : (
                      isSelected && (
                        <span className="text-xs font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                          {t.selected}
                        </span>
                      )
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#645A6C] dark:text-[#B3ACB8]">{plan.target}</p>

                  <div
                    className={`mt-6 pb-6 border-b transition-colors duration-200 ${
                      isActive
                        ? 'border-[#C21462]/25 dark:border-[#F3D36B]/30'
                        : 'border-[#141018]/10 dark:border-white/10'
                    }`}
                  >
                    <p className="text-xs font-medium text-[#645A6C] dark:text-[#B3ACB8]">
                      {plan.pricePrefix}
                    </p>
                    <p className="mt-1 font-numeric text-2xl sm:text-3xl font-semibold gold-metallic-text">
                      {plan.priceRange}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#3D3544] dark:text-[#DFDAE3] transition-colors group-hover:text-[#141018] dark:group-hover:text-[#F5F2EB]"
                      >
                        <Check
                          className="w-4 h-4 text-[#B8860B] dark:text-[#F3D36B] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-8 pt-2">
                  <a
                    href={buildWhatsAppUrl(undefined, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold whitespace-nowrap min-h-[46px] transition-all duration-150 ${
                      isActive
                        ? 'gold-metallic-bg text-[#060508] ring-1 ring-[#E61E7A]/55 shadow-[0_8px_24px_-6px_rgba(212,175,55,0.45)] hover:-translate-y-0.5'
                        : 'border border-[#E61E7A]/45 bg-[#FAF5F8] dark:bg-[#150E17] text-[#141018] dark:text-[#F5F2EB] hover:bg-[#C21462] hover:border-[#C21462] hover:text-white dark:hover:bg-[#D61B70] dark:hover:border-[#D61B70]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Website Package Selection Bar (shown only when the client selects a website package) */}
        {selectedPlan && (
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-[#141018]/10 dark:border-white/10 bg-white/80 dark:bg-[#0E0B11] px-4 sm:px-6 py-3.5">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="text-[#5D5366] dark:text-[#B3ACB8]">
                {t.planSelectedLabel}
              </span>
              <span className="font-semibold text-[#141018] dark:text-[#F5F2EB]">
                {selectedPlan.name}
              </span>
              <span className="font-numeric text-xs font-semibold text-[#9A7210] dark:text-[#F3D36B]">
                ({selectedPlan.priceRange})
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPlanId(null)}
              className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-[#141018]/15 dark:border-white/15 bg-transparent px-3.5 py-2 text-xs font-medium text-[#463E4D] dark:text-[#B3ACB8] hover:border-[#C21462]/50 hover:text-[#141018] dark:hover:text-[#F5F2EB] min-h-[38px] whitespace-nowrap transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{t.addonsClearSelection}</span>
            </button>
          </div>
        )}

        {/* Interactive Additional Services Row */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-[#E61E7A]/35 bg-white dark:bg-gradient-to-b dark:from-[#130D17] dark:to-[#0B090E] p-6 sm:p-8 shadow-[0_14px_38px_-18px_rgba(230,30,122,0.18)] dark:shadow-[0_14px_40px_-18px_rgba(230,30,122,0.28)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#141018]/10 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                  {t.addonsKicker}
                </p>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                  {t.addonsTitle}
                </h3>
              </div>
              <a
                href={buildWhatsAppUrl(
                  selectedAddonItems.length > 0
                    ? t.addonsQuoteMessage(
                        selectedAddonItems.map((item) => item.name).join(', '),
                        selectedPlan?.name
                      )
                    : undefined,
                  language
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg gold-metallic-bg px-5 py-2.5 text-xs font-semibold text-[#060508] ring-1 ring-[#E61E7A]/40 whitespace-nowrap shrink-0 min-h-[42px] self-start sm:self-auto transition-transform duration-150 hover:-translate-y-0.5"
              >
                <span>{t.addonsCta}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalServices.map((service) => {
                const isAddonSelected = selectedAddons.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleAddon(service.id)}
                    aria-pressed={isAddonSelected}
                    className={`group text-left rounded-xl p-5 transition-all duration-200 cursor-pointer border ${
                      isAddonSelected
                        ? 'bg-[#FFF5FA] dark:bg-[#1A101E] border-[#C21462]/65 dark:border-[#F3D36B]/70 shadow-[0_10px_28px_-12px_rgba(230,30,122,0.22)] dark:shadow-[0_10px_28px_-12px_rgba(230,30,122,0.35)]'
                        : 'bg-[#FAF8F9] dark:bg-[#0D0A10]/80 border-[#141018]/10 dark:border-white/10 hover:border-[#E61E7A]/55 hover:bg-[#FFF9FC] dark:hover:bg-[#150E19]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display text-lg font-semibold text-[#141018] dark:text-[#F5F2EB] group-hover:text-[#C21462] dark:group-hover:text-[#F8E59E] transition-colors">
                        {service.name}
                      </h4>
                      <span
                        className={`text-xs font-semibold whitespace-nowrap ${
                          isAddonSelected
                            ? 'text-[#9A7210] dark:text-[#F3D36B]'
                            : 'text-[#C21462] dark:text-[#FF4D9D] opacity-85 group-hover:opacity-100'
                        }`}
                      >
                        {isAddonSelected ? t.addonIncluded : t.addonSelect}
                      </span>
                    </div>

                    <p className="mt-2.5 text-xs text-[#C21462] dark:text-[#FF4D9D] font-medium">
                      {service.pricePrefix}
                    </p>
                    <p className="mt-0.5 font-numeric text-xl font-semibold gold-metallic-text">
                      {service.priceRange}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selection status & action bar below the 3 additional service cards */}
            <div className="mt-6 pt-5 border-t border-[#141018]/10 dark:border-white/10">
              {selectedAddonItems.length === 0 ? (
                <p className="text-xs sm:text-sm text-[#5D5366] dark:text-[#B3ACB8]">
                  {t.addonsEmptyPrompt}
                </p>
              ) : (
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 flex-wrap">
                    <span className="text-xs sm:text-sm font-semibold text-[#141018] dark:text-[#F5F2EB]">
                      {t.addonsSelectedHeading}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedAddonItems.map((item) => (
                        <span
                          key={item.id}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#C21462]/35 dark:border-[#F3D36B]/45 bg-[#FFF5FA] dark:bg-[#1A101E] px-2.5 py-1 text-xs font-medium text-[#141018] dark:text-[#F5F2EB]"
                        >
                          <Check
                            className="w-3.5 h-3.5 text-[#C21462] dark:text-[#F3D36B] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setSelectedAddons([])}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#141018]/15 dark:border-white/15 bg-transparent px-3.5 py-2 text-xs font-medium text-[#463E4D] dark:text-[#B3ACB8] hover:border-[#C21462]/50 hover:text-[#141018] dark:hover:text-[#F5F2EB] min-h-[40px] whitespace-nowrap transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{t.addonsClearSelection}</span>
                    </button>

                    <a
                      href={buildWhatsAppUrl(
                        t.addonsQuoteMessage(
                          selectedAddonItems.map((item) => item.name).join(', '),
                          selectedPlan?.name
                        ),
                        language
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg gold-metallic-bg px-4 py-2 text-xs font-semibold text-[#060508] ring-1 ring-[#E61E7A]/40 min-h-[40px] whitespace-nowrap transition-transform duration-150 hover:-translate-y-0.5"
                    >
                      <span>{t.addonsIncludeInQuote}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
