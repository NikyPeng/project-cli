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
}

let loader = ora("正在加载····");

//NikyPeng/rnRedux
module.exports = function init(options){
    console.log("=======", options);
    loader.start()
    if(!options || Object.prototype.toString.call(options).indexOf("Array") < 0){
        loader.fail("加载失败");
        console.log(symbols.error,chalk.red('项目创建失败'));
        throw("命令参数非法");
    };
    let type = options[0], dir = options[1];
    switch(type){
        case "vue":
            
            break;
        case "react":
            break;
        case "reactNative":
            download("https://github.com/NikyPeng/rnRedux.git", dir).then(res => {

            }, err => {

            });
            break;
        case "wx":
            break;
        default:
            break;
    }
}