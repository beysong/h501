import request from '../utils/request';

/* wx config */
export const wxConfig = async params => {
  return request('/wx_config', {
    method: 'POST',
    apiType: 'web',
    body: { ...params },
  });
};

/* upload voice */
export const uploadVoice = async params => {
  return request(`/voice/${params.code}/${params.serverId}/${params.sec || 0}`, {});
};

/* get voice */
export const getVoice = async params => {
  return request(`/get/${params.code}`, {});
};
/* get name */
export const getName = async params => {
  return request(`/get_name/${params.code}`, {});
};
