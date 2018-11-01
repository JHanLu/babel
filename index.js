var babel = require('babel-core');
var t = require('babel-types');

const visitor = {
    BinaryExpression(path) {
        const node = path.node;
        let result;
        if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
            switch(node.operator) {
                case "+":
                    result = node.left.value + node.right.value;
                    break;
                case "-":
                    result = node.left.value - node.right.value;
                    break;
                case "*":
                    result =  node.left.value * node.right.value;
                    break;
                case "/":
                    result =  node.left.value / node.right.value;
                    break;
                default:
                    break;
            }
        }

        if (result !== undefined) {
            path.replaceWith(t.numericLiteral(result));
        }
    },
    ImportDeclaration(path) {
        const source = path.node.source.value;
        const specifiers = path.node.specifiers;

        // import为es6解构形式
        if (specifiers.length) {
            const arr = specifiers.map(node => node.imported.name);

        }
    }
};

module.exports  = function(babel) {
    return {
        visitor
    }
};