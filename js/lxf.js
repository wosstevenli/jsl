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
    xiaoming.mother='Angelar';
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

    var age=17;
    if(age>=18){
        console.log('成年人，可以观看！！！！')
    }
    else{
        if(age>=12){
            console.log('初中生')
        }
        else{
            console.log('小学生')
        }
    }

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