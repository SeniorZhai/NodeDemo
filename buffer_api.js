/**
 * Created by zhaitao on 15/1/16.
 */
// Buffer用来对二进制数进行操作

var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(bin)
var bin = new Buffer("hello",'utf-8')
console.log(bin)
// copy
var dup = new Buffer(bin.length)

bin.copy(dup)
console.log(dup)