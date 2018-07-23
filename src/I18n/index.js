import I18n from "react-native-i18n";
import DeviceInfo from "react-native-device-info";
import en from "./locales/en";
import ar from "./locales/ar";

I18n.fallbacks = true;

I18n.defaultLocale = "en";

I18n.translations = { en, ar };

I18n.locale = DeviceInfo.getDeviceLocale();

export default I18n;
