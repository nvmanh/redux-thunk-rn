import req from './req';
import i18n from './i18n';
import Const from '../common/Const';

export const requestApi = (endpoint, { headerInfo, dataInfo, paramsInfo },
  actionType, dispatch, fullUrl = null) => {
  dispatch({
    type: actionType.loading
  });
  req(endpoint, {
    headers: headerInfo,
    data: dataInfo,
    params: paramsInfo
  }, fullUrl)
    .then((response) => {
      let typeReceive = actionType.error;
      if (response.data.code === 200) {
        typeReceive = actionType.success;
      }
      dispatch({
        type: typeReceive,
        playLoad: response.data,
        data: dataInfo,
        params: paramsInfo
      });
    })
    .catch((error) => {
      let msg = error.toString();
      if (msg.includes(Const.TIME_OUT_ERROR)) {
        msg = i18n.t('common.networkError');
      }
      dispatch({
        type: actionType.error,
        playLoad: msg
      });
    });
};
