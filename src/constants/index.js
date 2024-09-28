const REGEX = {
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  DOB: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
};

const LANGUAGE = {
  VI: 'VI',
  EN: 'EN',
  JP: 'JP',
};

module.exports = {
  A_WEEK: 7 * 86400 * 1000,
  REGEX,
  LANGUAGE,
};
