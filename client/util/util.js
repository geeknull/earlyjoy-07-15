/**
 * Created by Weil on 2017/7/15.
 */
let ajax = (params) => {
  return new Promise((resolve, reject) => {
    let url = params.url;
    let method = params.method;
    let data = params.data;
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }

    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send(data);
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText));
    };
    xhr.onerror = () => {
      reject(JSON.parse(xhr.responseText));
    };
  })
};

export { ajax }
