import Config from 'react-native-config';

export default {
  API: {
    BASE: Config.BASE_URL,
    // SIGN UP
    REGISTER: { method: 'post', url: 'user/register' },
  }
};
