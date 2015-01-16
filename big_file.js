/**
 * Created by zhaitao on 15/1/16.
 */
var fs =require('fs');

function copy(src,dst){
    // 链接数据流
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv){
    copy(argv[0],argv[1])
}

// process是一个全局变量，process.argv可以获得命令行参数
main(process.argv.slice(2));

