module.exports = {
  create(context: any) {
    return {
      CallExpression(node: any) {
        const calleeName = node.callee.name;
        if (['Number', 'parseInt', 'parseFloat'].includes(calleeName)) {
          context.report({
            node,
            message: `${calleeName} can return NaN, use ${calleeName}Strict so an error will be caused if the returned value is NaN`,
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
        'This ESLint plugin helps developers avoid using functions that can return NaN by providing alternatives that break execution at these handling points instead of allowing NaN',
    },
    fixable: 'code',
    schema: [],
  },
};
