
 const ONLINE_URL = 'http://25.9.215.92'; 
const api = "service-qetaa-customer/";
const ONLINE_PORT = "8081";
const FakeAPI = ONLINE_URL + ":" + ONLINE_PORT + "/";
export class httpUrlConfig {
    getUserUrl(){
        return FakeAPI + api + "user";

    }
    getLoginUrl() {
        return FakeAPI + api + "rest/login/email/";
    }
}
export default httpUrlConfig;
