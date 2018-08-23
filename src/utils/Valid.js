import i18n from './../utils/i18n';

export function isEmpty(...data) {
  for (let i = 0; i < data.length; i++) {
    const str = data[i];
    if (str === null || str === '') {
      return true;
    }
  }
  return false;
}

export function isValidPassword(password) {
  return password.length >= 8 && password.length <= 16;
}

export function checkEmail(email) {
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
}

export function checkPassword(pass, rePass) {
  return (pass === rePass);
}

export function checkUserFieldValidate(userName, password, name) {
  if ((name.length < 6 || name.length > 100) && name !== '') {
    return i18n.t('signUp.fullnameInvalidate');
  }
  if ((userName.length < 6 || userName.length > 20) && userName !== '') {
    return i18n.t('signUp.userNameInvalidate');
  }
  if ((password.length < 8) && password !== '') {
    return i18n.t('signUp.passwordInvalidate');
  }
  return '';
}

export function checkPasswordField(password) {
  //Minimum eight characters,
  // one lowercase letter, one number and one special character:
  const reg = /^(?=.*?[a-zA-Z0-9])(?=.*(_|[^\w])).+$/;
  return reg.test(password);
}

export function isValidUserName(userName) {
  return !(userName.length < 6 || userName.length > 16 || userName === undefined);
}

export function isValidFullName(fullname) {
  return !(fullname.length < 4 || fullname.length > 100 || fullname === undefined);
}

export function isValidPhoneNumber(phone) {
  const reg = /^\+\d{10,16}$/;
  if (phone === undefined) {
    return false;
  }
  return reg.test(phone);
}
