import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { localized, ui, type Lang } from './data';

interface LocaleContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof localized)[Lang];
  ui: (typeof ui)[Lang];
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'zh';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'zh' || saved === 'en') return saved;
  // Follow system / browser language; default to English for non-Chinese locales
  const sys = window.navigator.language?.toLowerCase() ?? '';
  return sys.startsWith('zh') ? 'zh' : 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore storage failures (private mode etc.) */
    }
  };

  const toggle = () => setLang(lang === 'zh' ? 'en' : 'zh');

  const value: LocaleContextValue = {
    lang,
    setLang,
    toggle,
    t: localized[lang],
    ui: ui[lang],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
