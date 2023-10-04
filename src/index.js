const HTMLParser = require("mpts-core/dist/parser/HTMLParser").HTMLParser;

module.exports = function loader(input) {
    let parsed = HTMLParser.Parse(input)
    let {code, rootName} = parsed.compileJS();
    return `
export default function (variables){${code}return ${rootName}}
`;
}
