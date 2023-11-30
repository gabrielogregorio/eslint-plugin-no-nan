const eslintRule = require('./rules/no-nan');
import * as utils from './utils';

export default {
  rules: { 'no-nan': eslintRule },
  ...utils,
};
