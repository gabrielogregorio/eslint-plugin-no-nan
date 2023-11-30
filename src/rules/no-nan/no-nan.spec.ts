const { RuleTester } = require('eslint');
const noDisallowedTermsRule = require('./index');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run('no-nan', noDisallowedTermsRule, {
  valid: [
    {
      code: 'parseIntStrict("var")',
    },
  ],
  invalid: [
    {
      code: 'parseInt("value")',
      output: 'parseIntStrict("value")',
      errors: [
        {
          message:
            'parseInt can return NaN, use parseIntStrict so an error will be caused if the returned value is NaN',
        },
      ],
    },

    {
      code: 'Number("value")',
      output: 'NumberStrict("value")',
      errors: [
        {
          message: 'Number can return NaN, use NumberStrict so an error will be caused if the returned value is NaN',
        },
      ],
    },

    {
      code: 'parseFloat("value")',
      output: 'parseFloatStrict("value")',
      errors: [
        {
          message:
            'parseFloat can return NaN, use parseFloatStrict so an error will be caused if the returned value is NaN',
        },
      ],
    },
  ],
});
