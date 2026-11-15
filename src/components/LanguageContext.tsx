import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language =
  | 'pt'
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'nl'
  | 'ja'
  | 'zh'
  | 'ko'
  | 'ar'
  | 'ru';

export interface LanguageOption {
  code: Language;
  shortCode: string;
  nativeName: string;
  englishName: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'pt', shortCode: 'PT', nativeName: 'Português (Brasil)', englishName: 'Portuguese', htmlLang: 'pt-BR', dir: 'ltr' },
  { code: 'en', shortCode: 'EN', nativeName: 'English', englishName: 'English', htmlLang: 'en', dir: 'ltr' },
  { code: 'es', shortCode: 'ES', nativeName: 'Español', englishName: 'Spanish', htmlLang: 'es', dir: 'ltr' },
  { code: 'fr', shortCode: 'FR', nativeName: 'Français', englishName: 'French', htmlLang: 'fr', dir: 'ltr' },
  { code: 'de', shortCode: 'DE', nativeName: 'Deutsch', englishName: 'German', htmlLang: 'de', dir: 'ltr' },
  { code: 'it', shortCode: 'IT', nativeName: 'Italiano', englishName: 'Italian', htmlLang: 'it', dir: 'ltr' },
  { code: 'nl', shortCode: 'NL', nativeName: 'Nederlands', englishName: 'Dutch', htmlLang: 'nl', dir: 'ltr' },
  { code: 'ja', shortCode: 'JA', nativeName: '日本語', englishName: 'Japanese', htmlLang: 'ja', dir: 'ltr' },
  { code: 'zh', shortCode: 'ZH', nativeName: '中文 (简体)', englishName: 'Chinese', htmlLang: 'zh-CN', dir: 'ltr' },
  { code: 'ko', shortCode: 'KO', nativeName: '한국어', englishName: 'Korean', htmlLang: 'ko', dir: 'ltr' },
  { code: 'ar', shortCode: 'AR', nativeName: 'العربية', englishName: 'Arabic', htmlLang: 'ar', dir: 'rtl' },
  { code: 'ru', shortCode: 'RU', nativeName: 'Русский', englishName: 'Russian', htmlLang: 'ru', dir: 'ltr' },
];

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentOption: LanguageOption;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const currentOption =
    SUPPORTED_LANGUAGES.find((item) => item.code === language) ?? SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    document.documentElement.lang = currentOption.htmlLang;
    document.documentElement.dir = currentOption.dir;
  }, [currentOption]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentOption }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
