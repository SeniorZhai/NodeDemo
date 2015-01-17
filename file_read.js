var fs = require('fs')

// fs.readFile('error.js',function(err,data){
fs.readFile('error.js','utf-8',function(err,data){
	if(err){
		console.log(err)
	} else {
		console.log(data)
	}
})
