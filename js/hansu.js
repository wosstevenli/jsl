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

