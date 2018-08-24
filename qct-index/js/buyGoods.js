if (document.body.clientWidth <= 1000) {
	//判断屏幕大小  在移动端下
	require(['jquery', 'common', 'mobile'], function ($, c_fnc) {

	})
} else {
	require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
		$(function () {
			pc.init()
			$(window).on('scroll', function () {
				if ($(window).scrollTop() >= 40) {
					$('.buyGoods-navBar').css('position', 'fixed');
				} else {
					$('.buyGoods-navBar').css('position', 'relative');
				}
			});
			$('#goToCart').on('click', function () {
				window.location.href = 'shoppingCart.html'
			})
			var length = $('.goodsAnimate a').length;
			var orignNumber = 4; //默认为四个
			var w = ($('.goodsAnimate a')[0].offsetWidth); //每个容器的width
			$('.goodsAnimate').width((w + 10) * length);
			$('.goodsAnimate a').hover(function () {
				var bigUrl = $(this).attr('data-big');
				$('.goodsTop img').attr('src', bigUrl);
				$(this).addClass('showView').siblings().removeClass('showView')
			})
			var start_left = $('.goodsAnimate').position().left; //初始位置
			// alert(start_left)
			if (length > 4) {
				var max_left = (length - orignNumber) * (w + 10); //算出做大位移量
				console.log(max_left)
			}
			$('.leftViewBtn').on('click', function () {
				start_left += w + 10;
				console.log(start_left)
				if (length > 4) {
					if (Math.abs(start_left) <= max_left) {
						$('.goodsAnimate').animate({
							'left': -start_left + 'px'
						})
					} else {
						start_left = max_left;
					}
				}
			})
			$('.rightViewBtn').on('click', function () {
				start_left -= (w + 10);
				console.log(start_left)
				if (start_left >= 0) {
					$('.goodsAnimate').animate({
						'left': start_left + 'px'
					})
				} else {
					start_left = 0
				}
			})
			$('.goodsView-addCart').on('click', function () {
				window.location.href = 'addCart.html'
			})
			$('.goodsView-buy').on('click', function () {
				window.location.href = 'confirmOrder.html'
			})
		})
	})
}
