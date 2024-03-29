import { fetch } from 'dva';

import router from 'umi/router';
import { getToken } from './authority';

import { API_HOST, WEB_HOST } from './config';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    return;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  alert(`请求错误 ${response.status}: ${response.url}`);
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(api, { apiType, ...option }) {
  const token = getToken();
  let url = `${apiType === 'web' ? WEB_HOST : API_HOST}${api}`;
  const options = {
    ...option,
  };

  const defaultOptions = {
    credentials: 'same-origin',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      // newOptions.headers = {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json; charset=utf-8',
      //   ...newOptions.headers,
      // };
      const formData = new FormData();
      for (const key in newOptions.body) {
        formData.append(key, newOptions.body[key]);
      }
      formData.append('token', token);
      // console.log(form_data)
      newOptions.body = formData;
      // newOptions.mode = 'no-cors';

      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
      // newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
      newOptions.body.append('token', token);
    }
  } else {
    url += url.indexOf('?') === -1 ? `?token=${token}` : `&token=${token}`;
  }
  console.log('url:', url);
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      console.log('12121221');
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .then(v => {
      if (v.status !== 200 && v.msg) {
        alert(v.msg);
      }
      if (v.status === 401) {
        router.push('/error');
        return;
      }
      // console.log('request data:', v);
      return v;
    })
    .catch(e => {
      const status = e.name;
      if (status === 401) {
        router.push('/error');
        return;
      }
      // environment should not be used
      if (status === 403) {
        router.push('/error');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push('/error');
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/error');
      }
    });
}
