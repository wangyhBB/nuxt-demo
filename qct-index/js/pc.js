define(['common'], function (c_fnc) {
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
        $('.nav-login').on('click',function(){
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
        c_fnc.verifyCode();//验证码
	}
	return {
		init: init
	}
})
