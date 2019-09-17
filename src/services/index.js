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
  return request(`/voice/${params.code}/${params.serverId}`, {});
};

/* get voice */
export const getVoice = async params => {
  return request(`/get/${params.code}`, {});
};
