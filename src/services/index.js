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
  return request(`/voice/${params.code}/${params.serverId}`, {
    method: 'POST',
    apiType: 'web',
    body: { ...params },
  });
};

/* get voice */
export const getVoice = async params => {
  return request(`/get/${params.mediaId}`, {
    method: 'POST',
    body: { ...params },
  });
};
