import { ChevronRight } from 'lucide-react';
import { Language, useLanguage } from './LanguageContext';

const BREADCRUMB_ROOT_LABELS: Record<Language, { home: string; ariaLabel: string }> = {
  pt: { home: 'Início', ariaLabel: 'Navegação estrutural' },
  en: { home: 'Home', ariaLabel: 'Breadcrumb navigation' },
  es: { home: 'Inicio', ariaLabel: 'Ruta de navegación' },
  fr: { home: 'Accueil', ariaLabel: 'Fil d’Ariane' },
  de: { home: 'Start', ariaLabel: 'Brotkrümelnavigation' },
  it: { home: 'Home', ariaLabel: 'Percorso di navigazione' },
  nl: { home: 'Home', ariaLabel: 'Kruimelpad' },
  ja: { home: 'ホーム', ariaLabel: 'パンくずリスト' },
  zh: { home: '首页', ariaLabel: '面包屑导航' },
  ko: { home: '홈', ariaLabel: '탐색 경로' },
  ar: { home: 'الرئيسية', ariaLabel: 'مسار التنقل' },
  ru: { home: 'Главная', ariaLabel: 'Навигационная цепочка' },
};

interface SectionBreadcrumbProps {
  sectionLabel: string;
  sectionHref: string;
}

export function SectionBreadcrumb({ sectionLabel, sectionHref }: SectionBreadcrumbProps) {
  const { language } = useLanguage();
  const labels = BREADCRUMB_ROOT_LABELS[language];

  return (
    <nav aria-label={labels.ariaLabel} className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-[#645A6C] dark:text-[#958E9B]">
        <li>
          <a
            href="#inicio"
            className="hover:text-[#C21462] dark:hover:text-[#FF4D9D] transition-colors"
          >
            {labels.home}
          </a>
        </li>
        <li aria-hidden="true" className="inline-flex items-center">
          <ChevronRight className="w-3 h-3 opacity-65 shrink-0 rtl:rotate-180" />
        </li>
        <li>
          <a
            href={sectionHref}
            aria-current="location"
            className="text-[#9A7210] dark:text-[#F3D36B]/90 hover:text-[#C21462] dark:hover:text-[#FF4D9D] transition-colors"
          >
            {sectionLabel}
          </a>
        </li>
      </ol>
    </nav>
  );
}
