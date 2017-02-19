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

//Date
// var now = new Date();
// console.log(now+"输出当前详情时间");
// console.log(now.getDate()+"输出日期");
// console.log(now.getDay()+"输出当前星期");
// console.log(now.getFullYear()+"输出当前年份");
// console.log(now.getHours()+"输出当前小时");
// console.log(now.getMilliseconds()+"输出当前毫秒");
// console.log(now.getMinutes()+"输出当前分钟");
// console.log(now.getMonth()+1+"输出当前月份从0开始，显示当前月份要+1");
// console.log(now.getSeconds()+"输出当前秒钟");
// console.log(now.getTime()+"以number形式表示的时间戳");
// console.log(now.getTimezoneOffset()+"");
// console.log(now.getUTCDate()+"");
// console.log(now.getUTCDay()+"");
// console.log(now.getUTCFullYear()+"");
//console.log(now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate());

// var setday=new Date(2017,1,14,14,59,59,123);
// console.log(setday); //设定的日期1月会被+1翻译为2月

// var setday=new Date(1435146562875);
// console.log(setday);
// console.log(setday.toLocaleString());//显示本地时间
// console.log(setday.toUTCString());//显示UTC时间

// if(Date.now){
//     alert(Date.now());
// }else{
//     alert(new Date().getTime());
// }

// var today= new Date();
// if(today.getMonth()==1&&today.getDate()==14){
//     console.log("情人节快乐！");
// }

//正则表达式
//20170219
// var re01=/[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}/;
// var test='WHrzxf501-';
// console.log(re01.test);
// console.log(re01);

// var re01=/ABC\-001/;
// var re02=new RegExp('ABC\-001');//这种表达方式中/需要转义
// var re03=new RegExp('ABC\\-001');//其中\需要加\来进行转义
// console.log(re01);
// console.log(re02);
// console.log(re03);

// var re=/[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}/;
// var re=/[a-zA-Z\_\$][0-9a-zA-Z\_\$]/;
// console.log(re.test('WHrzxf501-'));
// console.log(re.test('WHrzxf501_'));//RegExp对象的test()方法用于测试给定的字符串是否符合条件。

// console.log('a b    c'.split(''));
// console.log('a b    c'.split(/\s+/));//忽略空格数目
//console.log('a b    c'.split(/\s+/).length);
// console.log('a,b, c  d'.split(/\s+/));
// console.log('a,b, c  d'.split(/\s+/).length);
// console.log('a,b, c  d'.split(/[\s\,+]+/));
// console.log('a,b, c  d'.split(/[\s\,+]+/).length);
// console.log('a,b;; c  d'.split(/[\s\,\;+]+/));
// console.log('a,b;; c  d'.split(/[\s\,\;+]+/).length);

//var re=/^(\d{3})-(\d{5,8})$/;
// console.log(re.exec('027-61600766'));
//console.log(re.exec('027-12345'));
// console.log(re.exec('027-123'));
// console.log(re.exec('027-1234a'));
// console.log(re.exec('027-1234-'));
// console.log(re.exec('027-12345-'));

// var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
// console.log(re.exec('7:26:36'));

// var re =/^(\d+)(0*)$/;
//var re =/^(\d+?)(0*)$/; //?采用非贪婪匹配
//console.log(re.exec('102300'));
//console.log(re.exec('102300'));

//邮箱验证
// var re=/^([0-9a-zA-Z]+)([0-9a-zA-Z.\_]+)@([0-9a-zA-Z\_]+).([0-9a-zA-Z])$/;
// console.log(re.test('wosstevenli@gmail.com'));

//Json学习开始
// var xiaoqi={
//     name:'小七',
//     age:28,
//     sex:'girl',
//     height:1.58,
//     job:['sales','teacher','doctor'],
//     'middle-school':'liji',
// }

// console.log(JSON.stringify(xiaoqi));

// xiaoqi={
//     name:'小七',
//     age:28,
//     sex:'girl',
//     height:1.58,
//     job:['sales','teacher','doctor'],
//     'middle-school':'liji',
// }

// console.log(JSON.stringify(xiaoqi,null,' ')); //按缩进输出

// xiaoqi={
//     name:'小七',
//     age:28,
//     sex:'girl',
//     height:1.58,
//     job:['sales','teacher','doctor'],
//     'middle-school':'liji',
// }

// console.log(JSON.stringify(xiaoqi,['name','job'],' ')); //只输出指定的属性

// xiaoqi={
//     name:'小七',
//     age:28,
//     sex:'girl',
//     height:1.58,
//     job:['sales','teacher','doctor'],
//     'middle-school':'liji',
// }

// function convert(key,value){
//     if(typeof value ==='string'){
//         return value.toUpperCase();
//     }
//     return value;
// }

// console.log(JSON.stringify(xiaoqi,convert,' ')); //传入函数json每个键值先被函数处理

// xiaoqi={
//     name:'小七',
//     age:28,
//     sex:'girl',
//     height:1.58,
//     job:['sales','teacher','doctor'],
//     'middle-school':'liji',
//     toJSON:function(){
//         return {
//             'WName':this.age,
//             'WAge':this.name,
//         };
//     }
// };

// console.log(JSON.stringify(xiaoqi,null,' ')); //将xiaoqi重新进行序列化
//序列化指的是将对象转化为json格式的字符串

//反序列化指的是将拿到的json格式的字符串通过JSON.parse()变成一个javascript对象
// console.log(JSON.parse('[1,2,3,true]'));
// console.log(typeof('[1,2,3,true]')); //类型为字符串
// console.log(typeof(JSON.parse('[1,2,3,true]')));//类型为对象

// var xiaoqi={
//     name:'小七',
//     age:28,
//     sex:'girl',
//     height:1.58,
//     job:['sales','teacher','doctor'],
//     'middle-school':'liji',
// }

// //console.log(typeof(xiaoqi));//xiaoqi原本是一个对象 object
// console.log(JSON.stringify(xiaoqi));
// console.log(typeof(JSON.stringify(xiaoqi)));//对象经过序列化成为json格式的字符串 string

// console.log(JSON.parse('{"name":"小明","age":14}'));
// console.log(typeof('{"name":"小明","age":14}')); //string字符串
// //JSON的字符串规定必须用双引号""，Object的键也必须用双引号"" 这是JSON格式的字符串{"name":"小明","age":14}，这是普通javascript格式的Object { name: "小明", age: 14 }
// console.log(typeof(JSON.parse('{"name":"小明","age":14}')));//对象

//console.log(JSON.parse({"name":"小明","age":14}));//无法使用

// console.log(JSON.parse('{"name":"小七","age":14}',function(key,value){
//     if(key === 'name'){
//         return value+'同学';
//     }
//     return value;
// }));

