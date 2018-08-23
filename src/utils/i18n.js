import i18next from 'i18next';
import RNLanguages from 'react-native-languages';
import en from './locales/en';
import jp from './locales/jp';

const DEFAULT_LANG = 'en';

i18next.init({ // eslint-disable-line
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: getLanguage(),
  fallbackLng: DEFAULT_LANG,
  // Using simple hardcoded resources for simple example
  resources: {
    en: {
      translation: en
    },
    ja: {
      translation: jp
    },
  },
});

export function getLanguage() {
  const lan = RNLanguages.language;// eslint-disable-line
  try {
    const lanPart = lan.toString().split('-');
    return lanPart[0];
  } catch (error) {
    return DEFAULT_LANG;
  }
}

export default i18next;
