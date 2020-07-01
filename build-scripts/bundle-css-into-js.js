var fs = require('fs');

var input = process.argv[2];
var output = process.argv[3];

var content = fs.readFileSync(input, 'utf8');

content = '`' + content + '`;';

var modified = `const compiled = ${content}

export { compiled };
`;

console.log(
    '✅ dist/compiled.css written successfully to src/styles/compiledCSS.js ',
);

fs.writeFileSync(output, modified);
