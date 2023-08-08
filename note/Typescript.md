### 安装
``` 
npm i -g typescript 
```
### 建立文件
新建xxx.ts
### 编译
对应目录下执行
```
tsc xxx.ts
```
生成对应的js文件
### ts类型声明
```
let a: number
let c:number;
let d:string;
let e:boolean = true;
let f:Object = {};
function sum(a:number,b:number):number{
    return a + b
}
```
返回值和参数都可以进行声明
### ts的基本类型
1.1 'boolean' -- 布尔类型,定以后可以赋值true/false 和Boolean()对象   
1.2 'number' --数字类型，,定以后可以赋值'2/8/10/16进制'，'整数类型'，   
    '小数类型'，'NaN','Infinity（表示无穷大）'
1.3 'string' -- 字符串类型    
1.4 '数组类型' -- '类型[]' /' Array<类型>'   
1.5 '元组类型' -- '[类型]'   
1.6 'enum'    -- 枚举   
1.7 'any'     -- 任意类型   
1.8 'void'    -- 空置,定义方法时候没有返回值使用   
1.9 'null/undefined' -- 'Null 和 Undefined'   
1.10'never'  -- 不存在类型一般用于错误处理函数.例如'抛出异常'/'死循环'   
1.11'object' --  ts 中是泛指非所有非原始类型   
1.12'类型断言' -- 可以理解成断定这个类型是自己断言设置的类型   
后续扩展(随着ts 升级增加的新的类型)   
1.13.bigint   -- 使用较少的大整数   
1.14.unkwon -- 用来描述类型并不确定的变量   
any赋值的任何变量也会变成any，unknow只是自己是任意类型，赋值给别的类型不影响别的变量   
