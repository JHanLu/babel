const babel = require('babel-core');
const plugin = require("./index");

const result = babel.transform('import { sortBy, debounce } from "lodash"', {
    plugins: [
        plugin
    ]
});

console.log(result);
