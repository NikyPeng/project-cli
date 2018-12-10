const command = require("commander");
const init = require("../lib");
const version = require("../package.json").version;

console.log("ve", version, process.argv);

command.version(version, '-v, --version');              //默认是 -V, --version

command
    .command("init")
    .description("初始化项目")
    .option("-t", "项目类型")                               //vue、react、reactNative、wx
    .option("-n", "根目录名称")
    .action(() => {
        init(command.args.slice(0, 2));
    });

command.parse(process.argv);
