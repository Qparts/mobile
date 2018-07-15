
 const ONLINE_URL = 'http://qtest.fareed9.com/'; 
const api = "api/v1/customer/";
const ONLINE_PORT = "8081";
const FakeAPI = ONLINE_URL + ":" + ONLINE_PORT + "/";
export class httpUrlConfig {
    getUserUrl(){
        return FakeAPI + api + "user";

    }
    getLoginUrl() {
        return FakeAPI + api + "login/email/";
    }

    getSignupUrl(){
        return FakeAPI + api + "rest/login/signup/";

    }
}
export default httpUrlConfig;
