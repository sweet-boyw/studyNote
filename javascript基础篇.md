####  一、数据类型
##### 基本数据类型
    字符串：string
    数字：Number
    布尔：boolean
    对空：Null 空指针对象
    未定义：undefined
######     null为空指针对象

######     出现undefoned的四种情况
- 声明未初始化的变量
- 获取对象某个不存在的属性
- 函数没有设置返回值在某个地方用到返回值
- 定义多个形式参数但是实际参数不足
#####     引用数据类型：
    对象：Object
    数组：Array
    函数：Function
####      判断数据类型的方法：
######     typeof
    
```
typeof'';// string 有效
typeof1;// number 有效
typeofSymbol();// symbol 有效
typeoftrue;//boolean 有效
typeofundefined;//undefined 有效
typeofnull;//object 无效
typeof[] ;//object 无效
typeofnewFunction();// function 有效
typeofnewDate();//object 无效
typeofnewRegExp();//object 无效
```
###### instanceof
instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false

```
[] instanceof Array;// true
{} instanceof Object;// true
newDate() instanceof Date;// true
 
function Person(){};
newPerson() instanceof Person;
 
[] instanceof Object;// true
newDate() instanceof Object;// true
newPerson instanceof Object;// true
```
###### constructor
当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用

```
function F(){}
//undefined
F.prototype
//{constructor: ƒ}
'a'.constructor == String//true
```
##### toString
toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]]

```
Object.prototype.toString.call('') ;  // [object String]
Object.prototype.toString.call(1) ;   // [object Number]
Object.prototype.toString.call(true) ;// [object Boolean]
Object.prototype.toString.call(Symbol());//[object Symbol]
Object.prototype.toString.call(undefined) ;// [object Undefined]
Object.prototype.toString.call(null) ;// [object Null]
Object.prototype.toString.call(newFunction()) ;// [object Function]
Object.prototype.toString.call(newDate()) ;// [object Date]
Object.prototype.toString.call([]) ;// [object Array]
Object.prototype.toString.call(newRegExp()) ;// [object RegExp]
Object.prototype.toString.call(newError()) ;// [object Error]
Object.prototype.toString.call(document) ;// [object HTMLDocument]
Object.prototype.toString.call(window) ;//[object global] window 是全局对象 global 的引用
```
##### 数据类型转换
    常用值转换为字符串"",比如1转换"1",把值转换为字符串的常用方法有 2 种
######  使用加号运算符
当值与空字符串相加运算时，JavaScript 会自动把值转换为字符串。

```
var n = 123;
n = n + "";
console.log(typeof n); //返回类型为 string
```

```
var b = true;
b = b + "";
console.log(b); //返回字符串"true"
```

```
var a = [1,2,3];
a = a + "";
console.log(a); //返回字符串 "1,2,3"
```

```
var f = function(){return 1;};
f = f + "";
console.log(f);  //返回字符串 "function (){return 1;}"
```

```
var a =new function(){}();
a = a + "";
console.log(a);  //返回字符串 "[object object]"
```
==加号运算符有两个计算功能：数值求和、字符串连接。但是字符串连接操作的优先级要大于求和运算。因此，在可能的情况下，即运算元的数据类型不一致时，加号运算符会尝试把数值运算元转换为字符串，再执行连接操作。==

```
var a = 1 + 1 + "a";
var b= "a" + 1 + 1;
console.log(a);  //返回字符串 "2a"
console.log(b);  //返回字符串"a11"
```
###### 使用toString()方法

```
var a = 123456;
a.toString();
console.log(a);  //返回字符串“123456”
```
##### 转换为数字
###### parseInt()
从左到右挨个转换，直到找到非数值类型
```
console.log(parseInt("123abc"));  //返回数字123
console.log(parseInt("1.73"));   //返回数字1
console.log(parseInt(".123"));   //返回值NaN
```
###### parseFloat()

```
console.log(parseFloat("1.234.5"));  //返回数值 1.234
console.log(parseFloat("123"));  //返回数值 123
console.log(parseFloat("123abc"));  //返回数值 123
console.log(parseFloat("010"));  //返回数值 10
console.log(parseFloat("0x10"));  //返回数值 0
console.log(parseFloat("x10"));  //返回数值 NaN
```
##### 转换为布尔值
######  使用双重逻辑非

```
console.log(!!0);  //返回false
console.log(!!1);  //返回true
console.log(!!"");  //返回false
console.log(!!NaN);  //返回false
console.log(!!null);  //返回false
console.log(!!undefined);  //返回false
console.log(!![]);  //返回true
console.log(!!{});  //返回true
console.log(!!function(){});  //返回true
```
###### 使用 Boolean() 函数

```
console.log(Boolean(0));  //返回false
console.log(Boolean(1));  //返回true
```
##### 转换为对象
使用 new 命令调用 String，Number，Boolean 类型函数执行实例化操作，并把值“123”传进去，使用 new 运算符创建实例对象，简单值分别被封装为字符串型对象、数值型对象和布尔型对象。

```
var n = "123";
console.log(typeof new String(n));  //返回Object
console.log(typeof new Number(n));  //返回Object
console.log(typeof new Boolean(n));  //返回Object
console.log(Object.prototype.toString.call(new String(n)));  //返回 [object String]
console.log(Object.prototype.toString.call(new Number(n)));  //返回 [object Number]
console.log(Object.prototype.toString.call(new Boolean(n)));  //返回 [object Boolean]
```

#### javascript运算符
    算数运算符(+,-,*,/,%,++,--)
    赋值运算符(=,+=,-=,*=,/=,%=)
    比较运算符(==,===,!=,!==,<,>,<=,>=,a?b:c)
    逻辑运算符(&&,||,!)
    类型运算符(typeof、instanceof)
    位运算符(&,|,~,^,<<,>>,>>>)
