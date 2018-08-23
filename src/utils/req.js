import axios from 'axios';
import qs from 'qs';
import Config from '../config';
import { getLanguage } from './i18n';

const parse = (endpoint, params) => {// eslint-disable-line
  return Config.API.BASE + Config.API[endpoint].url.replace(/\{(.+?)\}/g, (match, str, ind, self) => params[str]);// eslint-disable-line
};

export default function (endpoint, { headers = null,
  params = null, data = null } = {}, fullUrl = null) {
  let formatedData = data;
  let formatedParam = params;
  if (Config.API[endpoint].method === 'get') {
    formatedParam = {
      ...formatedParam,
      lang: getLanguage()
    };
  } else {
    formatedData = {
      ...formatedData,
      lang: getLanguage()
    };
  }
  if (formatedData) {
    formatedData = qs.stringify(formatedData);
  }
  return axios({
    method: Config.API[endpoint].method,
    url: fullUrl !== null ? fullUrl : parse(endpoint, formatedParam),
    timeout: 20000,
    headers,
    data: formatedData,
    params: formatedParam
  });
}

