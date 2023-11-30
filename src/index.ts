const eslintRule = require('./rules/no-nan');
import * as utils from './utils';

export const { NumberStrict, parseIntStrict, parseFloatStrict } = utils;

export default {
  rules: { 'no-nan': eslintRule },
  ...utils,
};
