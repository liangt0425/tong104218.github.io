$(function(){
	//加载头部尾部
	$('.header_wrap').load('header.html');
	$('.footer_wrap').load('footer.html');
	$('.tab ul li').hover(function(){
		var i = $('.tab ul li').index(this);
		$(this).find('img').attr('src','img/t' + i + '1.png');
		$(this).find('img').addClass('animated rubberBand');
	},function(){
		var i = $('.tab ul li').index(this);
		$(this).find('img').attr('src','img/t' + i + '0.png');
		$('.tab ul li').find('img').removeClass('animated rubberBand');
	});
	$('.welcome_list ul li').hover(function(){
		var i = $('.welcome_list ul li').index(this);
		$(this).find('img').addClass('animated jello');
	},function(){
		var i = $('.tab ul li').index(this);
		$('.welcome_list ul li').find('img').removeClass('animated jello');
	});
})