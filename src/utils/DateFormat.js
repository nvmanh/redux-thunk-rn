import moment from 'moment';
import i18n from './i18n';

export function convertToDateString(timestamp) {
    if (isNaN(timestamp) || timestamp <= 0) {
        return i18n.t('common.notAvailable');
    }
    return moment(timestamp * 1000).format('YYYY/MM/DD, HH:mm:ss');
}
