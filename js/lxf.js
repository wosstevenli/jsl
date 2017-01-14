// 廖雪峰2017js教程
window.onload=function(){
    var tongxue=['小明', '小红', '大军', '阿黄'];
	console.log('欢迎'+tongxue[0]+','+tongxue[1]+','+tongxue[2]+'和'+tongxue[3]+'同学！');

    var xiaoming={
        name:'HuangXiaoMing',
        age:35,
        height:160,
        weight:75
    };
    xiaoming.mother='Angelar123';
    delete xiaoming.age; //删除对象中的age属性
    //console.log('age' in xiaoming);  //检测是否拥有某一属性
    //console.log('toString' in xiaoming);  //检测是否拥有某一属性
    //console.log(xiaoming.hasOwnProperty('age'));  //避免继承得到属性的可能性
    //console.log(xiaoming.hasOwnProperty('toString')); 
    console.log(xiaoming.age+xiaoming.name+xiaoming.mother);

    //判断语句
    // var age=17;
    // if(age>=18){
    //     console.log('成年人，可以观看！！！！')
    // }
    // else{
    //     console.log('还小，你看不懂的！！！！')
    //     alert('十年之后就成了老师及');
    // }

    // var age=17;  //两层if else
    // if(age>=18){
    //     console.log('成年人，可以观看！！！！')
    // }
    // else{
    //     if(age>=12){
    //         console.log('初中生')
    //     }
    //     else{
    //         console.log('小学生')
    //     }
    // }

    // var age=11;
    // if(age>=18){
    //     console.log('成年人，可以观看！！！！')
    // }
    // else if(age>=12){
    //         console.log('初中生')
    //     }
    //     else{
    //         console.log('小学生')
    //     }

    //健康指数
    // var bmi=26.3;
    // if(bmi<18.5){
    //     console.log("过轻！")
    // }
    // else if(bmi>=18.5||bmi<25){
    //     console.log("正常！")
    // }
    // else if(bmi>=25||bmi<28){
    //     console.log("过重！")
    // }
    // else if(bmi>=28||bmi<32){
    //     console.log("肥胖！")
    // }
    // else if(bmi>=32){
    //     console.log("严重肥胖！")
    // }

    //健康指数 #2
    // var bmi=26.3;
    // if(bmi<18.5){
    //     console.log("过轻！")
    // }
    // else{
    //     if(bmi>=18.5||bmi<25){
    //     console.log("正常！")
    // }
    //     else{
    //         if(bmi>=25||bmi<28){
    //         console.log("过重！")
    //     }
    //         else{
    //             if(bmi>=28||bmi<32){
    //             console.log("肥胖！")
    //         }
    //             else{   
    //                 if(bmi>=32){
    //                 console.log("严重肥胖！")
    //             }
    //             } 
    //         }
    //     } 

    // } 

    //循环
    // var x=0;
    // var i;
    // for(i=1;i<=5;i++){
    //     x+=i;
    // }
    // console.log(x);

    // var x=1;  //乘法，初始值为1
    // var i;
    // for(i=1;i<=10;i++){
    //     x=x*i;
    // }
    // console.log(x);
    
    // var arr=['Apple','Microsoft','Google'];
    // var i,x;
    // for(i=0;i<arr.length;i++){
    //     x=arr[i];
    //     console.log(x);
    // }
    // console.log(x);  //放在for外面则输出最后一次x

    // var x=0;
    // for(;;){
    //     if(x>100){
    //         break;
    //     }
    //     x++;
    //     console.log(x);
    // }
    
    // var people={
    //     name:'STEVEN',
    //     age:28,
    //     city:'HongKong'
    // };
    // // for(var key in people){  //key为声明的变量
    //     for(var value in people){
    //     console.log(value);
    // }

    // var people={
    //     name:'STEVEN',
    //     age:28,
    //     city:'HongKong'
    // };
    // var x;  //声明变量x
    // for(x in people){
    // console.log(people[x]); //输出对象属性值
    // }

    // var a=['a','b','c'];
    // for(var y in a){
    //     console.log(y);
    //     console.log(typeof y);  //sting格式
    //     console.log(a[y]);
    // }

    // var m= new Map([["张山",60],["历史",80],["华硕",90]]);
    // console.log(m.get('华硕'));

    // var s = new Set([1, 2, 5, 6, '3']);
    // s.add(3);
    // s.add('1');
    // s.add('j');
    // s.delete(3);
    // console.log(s)

    // var a = ['A', 'B', 'C'];
    // var s = new Set(['A', 'B', 'C']);
    // var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    // // for (var x of a) { // 遍历Array
    // //     alert(x);
    // // }
    // // for (var x of s) { // 遍历Set
    // //     alert(x);
    // // }
    // for (var x of m) { // 遍历Map
    //     console.log(x[0] + '=' + x[1]);
    // }

    // var a = ['A','B','V'];
    // a.forEach(function(element,index,array){
    //     console.log(element);
    //     console.log(index);
    //     console.log(array)
    // })

    // var s = new Set(['A', 'B', 'C']);
    // s.forEach(function (element, sameElement, set) {
    //     console.log(element);
    //     console.log(sameElement);
    //     console.log(set)
    // });

    var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    m.forEach(function (value, key, map) {
        console.log(value);
        console.log(key);
        console.log(map)
    });

}

// window.onload=function(){
//     var xiaoming={
//         name:'HuangXiaoMing',
//         age:35,
//         height:160,
//         weight:75
//     };
//     console.log(xiaoming.age+xiaoming.name);
// }