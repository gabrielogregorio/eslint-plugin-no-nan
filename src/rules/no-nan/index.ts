module.exports = {
  create(context: any) {
    return {
      CallExpression(node: any) {
        const calleeName = node.callee.name;
        if (['Number', 'parseInt', 'parseFloat'].includes(calleeName)) {
          context.report({
            node,
            message: `${calleeName} can return NaN. Use ${calleeName}Strict instead. This function is available in the eslint-plugin-no-nan package already installed in your code, just import it!`,
            fix(fixer: any) {
              if (node.callee.name === 'Number') {
                return fixer.replaceText(node.callee, node.callee.name.replace(node.callee.name, 'NumberStrict'));
              }

              if (node.callee.name === 'parseInt') {
                return fixer.replaceText(node.callee, node.callee.name.replace(node.callee.name, 'parseIntStrict'));
              }

              if (node.callee.name === 'parseFloat') {
                return fixer.replaceText(node.callee, node.callee.name.replace(node.callee.name, 'parseFloatStrict'));
              }
            },
          });
        }
      },
    };
  },

  meta: {
    type: 'problem',
    docs: {
      description:
        'This ESLint plugin helps developers maintain a consistent vocabulary in their code. By defining canonical terms, developers can ensure that their codebase remains coherent and understandable.',
    },
    fixable: 'code',
    schema: [
      {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
            fixTo: {
              type: 'string',
            },
            words: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
          additionalProperties: false,
        },
      },
    ],
  },
};
