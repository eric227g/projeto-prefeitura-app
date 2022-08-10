import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import * as ja from 'yup-locale-ja';

i18n.translations = {
  'pt-BR': {
    email: 'email',
    password: 'senha',
    email_address: 'endereço de email'
  },
  'en-US': {
    email: 'email',
    password: 'password',
    email_address: 'email address'
  },
  ja: {
    email: 'Eメール',
    password: 'パスワード',
    email_address: '電子メールアドレス'

  },
};

// i18n.locale = Localization.locale;

i18n.locale = 'pt-BR';

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
