var util = require('util')

function Person() {
	this.name = 'zoe'

	this.toString = function() {
		return this.name
	}
}

var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
/* 输出结果
{ name: 'zoe', toString: [Function] }
{ name: 'zoe',
  toString: 
   { [Function]
     [length]: 0,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } } }
 */