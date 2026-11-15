import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Globe, ChevronDown, Check } from 'lucide-react';
import { LOGO_IMAGE, buildWhatsAppUrl } from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { SUPPORTED_LANGUAGES, useLanguage } from './LanguageContext';

export function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const langTriggerRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage, currentOption } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    if (!langOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangOpen(false);
        langTriggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [langOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F9]/92 dark:bg-[#060508]/92 backdrop-blur-md border-b border-[#E61E7A]/20 transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Logo + single-line wordmark */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src={LOGO_IMAGE}
            alt="Logo Mocelin Digital Agency"
            referrerPolicy="no-referrer"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-cover border border-[#E61E7A]/50 shrink-0"
          />
          <span className="font-display text-base sm:text-xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB] whitespace-nowrap shrink-0">
            Mocelin Digital Agency
          </span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label={t.ariaLabel}
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#463E4D] dark:text-[#B3ACB8]"
        >
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent transition-colors duration-150 hover:text-[#141018] dark:hover:text-[#F5F2EB] hover:border-[#C21462] dark:hover:border-[#FF4D9D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Global Language Dropdown + Primary Action + Mobile Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div ref={langDropdownRef} className="relative shrink-0">
            <button
              ref={langTriggerRef}
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={`${t.langGroupAria}: ${currentOption.nativeName}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#141018]/15 dark:border-white/15 bg-white dark:bg-[#0F0D12] px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-[#141018] dark:text-[#F5F2EB] whitespace-nowrap shrink-0 min-h-[38px] transition-colors hover:border-[#C21462] dark:hover:border-[#FF4D9D]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C21462]"
            >
              <Globe className="w-3.5 h-3.5 text-[#C21462] dark:text-[#FF4D9D] shrink-0" aria-hidden="true" />
              <span>{currentOption.shortCode}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#5D5366] dark:text-[#B3ACB8] shrink-0 transition-transform duration-150 ${
                  langOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {langOpen && (
              <div
                role="listbox"
                aria-label={t.langGroupAria}
                className="absolute end-0 top-full mt-2 z-50 w-60 max-h-[75vh] overflow-y-auto rounded-xl border border-[#141018]/15 dark:border-white/15 bg-white dark:bg-[#0F0D12] p-1.5 shadow-xl shadow-black/15 dark:shadow-black/60"
              >
                {SUPPORTED_LANGUAGES.map((option) => {
                  const isSelected = option.code === language;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setLanguage(option.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-xs font-medium min-h-[40px] transition-colors ${
                        isSelected
                          ? 'bg-[#E61E7A]/12 dark:bg-[#E61E7A]/20 text-[#C21462] dark:text-[#FF4D9D] font-semibold'
                          : 'text-[#141018] dark:text-[#F5F2EB] hover:bg-[#141018]/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{option.nativeName}</span>
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#5D5366] dark:text-[#B3ACB8]">
                          {option.shortCode}
                        </span>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-[#C21462] dark:text-[#FF4D9D] shrink-0" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href={buildWhatsAppUrl(undefined, language)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg gold-metallic-bg px-4 py-2.5 text-xs font-semibold text-[#060508] ring-1 ring-[#E61E7A]/40 whitespace-nowrap shrink-0 transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 min-h-[40px]"
          >
            <span>{t.cta}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
