const XMLParser = require("mpts-core/dist/parser/XMLParser").XMLParser;

module.exports = function loader(input) {
    let parsed = XMLParser.Parse(input)
    let {code, rootName} = parsed.compileJS();
    return `
export default function (variables){${code}return ${rootName}}
`;
}
