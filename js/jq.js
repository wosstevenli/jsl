//var swift=$('#swift');
// console.log(swift);
// console.log(swift.parent());
//console.log(swift.parent('.kk'));
// var parent=swift.parent();
// var a=swift.parent('div.kk');
// console.log(a);

//var swift=$('#swift');
//console.log(swift.next());
//console.log(swift.prev());
// var nextsomething=swift.next('[name=haskell]');
// console.log(nextsomething);
//console.log(swift.next('.kas'));
//console.log(swift.prev('.js'));

//console.log($('#test-ul li[name=book]').text()); //获取文本
//console.log($('#test-ul li[name=book]').html()); //获取html

//无参数调用text()是获取文本，传入参数就变成设置文本，HTML也是类似
//console.log($('#test-ul li.js').html('<span style="color:green">Google</span>'));
//console.log($('#test-ul li.js').text('TWITTER'));
//console.log($('#test-ul li[name=book]').text('FACEBOOK'));
//console.log($('#test-ul li').text('FACEBOOK'));
//console.log($('#NOT').text('FACEBOOK')); //没有节点也不会报错

//$('#test-css li.dy').css('background-color','#3079ed').css('color','#FFF');
// var dx=$('#test-css li.dy');
// console.log(dx.css('color'));
// console.log(dx.css('color','#3079ed'));
// console.log(dx.css('color',''));

//var div = $('ul li.lang');
//var div = $('#test-css');
//console.log(div.hasClass('highlight')); // false， class是否包含highlight
//console.log(div.addClass('highlight')); // 添加highlight这个class
//div.removeClass('highlight'); // 删除highlight这个class
//console.log(div.removeClass('highlight'));

//attr()和removeAttr()方法用于操作DOM节点的属性：
//val()就统一了各种输入框的取值和赋值的问题


// var ul=$('#test-div>ul');
// ul.append('<li><span>GOOGLE</span></li>');

// var js=$('#test-div>ul>li:first-child');
// js.after('<li><span>GOOGLE</span></li>');
// js.before('<li><span>GOOGLE</span></li>');

// var js=$('#test-div>ul>li:last-child');
// js.after('<li><span>GOOGLE</span></li>');
// js.before('<li><span>GOOGLE</span></li>');

// var li=$('#test-div>ul>li');
// li.remove();

/*var dj=$('#dbc');
dj.dblclick(function(){
    console.log('花木兰');
});

dj.click(function(){
    console.log('唧唧复唧唧');
});

dj.mouseenter(function(){
    console.log('木兰当户织');
});

dj.mouseleave(function(){
    console.log('不闻机杼声');
});

dj.mousemove(function(){
    console.log('惟闻女叹息');
});

dj.hover(function(){
    console.log('这个要怎么显示呢！！！');
});

var jianpan=$('#jianpan')
jianpan.keydown(function(){
    console.log('知道不知道，鼠标点击下来了！');
});
jianpan.click(function(){
    console.log('快点来写点东西吧');
});
jianpan.keyup(function(){
    console.log('写完了吗？？？');
});
jianpan.keypress(function(){
    console.log('按一次键后，那多按几次呢？？？');
});
jianpan.focus(function(){
    console.log('获取焦点！');
});*/

// dj.focus(function(){ //貌似只有输入框之类的能获取焦点
//     console.log('获取焦点！');
// });

/*jianpan.blur(function(){
    console.log('丢了！！！！');
});

jianpan.change(function(){
    console.log('Exchange!');
});*/

/*function djj(){
    alert('FFFFFFFFFK');
}

jianpan.click(djj);
setTimeout(function(){
    jianpan.off('click',djj);
},3000);*/

// console.log(jianpan);

// var dh=$('#test-div');
// dh.hide(3000);
// dh.show(5000);

/*function dh(){
    var dh=$('#test-div');
    dh.toggle(3000);
}*/

/*function animatetest(){
    var dh=$('#animate');
    dh.slideToggle(3000);
}*/

//淡入淡出
/*function animatetest(){
    var dh=$('#animate');
    dh.fadeToggle(3000);
}*/

//自定义动画animate
/*function animatetest(){
    var dh=$('#animate');
    dh.animate({
        opacity:0.25,
        width:'500px',
        height:'400px'
    },3000);
}*/

/*function animatetest(){
    var dh=$('#animate');
    dh.animate({
        opacity:0.25,
        width:'500px',
        height:'400px'
    },3000,function(){
        console.log('动画已经结束！');
    });
}*/

/*function animatetest(){
    var dh=$('#animate');
    dh.slideDown(2000)
    .delay(1000)
    .animate({
        width: '256px',
       height: '256px'
   }, 2000)
   .delay(5000)
   .animate({
       width: '500px',
       height: '600px'
   },2000);
}*/

//AJAX
/*var jqajax=$.ajax('/api/categories',{
    dataType:'json'
});*/

/*var jqajax=$.get('/api/categories',{
    name:'STEVEN',
    check:1
});*/
//第二个参数如果是object，jQuery自动把它变成query string然后加到URL后面，实际的URL是：
//请求网址：http://127.0.0.1/api/categories?name=STEVEN&check=1 请求方式：get

/*var jqajax=$.post('/api/categories',{
    name:'STEVEN',
    check:2
});*/

/*var jqajax=$.getJSON('/api/categories',{
    name:'STEVEN',
    check:1
}).done(function(data){

});*/

//拓展jQuery

/*$.fn.highlight1=function(){
    this.css('backgroundColor','#fffceb').css('color','#d85030');
    return this;
}

$('#test-highlight1 span').highlight1();*/

/*$.fn.highlight2 = function (options) {
    // 要考虑到各种情况:
    // options为undefined
    // options只有部分key
    var bgcolor = options && options.backgroundColor || '#fffceb';
    var color = options && options.color || '#d85030';
    this.css('backgroundColor', bgcolor).css('color', color);
    return this;
}

$('#test-highlight2 span').highlight2({
    backgroundColor: '#00a8e6',
    color: '#ffffff'
});*/

/*$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}

// 设定默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}
$.fn.highlight.defaults.color = '#fff';
$.fn.highlight.defaults.backgroundColor = '#000';

$.fn.highlight.defaults.color = '#659f13';
$.fn.highlight.defaults.backgroundColor = '#f2fae3';

$('#test-highlight p:first-child span').highlight();

$('#test-highlight p:last-child span').highlight({
    color: '#dd1144'
});*/

/*我们得出编写一个jQuery插件的原则：
给$.fn绑定函数，实现插件的代码逻辑；
插件函数最后要return this;以支持链式调用；
插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
用户在调用时可传入设定值以便覆盖默认值。*/

/*var r1,r2,s=null;
try{
    r1=s.length;
    r2=100;
}
catch(e){
    console.log('ERROR:'+e);
}
finally{
    console.log('finally');
}
console.log('r1='+r1);
console.log('r2='+r2);*/

/*var r1,r2,s='null';
try{
    r1=s.length;
    r2=100;
}
catch(e){  //变量e表示捕获到的错误
    console.log('ERROR:'+e);
}
finally{
    console.log('success');
}
console.log('r1='+r1);
console.log('r2='+r2);*/

/*var r,n,s;
try{
    s=prompt('请输入一个数字','5');
    n=parseInt(s);
    if(isNaN(n)){
        throw new Error('输入错误@@@@@@！！！！');
    }
    r=n*n;
    alert(n+'*'+n+'='+r);
}
catch(e){
    alert('Error：'+e);
}
finally{
    alert('SUCCESS');
}*/

/*var n=0,s;
try {
    n=s.length;
}
catch(e){
    console.log(e);
}
console.log(n);*/

/*var n=0,s;
try {
    n=s.length;
}
catch(e){
    //catch捕获错误时，一定要编写错误处理语句,哪怕仅仅把错误打印出来，也不要什么也不干
    //因为catch到错误却什么都不执行，就不知道程序执行过程中到底有没有发生错误
}
console.log(n);*/

/*function getLength(s) {  
    return s.length;
}*/

/*
    function getLength()函数带参数s，及s作为参数到
    getlength(){
        s.length
    }运算
    getLength('abc')其中函数getlength(s)的参数s='abc'
*/

/*function getLength(s) {
    return s.length;
}

function printLength() {
    console.log(getLength('abc')); // 3
    console.log(getLength(null)); // Error!
}

printLength();*/

/*function printTime(){
    console.log('It is time!!!!!');
}
setTimeout(printTime,1000);
console.log('wonderful!');*/

/*var a1=[1,4,9,46];
var a2=a1.map(Math.sqrt);//开平方
var a3=a2.filter((x)=>{return x%2===0;});
console.log(a1);
console.log(a2);
console.log(a3);*/

/*var obj={
    name:'bob',
    school:'一师是个好学校',
    address:'guizhidao'
};
var upper=_.map(obj,function(value,key){
    return Math.sqrt;
});*/

/*console.log(_.every([1, 4, 7, -3, -9], (x) => x > 0));
console.log(_.some([1, 4, 7, -3, -9], (x) => x > 0));*/

/*var arr=[3,5,7,9];
console.log(_.max(arr));
console.log(_.min(arr));*/

/*console.log(_.max([]));//空集合返回-Infinity
console.log(_.min([]));//空集合返回Infinity*/

//console.log(_.max({a:1,b:2,c:3}));

/*var scores=[20,30,40,50,60,70,80,90];
var groups=_.groupBy(scores,function(x){
    if(x<60){
        return 'C';
    }
    else if(x<80){
        return 'B';
    }
    else{
        return 'A'
    }
});
console.log(groups);*/

//console.log(_.shuffle([1, 2, 3, 4, 5, 6]));//洗牌算法随机打乱一个集合

/*console.log(_.sample([1,2,3,4,5,6])); //随机选择一个或多个元素
console.log(_.sample([1,2,3,4,5,6],2));*/

