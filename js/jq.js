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

var dj=$('#dbc');
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
});
// dj.focus(function(){ //貌似只有输入框之类的能获取焦点
//     console.log('获取焦点！');
// });

jianpan.blur(function(){
    console.log('丢了！！！！');
});

jianpan.change(function(){
    console.log('Exchange!');
});

/*function djj(){
    alert('FFFFFFFFFK');
}

jianpan.click(djj);
setTimeout(function(){
    jianpan.off('click',djj);
},3000);*/

console.log(jianpan);

