import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import en from './locales/en.json';
import ar from './locales/ar.json';
import de from './locales/de.json';
import it from './locales/it.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      de: { translation: de },
      it: { translation: it },
      zh: { translation: zh },
      ja: { translation: ja },
      ko: { translation: ko },
      es: { translation: es }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;