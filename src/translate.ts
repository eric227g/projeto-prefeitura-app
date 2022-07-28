import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import * as ja from 'yup-locale-ja';

i18n.translations = {
  'pt-BR': {
    email: 'email',
    senha: 'senha',
  },
  'en-US': {
    email: 'email',
    senha: 'password',
  },
  ja: {
    email: 'Eメール',
    senha: 'パスワード',
  },
};

// i18n.locale = Localization.locale;

i18n.locale = 'ja';

function Idioma() {
  switch (i18n.locale) {
    case 'pt-BR':
      Yup.setLocale(pt);
      break;
    case 'ja':
      Yup.setLocale(ja.suggestive);
      break;
    case 'en-US':
  }
}

export { i18n, Idioma };
