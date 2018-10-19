import _ from 'lodash';
const regEx = {
  email: {
    RegEx:
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
    msg: 'Email Không Hợp Lệ!!',
  },
};
const { email } = regEx;
export const Required = value => {
  const msg = 'Trường này bắt buộc nhập';
  if (value === undefined || value === null) return msg;
  if (_.isString(value)) return value.trim() ? undefined : msg;
  if (_.isObject(value)) return !_.isEmpty(value) ? undefined : msg;
  return undefined;
};

export const EmailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? email.msg
    : undefined;
