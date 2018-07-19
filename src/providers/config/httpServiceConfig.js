import { post, put } from "axios";

export class HttpServiceConfig {
  get(apiUrl, headers) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer no-token && no_id && 093X3b*y&iWu4U&F181X#3ZE0)%9374 && C"
        }
      })
        .then(response => response.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  put(apiUrl, body, headers) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer no-token && no_id && 093X3b*y&iWu4U&F181X#3ZE0)%9374 && C"
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  post2(apiUrl, body, config) {
    return post(apiUrl, body, config);
  }

  post(apiUrl, body, headers) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer no-token && no_id && 093X3b*y&iWu4U&F181X#3ZE0)%9374 && C"
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  delete(apiUrl) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer no-token && no_id && 093X3b*y&iWu4U&F181X#3ZE0)%9374 && C"
        }
      })
        .then(response => response.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  postLogin(apiUrl, body) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer no-token && no_id && 093X3b*y&iWu4U&F181X#3ZE0)%9374 && C"
        }
      })
        .then(response => response.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default HttpServiceConfig;
