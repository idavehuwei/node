const program = require("commander");

// import {version} from '../package.json';
const version = require("../package.json").version;

program
  .usage("[options] <file>")
  .option("-v, --version", "show version", version, "")
  .option("-p, --port <port>", "use custom port")
  .option("-f, --flag", "boolean flag", false)
  .action((file, options) => {
    console.log("file name: ", file);
    // more hanlder: require('../lib/moreHandler')(options);
  })
  .parse(process.argv);

// $ node bin/index.js -v
// 0.0.1
// $ node bin/index.js sample.json
// file name: sample.json

// $ npm install json-now -g
// $ json-now -v
