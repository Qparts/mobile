import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class UsersAPIControllers {
  findAll() {
    const FETCH_URL = new UrlAPIControllers().getUserUrl();
    return new HttpServiceConfig().get(FETCH_URL);
  }

  findById(id) {
    const FETCH_URL = new UrlAPIControllers().getUserUrl() + id;
    return new HttpServiceConfig().get(FETCH_URL);
  }

  create(body) {
    const FETCH_URL = new UrlAPIControllers().getUserUrl();
    return new HttpServiceConfig().post(FETCH_URL, body);
  }

  update(body) {
    const FETCH_URL = new UrlAPIControllers().getUserUrl();
    return new HttpServiceConfig().put(FETCH_URL, body);
  }

  delete(id) {
    const FETCH_URL = new UrlAPIControllers().getUserUrl() + id;
    return new HttpServiceConfig().delete(FETCH_URL);
  }
  login(body) {
    const FETCH_URL = new UrlAPIControllers().getLoginUrl();
    return new HttpServiceConfig().post(FETCH_URL, body);
  }
  signup(body) {
    const FETCH_URL = new UrlAPIControllers().getSignupUrl();
    return new HttpServiceConfig().post(FETCH_URL, body);
  }
}

export default UsersAPIControllers;
