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
            'parseInt can return NaN. Use parseIntStrict instead. This function is available in the eslint-plugin-no-nan package already installed in your code, just import it!',
        },
      ],
    },

    {
      code: 'Number("value")',
      output: 'NumberStrict("value")',
      errors: [
        {
          message:
            'Number can return NaN. Use NumberStrict instead. This function is available in the eslint-plugin-no-nan package already installed in your code, just import it!',
        },
      ],
    },

    {
      code: 'parseFloat("value")',
      output: 'parseFloatStrict("value")',
      errors: [
        {
          message:
            'parseFloat can return NaN. Use parseFloatStrict instead. This function is available in the eslint-plugin-no-nan package already installed in your code, just import it!',
        },
      ],
    },
  ],
});
