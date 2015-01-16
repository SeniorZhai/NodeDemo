var fs = require('fs');

function copy(src,dst) {
    fs.writeFileSync(dst,fs.readFileSync(src));
}

function main(argv){
    copy(argv[0],argv[1])
}
// 需要在命令行中使用
main(process.argv.slice(2));