import { writable, derived } from 'svelte/store';
import en from './locales/en.js';
import de from './locales/de.js';

const DEFAULT = 'en';

function detectDefault() {
  try {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('lang');
      if (stored) return stored;
    }
  } catch (e) {}

  try {
    if (typeof navigator !== 'undefined' && navigator.language) {
      if (navigator.language.toLowerCase().startsWith('de')) return 'de';
    }
  } catch (e) {}

  return DEFAULT;
}

export const lang = writable(detectDefault());

lang.subscribe((v) => {
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', v);
  } catch (e) {}
});

const translations = {
  en,
  de
};

export const t = derived(lang, ($lang) => {
  return (key) => {
    if (!key) return '';
    const map = translations[$lang] || {};
    if (map[key]) return map[key];
    // fallback to english
    return (translations[DEFAULT] && translations[DEFAULT][key]) || key;
  };
});

export function setLang(l) {
  if (!l) return;
  lang.set(l);
}

export default { lang, t, setLang };
