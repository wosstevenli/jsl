// window.onload=function(){

// }

// function diyici(x){
//     if(x>18){
//         console.log("你个老司机@")
//     }
//     else if(x<12){
//         console.log("小学生好屌的！")
//     }
//     else{
//         console.log("初中生杀马特！！！！")
//     }
// };

// diyici(15);

// function xxoo(x){
//     //console.log(x);
//     for(var i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// };

// xxoo(10,20,30);
// xxoo('HU','NBE','SJHE') 
//arguments是一个传入所有的参数的集合类似数组的东西
//所以arguments[x]代表的是传入的第几个参数

// function abc(){
//     if(arguments.length===0){
//         //return 0;
//         console.log(0);
//     }
//     var x=arguments[0];
//     return x>=0? x:-x;
//     //console.log(x);  //为什么打印不出来
// };

// //abc();
// abc(2);

// function foo(a,b,c){
//     if(arguments.length===2){
//         c=b;
//         b=null;
//     }
//     console.log(arguments[0]+'-'+arguments[1]+'-'+arguments[2]);
// };

// foo('A','B','C');
// foo('A','B');

// function foo(a, b) {
//     var i, rest = [];
//     if (arguments.length > 2) {
//         for (i = 2; i<arguments.length; i++) {
//             rest.push(arguments[i]); //参数放入数组
//         }
//     }
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }

// foo(1,2,3,4,5,6,7,8);
//foo(1,2);
//foo(1);

//rest的ES6写法...表示有若干个参数，rest写在最后
// function foo(a,b,...rest){
//     console.log('a='+a);
//     console.log('b='+b);
//     console.log(rest);
// }
// foo(1,2,3,4,5,6,7,8,9);

//请用rest参数编写一个sum()函数，接收任意个参数并返回它们的和：
// function fooo(...rest){
//     var i=0;
//     for(i=0;i<=rest.length;i++){
//         i+=arguments[i];
//     }
//     console.log(i);
// }

// fooo(1,2,3,4,5,6,7,8,9);

// function foooo(){
//     var x=1;
//     x+=1;
//     console.log(x);
// }

// x+=2;
// console.log(x);

// foooo(2);

// function foo(){
//     var x='Hello,'+y;
//     alert(x);
//     var y='STEVEN';
// }

// foo();
//var x = 'Hello, ' + y;并不报错，原因是变量y在稍后申明了
//但是alert显示Hello, undefined，说明变量y的值为undefined
//这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。

// function foo(){
//     var sum=0;
//     for(let i=0;i<=100;i++){  //ES6中新增let
//         sum+=i;
//         console.log(sum);
//     }
// }

// foo();

// function foo(){
//     var sum=0;
//     var i=0;
//     for(i=0;i<=100;i++){ //for无法调用i
//         sum+=i;
//     }
// }

// foo();

// function foo(){
//     for( var i=0;i<=100;i++){
//     }
//     i+=100;
// }

// foo();

/////////////////////////////////方法
// var xiaoming={
//     name:'STEVEN',
//     birth:1987,
//     age:function(){
//         var y=new Date().getFullYear();
//         return y-this.birth;
//     }
// };
// console.log(xiaoming.age);//显示的是xiaomi.age是什么，是一个function
// console.log(xiaoming.age());//调用xiaoming.age()这个方法执行的结果

//拆开写的方法
// function getage(){
//     var y=new Date().getFullYear();
//     return y-this.birth;
// }

// var xiaoming={
//     name:'steven',
//     birth:'1990',
//     age:getage
// };

// console.log(xiaoming.age());
// console.log(getage());

// function getage(){
//     var y=new Date().getFullYear();
//     return y-this.birth;
// }

// var xiaoming={
//     name:'steven',
//     birth:'1990',
//     age:getage
// };

// console.log(xiaoming.age());
// console.log(getage.apply(xiaoming,[]));

///////////////////////////高阶函数
//编写高阶函数，就是让函数的参数能够接收别的函数
// function add(x,y,f){
//     return f(x)+f(y);
// }

// console.log(add(-5,6,Math.abs));

// function pingfang(x){
//     return x*x;
// }
// var arr=[1,2,3,4,5,6];
// // console.log(arr.map(pingfang));
// // console.log(arr.map(pingfang));
// console.log(pingfang);
// console.log(pingfang());

// var arr=[1,2,3,4,5,6];
// console.log(arr.map(String));

//求和
// var arr=[1,2,3,4,5];
// console.log(arr.reduce(function(x,y){
//     return x+y;
// }));

//求乘积
// var arr=[1,2,3,4,5];
// console.log(arr.reduce(function(x,y){
//     return x*y;
// }));

// var arr=[1,2,3,4,5];
// console.log(arr.reduce(function(x,y){
//     return x*10+y;
// }))

//filter
// var arr=[1,2,3,4,5,6,7,8,9];
// var r=arr.filter(function(x){
//     return x%2==0; //x/2取余为偶数时成立
//     return x%2!==0; //x/2取余为基数时成立
// });
// console.log(r);

//有问题
// var arr=['A','B','','c',null,undefined,NaN,' ','d'];
// var r=arr.filter(function(s){
//     //console.log(s);
//     return s && s.trim();
//     });

//console.log(arr);

// var arr=['A','B','','c',null,undefined,NaN,' ','d'];
// var r=arr.filter(function(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     //return true;
// })

//去除重复元素
// var arr=['A','B','','A',null,undefined,NaN,' ','d'];
// var r=arr.filter(function(a,b,c){
//     return c.indexOf(a)===b;
// })
// console.log(r);

//排序
// var arr=['Google','Apple','Microsoft'];
// console.log(arr.sort());

// var arr=['Google','apple','Microsoft'];
// console.log(arr.sort());

// var arr=['10','20','1','2'];
// console.log(arr.sort());

// var arr=[10,20,1,2];
// console.log(arr.sort());

//正序排列
// var arr=[10,20,1,2];
// console.log(arr.sort(function(x,y){
//     if(x<y){
//         return -1;
//     }
//     if(x>y){
//         return 1;
//     }
//     return 0;
// }));

//逆序排列
// var arr=[10,20,1,2];
// console.log(arr.sort(function(x,y){
//     if(x<y){
//         return 1;
//     }
//     if(x>y){
//         return -1;
//     }
//     return 0;
// }));

//忽略大小写排序
// var arr=['Google','apple','Microsoft'];
// console.log(arr.sort(function(a1,a2){
//     y1=a1.toUpperCase();
//     y2=a2.toUpperCase();
//     if(y1<y2){
//         return -1;
//     }
//     if(y1>y2){
//         return 1;
//     }
//     return 0;
// }));

// var arr=['Google','apple','Microsoft'];
// console.log(arr.sort(function(a1,a2){
//     y1=a1.toLowerCase();
//     y2=a2.toLowerCase();
//     if(y1<y2){
//         return -1;
//     }
//     if(y1>y2){
//         return 1;
//     }
//     return 0;
// }));

//闭包
// function sum(arr){
//     return arr.reduce(function(x,y){
//         return x+y;
//     });
// }

// console.log(sum([1,2,3,4,5]));

// function sum(arr){
//     var sums=function(){
//     return arr.reduce(function(x,y){
//         return x+y;
//     });}
//     return sums;
// }

// console.log(sum([1,2,3,4,5]));


// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {  //生成数组f1()/f2()/f3()三个函数返回的值为1/4/9
//             return i * i;
//         });
//     }
//     return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];

//箭头函数
// x=>x*x;
// console.log();

// function foo(x){
//     return x+x;
// }
// var r=foo(1);
// console.log(r);

//做人呢，最重要的是吃面！你饿不饿，那你还不自己去煮面！