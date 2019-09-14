import request from '../utils/request';

/* wx config */
export const wxConfig = async params => {
  return request('/post/config', {
    method: 'POST',
    apiType: 'web',
    body: { ...params },
  });
};

/* upload voice */
export const uploadVoice = async params => {
  return request('/post/asdf', {
    method: 'POST',
    apiType: 'web',
    body: { ...params },
  });
};

/* get voice */
export const getVoice = async params => {
  return request('/post/asdf', {
    method: 'POST',
    body: { ...params },
  });
};
