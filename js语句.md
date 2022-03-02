<!--
 * @Author: your name
 * @Date: 2022-03-02 08:30:04
 * @LastEditTime: 2022-03-02 08:30:04
 * @LastEditors: Please set LastEditors
 * @Description: 语句
 * @FilePath: \hNote\js语句.md
-->
### 语句
##### for语句

```
for(var i = 0;i<a;i++){
    //循环体
}
```
##### if语句

```
if(a){
    //语句
}else{
    
}//在做条件判断的时候需要处理好逻辑先判断哪个？
```
##### do ... while语句

```
do{
    //循环体
}while(a)
```
##### switch语句

```
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 
```
##### try ... catch语句

```
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
}
```
##### function语句 return语句
    
```
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8

```
##### break语句
终止 switch 或循环。
##### continue语句
跳出循环并在顶端开始。
##### debugger语句
停止执行 JavaScript，并调用调试函数（如果可用）
