JavaScript String
=================



Ways to produce strings
-----------------------

* s = ''
* s = ""
* s = ``
* function() { return '' }
* classInstance.toString()



Classes can be constructed and stringified in one step:
```
	stringifiedInstance = `${new MyClass(123)}`
```



Comments
--------

### double-slash
Double-slash comments will interrupt most constructs, but not quoted strings:
```js
	var aa=11 ; // var bb=22;
	var cc = {//};
	var dd = [//];

	var ee="//";	// double-slash does *not* split quoted strings
	var ff='//';
	var gg=`//`;
```
