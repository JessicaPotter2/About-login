$(function() {
 
    setTimeout(function() { 
     $('.container').addClass('loaded');
    }, 500)
 
 
  	$('.bg-img').backstretch([
        'img/bg-l1.jpg',
        'img/bg-l2.jpg'
    ], {
        fade : 750, // 动画时长
        duration : 4000, // 切换延时
});
  
})
