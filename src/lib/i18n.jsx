import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '@/locales/translations';

const STORAGE_KEY = 'lang';
const SUPPORTED = ['ar', 'en'];
const DEFAULT_LANG = 'ar';

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (SUPPORTED.includes(fromUrl)) return fromUrl;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(saved)) return saved;
  return DEFAULT_LANG;
}

function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => setLang(lang === 'ar' ? 'en' : 'ar'), [lang, setLang]);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => {
      const value = resolve(translations[lang], key);
      if (value !== undefined) return value;
      const fallback = resolve(translations[DEFAULT_LANG], key);
      return fallback !== undefined ? fallback : key;
    },
    [lang]
  );

  const value = useMemo(
    () => ({ lang, dir, isRTL: dir === 'rtl', setLang, toggleLang, t }),
    [lang, dir, setLang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
