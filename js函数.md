<!--
 * @Author: your name
 * @Date: 2022-03-02 08:30:43
 * @LastEditTime: 2022-03-02 08:30:43
 * @LastEditors: Please set LastEditors
 * @Description: 函数
 * @FilePath: \hNote\js函数.md
-->
### 函数
一个JavaScript 函数用function关键字定义，后面跟着函数名和圆括号。
##### 函数声明

```
函数名称 (参数){
    //函数体
}
function square(number) {
  return number * number;
}
```

```
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make;     // x获取的值为 "Honda"

myFunc(mycar);
y = mycar.make;     // y获取的值为 "Toyota"
                    // (make属性被函数改变了)
```
##### 函数表达式
虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的；它不必有一个名称。例如，函数square也可这样来定义：

```
const square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```
然而，函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：

```
const factorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};
console.log(factorial(3));
```
参数是一个函数：

```
function map(f, a) {
  let result = []; // 创建一个数组
  let i; // 声明一个值，用来循环
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0,1, 2, 5,10];
let cube = map(f,numbers);
console.log(cube);
//0: 0
//1: 1
//2: 8
//3: 125
//4: 1000
```
在 JavaScript 中，可以根据条件来定义一个函数。比如：

```
var myFunc;
if (num == 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}
```
==当一个函数是一个对象的属性时，称之为方法。==
##### 函数调用
定义函数并不会立即执行它（立即执行函数除外），调用函数才会以给定的参数真正执行这些动作。
函数一定要处于调用它们的域中，但是函数的声明可以被提升(出现在调用语句之后)，如下例：

```
console.log(square(5));
/* ... */
function square(n) { return n*n }
```
函数域是指函数声明时的所在的地方，或者函数在顶层被声明时指整个程序。
##### 函数递归

```
function factorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
```
##### 函数作用域
在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。

```
// 下面的变量定义在全局作用域(global scope)中
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
  return num1 * num2;
}

multiply(); // 返回 60

// 嵌套函数的例子
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // 返回 "Chamahk scored 5"
```
##### 嵌套函数和闭包
你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。

```
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```
由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数：
```
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // 可以这样想：给一个函数，使它的值加3
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```
JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。但是，外部函数却不能够访问定义在内部函数中的变量和函数。
由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

```
var pet = function(name) {          //外部函数定义了一个变量"name"
  var getName = function() {
    //内部函数可以访问 外部函数定义的"name"
    return name;
  }
  //返回这个内部函数，从而将其暴露在外部函数作用域
  return getName;
};
myPet = pet("Vivie");
myPet();                            // 返回结果 "Vivie"
```
##### 使用arguments对象
函数的实际参数会被保存在一个类似数组的arguments对象中。使用arguments对象，你可以处理比声明的更多的参数来调用函数。

```
function myConcat(separator) {
   var result = ''; // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```
##### 箭头函数

```
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

var a2 = a.map(function(s){ return s.length });

console.log(a2); // logs [ 8, 6, 7, 9 ]

var a3 = a.map( s => s.length );

console.log(a3); // logs [ 8, 6, 7, 9 ]
```
##### 预定义函数
JavaScript语言有好些个顶级的内建函数：

eval()
eval()方法会对一串字符串形式的JavaScript代码字符求值。

uneval() 
uneval()方法创建的一个Object的源代码的字符串表示。

isFinite()
isFinite()函数判断传入的值是否是有限的数值。 如果需要的话，其参数首先被转换为一个数值。

isNaN()
isNaN()函数判断一个值是否是NaN。注意：isNaN函数内部的强制转换规则十分有趣； 另一个可供选择的是ECMAScript 6 中定义Number.isNaN() , 或者使用 typeof来判断数值类型。

parseFloat()
parseFloat() 函数解析字符串参数，并返回一个浮点数。

parseInt()
parseInt() 函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。

decodeURI()
decodeURI() 函数对先前经过encodeURI函数或者其他类似方法编码过的字符串进行解码。

decodeURIComponent()
decodeURIComponent()方法对先前经过encodeURIComponent函数或者其他类似方法编码过的字符串进行解码。

encodeURI()
encodeURI()方法通过用以一个，两个，三个或四个转义序列表示字符的UTF-8编码替换统一资源标识符（URI）的某些字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

encodeURIComponent()
encodeURIComponent() 方法通过用以一个，两个，三个或四个转义序列表示字符的UTF-8编码替换统一资源标识符（URI）的每个字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

#### this关键字详解
this 永远指向调用包含 自己（this本身）的函数 对应的对象。
举例说明：

```
function test(){
    var a = 1;
    console.log(this.a);
}
test(); //undefined
```
如果函数在最外层直接运行，默认绑定的对象是 window，因为 test() 是被window对象调用的，所以这里的 this.a 对应的应该是 全局变量（或者叫window变量） 而不是test函数里的局部变量，由于 在 window 对象中没有声明 变量a，所以输出 undefined。

```
var a = 2; //window对象下的变量
function test(){
    var a = 1;
    console.log(this.a);
}
test(); // 打印结果为 2
```

```
var name = 'China';
var obj = {
    name : 'America',
    show : function() {
        console.log(this.name)
    }
}
obj.show(); // America
```
从上述代码可以看出，包含 this 的函数是 show（），而show（）函数通过对象obj调用的，所以 this.name 指向 obj 中的 name（America）;

```
var name = 'China';
var obj = {
    name : 'America',
    show : function() {
        return function(){
            console.log(this.name);
        }
    }
}
var a = obj.show();
a(); // China
```
这里的 obj.show（） 返回的是一个匿名函数

```
function(){
    console.log(this.name);
}
```
然后赋值给 变量a，等价于：

```
var a = function(){
    console.log(this.name);
}

或

function a(){
    console.log(this.name);
}
```
所以 最后执行的 a（）== window.a（）, 函数a 里面的 this.name 指向 window.name('China')，所以最终输出 China。

###### 1. 在一般函数方法中使用 this 指代全局对象
```
function test(){
　　this.x = 1;
　　alert(this.x);
}
test(); // 1
```
###### 2. 作为对象方法调用，this 指代上级对象

```
function test(){
　　alert(this.x);
}

var obj = {};

obj.x = 1;
obj.m = test;
obj.m(); // 1
```
###### 3. 作为构造函数调用，this 指向 new 出的对象

```
function test(){
    this.name = 'China';
}

var t = new test();
console.log(t.name); //'China'
```
###### 4. apply, call 调用

```
function Animal(){
    this.name = 'animal';
}

function Cat(){
    Animal.call(this);
}

var cat = new Cat();
console.log(cat.name);// 'animal'
```
##### ES6箭头函数的this指向详解
箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。
例子：

```
var name = 'window'; // 其实是window.name = 'window'

var A = {
   name: 'A',
   sayHello: function(){
      console.log(this.name)
   }
}

A.sayHello();// 输出A

var B = {
  name: 'B'
}

A.sayHello.call(B);//输出B

A.sayHello.call();//不传参数指向全局window对象，输出window.name也就是window
```
从上面可以看到，sayHello这个方法是定义在A对象中的，当我们使用call方法，把其指向B对象，最后输出了B；可以得出，sayHello的this只跟使用时的对象有关。
箭头函数：
```
var name = 'window'; 
var A = {
   name: 'A',
   sayHello: () => {
      console.log(this.name)
   }
}
A.sayHello();// 还是以为输出A ? 错啦，其实输出的是window
```
==箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。==
这里的箭头函数，也就是sayHello，所在的作用域其实是最外层的js环境，因为没有其他函数包裹；然后最外层的js环境指向的对象是winodw对象，所以这里的this指向的是window对象。
改造：

```
var name = 'window'; 

var A = {
   name: 'A',
   sayHello: function(){
      var s = () => console.log(this.name)
      return s//返回箭头函数s
   }
}

var sayHello = A.sayHello();
sayHello();// 输出A 

var B = {
   name: 'B';
}

sayHello.call(B); //还是A
sayHello.call(); //还是A
```
使用箭头函数其他几点需要注意的地方：
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

### async和await:
了解之前我们先了解一下promise
Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。深入了解请[点击](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#%E5%88%9B%E5%BB%BApromise)
