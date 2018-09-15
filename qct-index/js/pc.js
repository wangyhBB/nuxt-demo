define([
    'common', 
    'template',
	// 'text!../html/m-header.html',
	'text!../html/m-footer.html',
], function (c_fnc, template, footer) {
	var init = function () {
		//导航hover 
		var navIndex; //hover选中的位置
		$('.nav-items a').hover(function () {
			navIndex = $(this).index();
			var $items = $('.leftItems').eq(navIndex);
			if ($items.length) {
				$('.pc-lines').addClass('show');
				$('.leftItems').eq(navIndex).siblings().removeClass('block animated bounceInRight');
				$('.leftItems').eq(navIndex).addClass('block animated bounceInRight')
			} else {
				$('.pc-lines').removeClass('show');
			}
		})
		$('.lines-wrapper').hover(function () {
			$('.pc-lines').addClass('show');
		}, function () {
			$('.pc-lines').removeClass('show');
			$('.leftItems').eq(navIndex).removeClass('block animated bounceInRight')
		});
		//登入hover
		$('.nav-login').hover(function () {
			$('.login-state').slideDown();
			$('.shopMask').show()
		}, function () {
			$('.login-state').stop(true, false).slideUp();
			$('.shopMask').hide()
		});
		$('.nav-login').on('click', function () {
			window.location.href = 'accountCenter.html';
		})
		$(window).on('scroll', function () {
			var top = $(this).scrollTop();
			if (top >= 100) {
				$('.helpBox-item.arrow-top').css('display', 'block')
			} else {
				$('.helpBox-item.arrow-top').css('display', 'none')
			}
		});
		$('.helpBox-item.arrow-top').on('click', function () {
			$(window).scrollTop(0);
		})
        // $('#login').text(123)
        

        // var render = template.compile(header)
        // var html = render();
        var render1 = template.compile(footer);
        var html1  = render1();
		// $('.app').append(html)
		$('.app').append(html1)


		// 移动端的
		$('.nav-login-logo').on('click', function () {
			$('.nav-bar-list').stop(true, false).toggleClass('ani-list');
			$('#gb-mask-layer').toggleClass('showMask');
			$('body').toggleClass('limit-content')
			if (!$('.nav-bar-list').hasClass('ani-list')) {
				$('.nav-more').each(function () {
					$(this).slideUp(500)
				})
				$('.nav-item.nav-item-arrow').removeClass('arrow-up')
				$('.nav-bar-list').off('touchmove')
			} else {
				$('.nav-bar-list').on('touchmove', function (e) {
					e.preventDefault()
				})
			}
		})
		$('.nav-item.nav-item-arrow span').on('click', function () {
			$(this).siblings('.nav-more').stop(true, false).slideToggle(500)
			$(this).parent().toggleClass('arrow-up')
			$(this).parent().siblings('.nav-item.nav-item-arrow').removeClass('arrow-up')
			$(this).parent().siblings('.nav-item.nav-item-arrow').children('.nav-more').slideUp()
		})
		$('#gb-mask-layer').on('touchstart', function () {
			$('.nav-more').each(function () {
				$(this).slideUp(500)
			})
			$('body').removeClass('limit-content')
			$('.nav-item.nav-item-arrow').removeClass('arrow-up')
			$('#gb-mask-layer').toggleClass('showMask');
			$('.nav-bar-list').stop(true, false).toggleClass('ani-list');
		})
		$('.nav-more .nav-more-item').on('click', function () {
			var href = $(this).attr('href');
			console.log(href)
			window.location.href = href;
		})
		c_fnc.verifyCode(); //验证码
	}
	return {
		init: init
	}
})
