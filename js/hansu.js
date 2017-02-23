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

//面向对象编程
// var student ={
//     name:'xingming',
//     height:1.7,
//     yunxing:function(){
//         console.log(this.name+'正在运行！');
//     }
// };

// var xiaomi={
//     name:'小米'
// };

// xiaomi.__proto__=student;
// console.log(xiaomi.name);
// console.log(xiaomi.height);
// console.log(xiaomi.yunxing);
//console.log(xiaomi.yunxing());
//console.log(xiaomi.name+xiaomi.height+xiaomi.yunxing);

// var lei={
//     name:'classname',
//     height:1.7,
//     run:function(){
//         console.log(this.name +this.height+ '就是他！');
//     }
// };

// console.log(lei);
//console.log(lei.run());//也不能这样用
// lei.run();
// var mi ={
//     name:'虎哥'
// };

// mi.__proto__=lei;

// console.log(mi.name);
// console.log(mi.run);
// console.log(mi.run());//运行run函数只直接使用mi.run();
// console.log(mi.height);
// mi.run();

//JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。

// var bird={
//     fly:function(){
//         console.log(this.name+'让你飞！');
//     }
// };

// var mi={
//     name:'小米'
// };

// mi.__proto__=bird;
// console.log(mi.name);
// mi.fly();

//使用这种方法创建对象
// var lei={
//     name:'classname',
//     height:1.7,
//     run:function(){
//         console.log(this.name +this.height+ '就是他！');
//     }
// };

// function creatlei(name){
//     var s=Object.create(lei);
//     s.name=name;
//     return s;
// }

// var mi=creatlei('小米');
// mi.run();
// console.log(mi.__proto__===lei);

//创建对象-构造函数
// function stu(name){
//     this.name=name;
//     this.hello=function(){
//         console.log('Hello!'+this.name+'!!!');
//     }
// }

// function stu(hhkk){//创建函数的参数可以任意设定名称
//     this.name=hhkk;
//     this.hello=function(){
//         console.log('Hello!'+this.name+'!!!');
//     }
// }

// var mi=new stu('xxxx');
// console.log(mi.name);

//继承没弄懂
// function student(props){
//     this.name=props.name ||'Unnamed';
// }

// student.prototype.hello=function(){
//     alert('Hello,'+this.name+'!');
// }

//EC6 class
// function student(name){
//     this.name=name;
//     console.log(this.name);
// }

// student.prototype.hello=function(){
//     console.log('Hello'+this.name+'!');
// }

// student('STEVEN');

// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     hello(){
//         console.log('Hello,'+this.name+'!'+this.age);
//     }
// }

// var xiaomi=new student('MI',28);
// xiaomi.hello();

// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     hello(){
//         console.log('Hello,'+this.name+'!'+this.age);
//     }
// }

// var xiaomi=new student('MI',28);
// xiaomi.hello();

// class student{
//     constructor(name){
//         this.name=name;
//     }
//     hello(){
//         console.log('Hello,'+this.name+'!');
//     }
// }

// class newstudent extends student{
//     constructor(name,grade){
//         super(name);
//         this.grade=grade;
//     }

//     mygrade(){
//         console.log('I AM GRADE'+this.grade);
//     }
// }

// var xiaomi=new newstudent('MI',5);
// xiaomi.mygrade();

//浏览器讲的是浏览器对ES的支持

//浏览器对象
// alert('浏览器窗口大小为：'+window.innerWidth+'*'+window.innerHeight);
// console.log('浏览器窗口大小为：'+window.innerWidth+'*'+window.innerHeight);

// alert('浏览器窗口整体大小为：'+window.outerWidth+'*'+window.outerWidth);
// console.log('浏览器整体大小为：'+window.outerWidth+'*'+window.outerHeight);

// console.log('appname='+navigator.appName);
// console.log('appversion='+navigator.appVersion);
// console.log('applanguage='+navigator.language);
// console.log('appplatform='+navigator.platform);
// console.log('appuseragent='+navigator.userAgent);

//短路运算符||计算：
// var width = window.innerWidth || document.body.clientWidth;
// console.log(width);
// console.log(window.innerWidth+'/'+window.outerWidth+'/'+screen.width);
// console.log(screen.colorDepth);

// console.log(location.protocol+ '\n' +location.host+ '\n' +location.port+ '\n' +location.pathname+ '\n' +location.search+ '\n' +location.hash);

//LOCATION
//重新加载
// if(confirm('重新加载当前页'+location.href+'?')){
//     location.reload();
// }
// else{
//     location.assign('https://www.baidu.com/');
// }

//document
// document.title='无法可修饰的一对手';
// console.log(document.title);

// var menu=document.getElementById('drinkmenu');
// var drink=document.getElementsByTagName('dt');
// var i,s;
     // console.log(menu);
     // console.log(menu.tagName);
     // console.log(drink);
// s='提供的饮品有：';
// for(i=0;i<drink.length;i++){
//     s=s+drink[i].innerHTML+',';
// };
// console.log(s);

//console.log(document.cookie);

//history.back();
//对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用history.back()可能会让用户感到非常愤怒。
//任何情况，你都不应该使用history这个对象了。

//console.log(document.getElementById('drinkmenu'));
//console.log(document.getElementById('drinkmenu').tagName);
//console.log(document.getElementById('drinkmenu').getElementsByTagName('dt'));
//console.log(document.getElementById('drinkmenu').getElementsByClassName('water'));
//console.log(drinkmenu.children); //获取drinkmenu节点下的所有节点
// console.log(drinkmenu.firstElementChild);
// console.log(drinkmenu.lastElementChild);

// console.log(document.querySelector('#drinkmenu'));
// var DIV=document.querySelector('#drinkmenu');
// console.log(document.querySelectorAll('dt'));
// console.log(DIV.querySelectorAll('dd'));

// var js =document.getElementById('test-p');// 选择<p>JavaScript</p>:

// var arr =document.querySelectorAll('.c-red.c-green >p');// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:

// var haskell =document.querySelector(".c-green + .c-green :last-child");// 选择<p>Haskell</p>:

// if (!js || js.innerText !== 'JavaScript') {
//     alert('选择JavaScript失败!');
// } else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
//     alert('选择Python,Ruby,Swift失败!');
// } else if (!haskell || haskell.innerText !== 'Haskell') {
//     alert('选择Haskell失败!');
// } else {
//     alert('测试通过!');
// }

// console.log(js+arr+haskell);

// console.log(document.getElementById('test-p').innerHTML='HAOHAOXUEXI');
//console.log(document.getElementById('test-p').innerHTML='<span style="color:red;margin-left:200px">HAOHAOXUEXI</span>');
// console.log(document.getElementById('test-p').innerText='GOODGOOGLE');
// console.log(document.getElementById('test-p').innerText='<script>alert("Hi")</script>');
// console.log(document.getElementById('test-p').innerHTML='<script>alert("Hi")</script>');
// var p=document.getElementById('test-p').innerHTML='<script>alert("Hi")</script>';

// var cstyle =document.getElementById('test-p');
// cstyle.style.fontSize='40px';
// cstyle.style.color='#3079ed';
// cstyle.style.marginLeft='200px';

// 获取<p>javascript</p>节点:
// var js =document.getElementById('test-js');

// // 修改文本为JavaScript:
// // TODO:
// js.innerHTML='JavaScript';

// // 修改CSS为: color: #ff0000, font-weight: bold
// // TODO:
// js.style.color='#ff0000';
// js.style.fontWeight='bold';

// // 测试:
// if (js && js.parentNode && js.parentNode.id === 'test-div02' && js.id === 'test-js') {
//     if (js.innerText === 'JavaScript') {
//         if (js.style && js.style.fontWeight === 'bold' && (js.style.color === 'red' || js.style.color === '#ff0000' || js.style.color === '#f00' || js.style.color === 'rgb(255, 0, 0)')) {
//             alert('测试通过!');
//         } else {
//             alert('CSS样式测试失败!');
//         }
//     } else {
//         alert('文本测试失败!');
//     }
// } else {
//     alert('节点测试失败!');
// }

//插入DOM
//原有节点插入新的位置
// var js=document.getElementById('js'),
//     list=document.getElementById('list');
// list.appendChild(js);
// console.log(list);

//创建新节点插入
// var list=document.getElementById('list'),
//     php=document.createElement('p');
// php.id='php';
// php.innerText='PHP';
// list.appendChild(php);

// var d=document.createElement('style');
// d.setAttribute('type','text/css');
// d.innerHTML='p{color:#3079ed}';
// document.getElementsByTagName('head')[0].appendChild(d);
// console.log(document.getElementsByTagName('head')[0]);//动态创建了一个<style>节点，然后把它添加到<head>节点的末尾

// var d=document.createElement('style');
// d.setAttribute('type','text/css')
// d.innerHTML='p{margin-left:100px}';
// document.getElementById('java').appendChild(d);

// var list=document.getElementById('list'),
//     py=document.getElementById('python'),
//     php=document.createElement('p');
//     php.id='php';
//     php.innerText='PHP';
//     list.insertBefore(php,py);

//循环子节点
// var i,c,list=document.getElementById('list');
// for(i=0;i<list.children.length;i++){
//     c=list.children[i];
// }
// console.log(c);

//删除节点，要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉：
// var java=document.getElementById('java');
// var parent=java.parentElement;
// var remove=parent.removeChild(java);
// console.log(java);
// console.log(remove);
// console.log(java===remove);

//操作表单
// var input=document.getElementById('email');
// console.log(input);
// console.log(input.value);

// var mon=document.getElementById('monday');
// var tue=document.getElementById('tuesday');
// console.log(mon);
// console.log(tue);
// console.log(mon.value);
// console.log(tue.value);
// console.log(mon.checked);
// console.log(tue.checked);

// var input=document.getElementById('email');
// input.value='LADYGAGA';
// console.log(input.value='JUSTINBIBER');

// console.log(typeof(document.getElementById('newtype').value));

// console.log(typeof(document.getElementById('newtype').value));
// console.log(document.getElementById('newtype').value);

// console.log(typeof(document.getElementById('newtype01').value));
// console.log(document.getElementById('newtype01').value);

// console.log(typeof(document.getElementById('newtype02').value));
// console.log(document.getElementById('newtype02').value);

// function doSubmitForm(){
//     var form=document.getElementById('test-form');
//     form.submit();
// };

// function checkForm(){
//     var form=document.getElementById('test-form2');
//     return true; //注意要return true来告诉浏览器继续提交，如果return false，浏览器将不会继续提交form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交form。
// }

// function checkForm(){
//     var pwd=document.getElementById('password');
//     pwd.value =toMD5(pwd.value);
//     return true;
// }

// function checkRegisterForm() {
//     // var name = /^[0-9a-zA-Z]{3,10}$/;
//     var name = /\w{3,8}/;
//     var pwd = /\w{6,20}/;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var password2 = document.getElementById('password-2').value;

// if(name.test(username) && pwd.test(password) && password === password2){
//     return true;
// }
//     return false;
// };
// (function () {
//     window.testFormHandler = checkRegisterForm;
//     var form = document.getElementById('test-register');
//     if (form.dispatchEvent) {
//         var event = new Event('submit', {
//             bubbles: true,
//             cancelable: true
//           });
//         form.dispatchEvent(event);
//     } else {
//         form.fireEvent('onsubmit');
//     }
// })();

// AJAX  在现代浏览器上写AJAX主要依靠XMLHttpRequest对象

//啥子是promise承诺 异步操作，异步操作会在将来的某个时间点触发一个函数调用。
// function callback(){
//     console.log('Done');
// } //定义函数callback()
// console.log('before setTimeout()'); //打印字符串'before setTimeout()'
// setTimeout(callback,1000); //执行函数setTimeout()参数为callback()函数和1000毫秒
// console.log('after setTimeout()');//打印字符串'after setTimeout()'

// new Promise(function(){});
// console.log('支持promise');

/*function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}*/

/*var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('成功：' + result);
});
var p3 = p2.catch(function (reason) {
    console.log('失败：' + reason);
});*/
//简写
/*new Promise(test).then(function(result){
    console.log('成功:'+result);
}).catch(function(reason){
    console.log('失败:'+reason);
});*/

// var canvas=document.getElementById('test-canvas');
// if(canvas.getContext){
//     console.log('你的浏览器支持canvas');
// }else{
//     console.log('你的浏览器不支持convas');
// }

// var canvas = document.getElementById('test-canvas'),
//     ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
//     ctx.fillStyle = '#dddddd'; // 设置颜色
//     ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
//     // 利用Path绘制复杂路径:
//     var path=new Path2D();
//     path.arc(75, 75, 50, 0, Math.PI*2, true);
//     path.moveTo(110,75);
//     path.arc(75, 75, 35, 0, Math.PI, false);
//     path.moveTo(65, 65);
//     path.arc(60, 65, 5, 0, Math.PI*2, true);
//     path.moveTo(95, 65);
//     path.arc(90, 65, 5, 0, Math.PI*2, true);
//     ctx.strokeStyle = '#0000ff';
//     ctx.stroke(path);

// var canvas = document.getElementById('test-canvas'),
//     ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.shadowOffsetX = 2;
//     ctx.shadowOffsetY = 2;
//     ctx.shadowBlur = 2;
//     ctx.shadowColor = '#666666';
//     ctx.font = '24px Arial';
//     ctx.fillStyle = '#333333';
//     ctx.fillText('带阴影的文字', 20, 40);

//jQuery
// console.log('jQuery版本:'+$.fn.jquery);
// console.log(typeof(window.jQuery));
// console.log(window.$);
// console.log(window.jQuery===window.$);

//console.log($('#div01'));
// var div = $('#div01');
// var divDom = div.get(0);
// var another = $(divDom);
// console.log(div);
// console.log(divDom);
// console.log(another);

//通常很多节点有多个class，我们可以查找同时包含red和green的节点：
//var a = $('.red.green'); // 注意没有空格！
// var email = $('[name=email]'); // 找出<??? name="email">
// var passwordInput = $('[type=password]'); // 找出<??? type="password">
// var a = $('[items="A B"]'); // 找出<??? items="A B">
// 当属性的值包含空格等特殊字符时，需要用双引号括起来

// 按属性查找还可以使用前缀查找或者后缀查找：
// var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
// // 例如: name="icon-1", name="icon-2"
// var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
// // 例如: name="startswith", name="endswith"
// 这个方法尤其适合通过class属性查找，且不受class包含多个名称的影响：
// 组合查找
//组合查找就是把上述简单选择器组合起来使用。如果我们查找$('[name=email]')，很可能把表单外的<div name="email">也找出来，但我们只希望查找<input>，就可以这么写：
//var emailInput = $('input[name=email]'); // 不会找出<div name="email">
//同样的，根据tag和class来组合查找也很常见：
//var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>

// 多项选择器
//多项选择器就是把多个选择器用,组合起来一块选：
//$('p,div'); // 把<p>和<div>都选出来
//$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来

// var selected = null;
// selected = $('#para-1');
// selected = $('.color-red.color-green');
// selected = $('.color-red');
// selected = $('[class^="color-"]');
// selected = $('input[name=name]');
// selected = $('input[name=name],input[name=email]');