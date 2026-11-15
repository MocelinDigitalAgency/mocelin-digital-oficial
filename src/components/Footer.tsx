import { Sun, Moon } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOGO_IMAGE,
  SITE_DOMAIN,
  SITE_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const navLinks = TRANSLATIONS[language].nav.links;

  return (
    <footer className="border-t border-[#E61E7A]/25 bg-[#EFE9EE] dark:bg-[#050407] py-12 sm:py-14 transition-colors duration-200">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand & Links */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-[#141018]/10 dark:border-white/10">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 font-display text-lg font-semibold text-[#141018] dark:text-[#F5F2EB] hover:text-[#9A7210] dark:hover:text-[#F3D36B] transition-colors"
            >
              <img
                src={LOGO_IMAGE}
                alt="Logo Mocelin Digital Agency"
                referrerPolicy="no-referrer"
                className="h-8 w-8 rounded-md object-cover border border-[#E61E7A]/45 shrink-0"
              />
              <span>Mocelin Digital Agency</span>
            </a>
            <p className="mt-2.5 text-xs sm:text-sm text-[#463E4D] dark:text-[#B3ACB8] max-w-md">
              {t.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <nav
              aria-label={t.navAria}
              className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#463E4D] dark:text-[#B3ACB8]"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#C21462] dark:hover:text-[#FF4D9D] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#141018]/15 dark:border-white/15 bg-white dark:bg-[#0F0D12] px-3 py-1.5 text-xs font-medium text-[#141018] dark:text-[#F5F2EB] hover:border-[#C21462] dark:hover:border-[#FF4D9D] transition-colors whitespace-nowrap"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#F3D36B]" aria-hidden="true" />
                  <span>{t.themeLightLabel}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#C21462]" aria-hidden="true" />
                  <span>{t.themeDarkLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Direct Contacts */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#645A6C] dark:text-[#958E9B]">
          <p className="tabular-nums">
            © {currentYear} {t.copyrightSuffix}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9A7210] dark:hover:text-[#F3D36B] transition-colors"
            >
              {SITE_DOMAIN}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={buildWhatsAppUrl(undefined, language)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9A7210] dark:hover:text-[#F3D36B] transition-colors tabular-nums"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C21462] dark:hover:text-[#FF4D9D] transition-colors"
            >
              Instagram: {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
