import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: {
    welcome: 'Welcome to CreepReport',
    enterAge: 'Enter your age',
    continue: 'Continue',
    blocked: 'Access restricted for users under 20. This demonstrates how data tracking affects all age groups.',
    notice: 'You are age {{age}} — be aware you’re being watched.',
  },
  th: {
    welcome: 'ยินดีต้อนรับสู่ CreepReport',
    enterAge: 'กรุณากรอกอายุของคุณ',
    continue: 'ดำเนินการต่อ',
    blocked: 'คุณมีอายุต่ำกว่า 20 ปี แอปนี้จะแสดงให้เห็นถึงผลกระทบของการติดตามข้อมูลในทุกช่วงอายุ',
    notice: 'คุณมีอายุ {{age}} ปี — โปรดระวัง คุณกำลังถูกติดตาม',
  },
};

i18n.locale = Localization.locale || 'en';
i18n.missingInterpolationHandler = (key, replace) => replace[key] || `{{${key}}}`;
// Enable fallback translations to use the default language if a translation is missing
i18n.fallbacks = true;

export { i18n };

import i18n from './i18n';

<Text>{i18n.t('welcome')}</Text>

const appConfig = {
  "expo": {
    "name": "CreepReport",
    "slug": "creep-report",
    "version": "1.0.0",
    "orientation": "portrait",
    "platforms": ["ios", "android", "web"],
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
};

export { appConfig };
