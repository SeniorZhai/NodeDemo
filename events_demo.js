var events = require('events');

var emitter = new events.EventEmitter();

// 注册`someEvent`事件监听
emitter.on('someEvent',function(arg1,arg2){
	console.log('listner1',arg1,arg2);
})

emitter.on('someEvent',function(arg1,arg2){
	console.log('listner2',arg1,arg2);
})
// 发送事件
emitter.emit('someEvent','zoe',1991);