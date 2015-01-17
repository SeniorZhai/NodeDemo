var fs = require('fs');

fs.open('error.js','r',function(err,fd){
	if (err) {
		console.error(err)
		return;
	};
	var buf = new Buffer(8);
	fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
		if (err) {
			console.error(err);
			return;
		};
		console.log('bytesRead'+bytesRead); // 字节数
		console.log(buffer); // 二进制数据
		console.log(buffer.toString('utf-8'))
	})
})