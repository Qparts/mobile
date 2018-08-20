const ONLINE_URL = "http://qtest.fareed9.com/";
const api = "api/v1/customer/";
const ONLINE_PORT = "8081";
// const FakeAPI = ONLINE_URL + ":" + ONLINE_PORT + "/";
const FakeAPI = ONLINE_URL;

export class httpUrlConfig {
  getUserUrl() {
    return FakeAPI + api + "user";
  }
  getLoginUrl() {
    return FakeAPI + api + "login/email/";
  }

  getSignupUrl() {
    return FakeAPI + api + "signup/";
  }
  getCodeUrl() {
    return FakeAPI + api + "email/";
  }
  getSocialMediaUrl() {
    return FakeAPI + api + "login/social-media";
  }
  getRegSocialMediaUrl() {
    return FakeAPI + api + "register/social-media";
  }
  getResetSmsMobileUrl() {
    return FakeAPI + api + "reset-sms/mobile";
  }
  getResetPasswordMobileUrl() {
    return FakeAPI + api + "reset-password";
  }
}
export default httpUrlConfig;
