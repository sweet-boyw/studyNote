<!--
 * @Author: your name
 * @Date: 2022-02-23 17:27:13
 * @LastEditTime: 2022-02-23 17:31:26
 * @LastEditors: Please set LastEditors
 * @Description: js中的some()和every()
 * @FilePath: \hNote\studyNote\js中的some()和every().md
-->
### js中的some()和every()
every()与some()方法都是JS中数组的迭代方法。  
- every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
- some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
```
var arr = [ 1, 2, 3, 4, 5, 6 ]; 

console.log( arr.some( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
})); 
//运行结果
//item=1,index=0,array=1,2,3,4,5,6
//VM142:2 item=2,index=1,array=1,2,3,4,5,6
//VM142:2 item=3,index=2,array=1,2,3,4,5,6
//VM142:2 item=4,index=3,array=1,2,3,4,5,6
//VM142:1 true

console.log( arr.every( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
}));
//运行结果
//item=1,index=0,array=1,2,3,4,5,6
//VM146:1 false
```
- some一直在找符合条件的值，一旦找到，则不会继续迭代下去。
- every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去。