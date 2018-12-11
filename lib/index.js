//const download = require("download-git-repo");
const symbols = require("log-symbols");
const chalk = require("chalk");
const ora = require("ora");
const spawn = require("child_process").spawn;

function download(repository, dir){
    return new Promise(function(resolve, reject){
        let process = spawn('git', ['clone', repository, dir]);
        process.on("close", function(code){
            if(code === 0){
                resolve(code);
            }else{
                reject("'git clone' failed with status" + code);
            }
        })
    });
};

//NikyPeng/rnRedux
module.exports = function init(options){
    let loader = ora("正在加载····");
    if(!options || Object.prototype.toString.call(options).indexOf("Array") < 0){
        console.log(symbols.error,chalk.red('项目创建失败，命令参数非法'));
        return;
    };
    let type = options[0], dir = options[1];
    loader.start(type + "项目初始化···");
    switch(type){
        case "vue":
            
            break;
        case "react":
            break;
        case "reactNative":
            download("https://github.com/NikyPeng/rnRedux.git", dir).then(res => {
                loader.succeed("项目初始化完成").clear();
                console.log(symbols.success,chalk.green('项目初始化成功！！'));
            }, err => {
                loader.fail("项目初始化失败：" + err).clear();
                console.log(symbols.fail,chalk.red('项目初始化失败！！'));
            });
            break;
        case "wx":
            break;
        default:
            break;
    }
}