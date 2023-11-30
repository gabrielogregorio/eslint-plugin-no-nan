# eslint-plugin-no-nan

## Starting

This ESLint plugin helps developers detect points where NaN may arise, providing an alternative that will pop errors. By preventing NaN, there will be less chance of bugs passing through seemingly safe points.

## Requirements

The only requirement is that you have ESLint version 5 or higher in your project.

## How to use

1. First, you need to install eslint-plugin-no-nan as a development dependency. You can do this using your preferred package manager:

```bash
npm install eslint-plugin-no-nan --save-dev
```

2. Then integrate the plugin into your .eslintrc.js configuration (or the respective ESLint configuration file you are using).

```js
{
    "plugins": ["eslint-plugin-no-nan"],
    "rules": {
      // ... other rules
      "eslint-plugin-no-nan/eslint-plugin-no-nan": "error",
    },
}
```

## Contributing to the project

Would you like to contribute to the project? Great! In our [contributing.md](CONTRIBUTING.md) guide, you'll find information about how to create a pull request, the code standards we follow, and how to report bugs. Your contribution is valuable and will help improve the tool for everyone.

I hope these explanations and examples are clear and helpful!

# Known issues

To report issues, if possible, please provide a snippet or link to the code on GitHub where the issue can be replicated. You can report [issues here](https://github.com/gabrielogregorio/eslint-plugin-no-nan/issues/new).

You can make [suggestions here](https://github.com/gabrielogregorio/eslint-plugin-no-nan/discussions)

## Next steps

The objective of this plugin is to detect points where conversions may return NaN values, requiring a switch to a function that will return an error.

- [ESLint documentation](https://eslint.org/docs/latest/use/getting-started)