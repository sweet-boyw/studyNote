// object表示一个对象
let a:object;
a = {};
a = function(){};

// 指定对象中可以包含哪些属性
// 在属性名后面加上?表示这个属性是可选的
let b:{name:string,age?:number};
b = {name:"Tom"};

// 至少包含一个string类型的name，别的属性可以任意
// [propname:string]:any表示任意类型的属性
let g:{name:string,[propname:string]:any}

g = {name:"猪八戒",age:1999,gander:"男"};

// 定义一个函数(形参：类型，形参：类型，...)=>返回值类型
let h:(a:number,b:number)=>number;
h = function(n1:number,n2:number){
    return n1 + n2
}

// 定义一个字符串数组
let j:string[];
j = ['q','w']
// 定义一个数值类型的数组
// let k:number[]; // 或者 
let k:Array<number>;

// 元组 tuple 就是固定长度的数组
let l:[string,string] // 长度为2类型都是string的元组
l = ['q','c']

// enum 枚举类型
enum Gander{
    male = 0,
    female = 1
}

let i:{name:string,sex:Gander};
i = {
    name:"sunwukong",
    sex:Gander.male // male 0
}
// 类型的别名
// type 别名=类型 
type myType = string
let y:myType;
y = "111"