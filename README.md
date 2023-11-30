# eslint-plugin-no-nan

## Starting

This ESLint plugin helps developers detect points where NaN may arise, providing an alternative that will pop errors. By preventing NaN, there will be less chance of bugs passing through seemingly safe points.

## Requirements

The only requirement is that you have ESLint version 5 or higher in your project.

## How to use

1. First, you need to install eslint-plugin-no-nan as a development dependency. You can do this using your preferred package manager:

```bash
npm install eslint-plugin-no-nan --save-dev

or

yarn add eslint-plugin-no-nan -D

or 

pnpm install eslint-plugin-no-nan  --save-dev
```

2. Then integrate the plugin into your .eslintrc.js configuration (or the respective ESLint configuration file you are using).

```js
{
    "plugins": ["no-nan"],
    "rules": {
      // ... other rules
      "no-nan/no-nan": "error",
    },
}
```
3. Example of unsafe code in the context of this library.

```js
const secureNumber = Number('anyInsecureString');
```

In the example above, we have a Number that tries to convert a string into a number, this rule considers that this string will always be unsafe, and that it may return a NaN

4. How to fix this?

This plugin provides alternative functions, which perform the same operation as the Number, parseFloat and parseInt functions, however, if NaN is returned, these custom functions throw an error.

Note, instead of returning NaN, the custom function throws an error, 🚨 you need to handle this error! 🚨


```js
import { NumberStrict } from 'eslint-plugin-no-nan';

const secureNumber = NumberStrict('anyInsecureString');
```


Note, you can create your own custom functions, for example:

```ts
const MyNumberCustomFunction = (value: unknown) => {
   // eslint-disable-next-line no-nan/no-nan
   const result = Number(value);
   if (isNaN(result)) {
     return 0
   }
   return result;
};

const secureNumber = MyNumberCustomFunction('anyInsecureString');
```

This plugin only prohibits the use of global javascript functions, which has this behavior that the developers of this plugin do not like.


## Contributing to the project

Would you like to contribute to the project? Great! In our [contributing.md](CONTRIBUTING.md) guide, you'll find information about how to create a pull request, the code standards we follow, and how to report bugs. Your contribution is valuable and will help improve the tool for everyone.

I hope these explanations and examples are clear and helpful!

# Known issues

To report issues, if possible, please provide a snippet or link to the code on GitHub where the issue can be replicated. You can report [issues here](https://github.com/gabrielogregorio/eslint-plugin-no-nan/issues/new).

## Next steps

The objective of this plugin is to detect points where conversions may return NaN values, requiring a switch to a function that will return an error.

- [ESLint documentation](https://eslint.org/docs/latest/use/getting-started)