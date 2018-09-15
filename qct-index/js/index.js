// if (document.body.clientWidth <= 1000) {
// 	//判断屏幕大小  在移动端下
// 	require(['common',  'swiper'], function (c_fnc, swiper) {
//         // mb.init()
// 		// banner 响应
// 		function banner() {
// 			// $('#slideBox1').width($(window).width());
// 			// $('#slideBox1').height(970 * ($(window).width() / 750));
// 			var html =
// 				`<div class="swiper-slide">
//                     <img src=" ../images/sj_banner.jpg">
//                 </div>
//                 <div class="swiper-slide">
//                     <img src=" ../images/sj_banner.jpg ">
//                 </div>`;
// 			$('#slideBox1 .swiper-wrapper').html(html)
// 			var mySwiper = new Swiper('#slideBox1', {
// 				direction: 'horizontal',
// 				loop: true,
// 				// 如果需要分页器
// 				pagination: '#slideBox1 .swiper-pagination',
// 				autoplay: 4000
// 			})
// 			$('#slideBox1').height(mySwiper.height)
// 		}
// 		banner();
// 		$(window).on('resize', function () {
// 			banner();
// 		})
// 	})
// } else {
// 	require(['common', 'pc', 'superSlide'], function (c_fnc, pc, superSlide) {
// 		$(function () {
// 			pc.init()
// 			//首页轮播
// 			$(window).on('resize', function () {
// 				$("#slideBox").slide({
// 					mainCell: ".bd ul",
// 					effect: "fold",
// 					autoPlay: true,
// 					delayTime: 400,
// 					interTime: 4000
// 				});
// 			})
// 			$("#slideBox").slide({
// 				mainCell: ".bd ul",
// 				effect: "fold",
// 				autoPlay: true,
// 				delayTime: 500,
// 				interTime: 8000,
// 				mouseOverStop: false,
// 				startFun: function (i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell) {
// 					console.log(i)
// 					console.log(slider)
// 					$('#slideBox .bd ul li').eq(i).find('.bannerInfo').addClass('bannerBlock')
// 					$('#slideBox .bd ul li').eq(i).find('.leftBannerInfo').addClass('animated slideInLeft')
// 					$('#slideBox .bd ul li').eq(i).find('.rightBannerInfo').addClass('animated slideInDown')


// 				},
// 				endFun: function (i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell) {
// 					// $('#slideBox .bd ul li').eq(i).find('.leftBannerInfo').one(
// 					// 	'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
// 					// 	function () {
// 					// 		setTimeout(function () {
// 					// 			$('#slideBox .bd ul li').eq(i).find('.bannerInfo').removeClass('bannerBlock')
// 					// 			$('#slideBox .bd ul li').eq(i).find('.leftBannerInfo').removeClass('animated slideInLeft')
// 					// 			$('#slideBox .bd ul li').eq(i).find('.rightBannerInfo').removeClass('animated slideInDown')
// 					// 		}, 7000)
// 					// 	});

// 				}
// 			});
// 			$('.close-intrance').on('click', function () {
// 				$('.pc-intrance').hide()
// 			})
// 		})
// 	})
// }


require(['pc', 'superSlide','swiper'], function (pc, superSlide,swiper) {
	$(function () {
		pc.init()
		//首页轮播
		$(window).on('resize', function () {
            console.log('231214')
			$("#slideBox").slide({
				mainCell: ".bd ul",
				effect: "fold",
				autoPlay: true,
				delayTime: 400,
				interTime: 4000
			});
		})
		$("#slideBox").slide({
			mainCell: ".bd ul",
			effect: "fold",
			autoPlay: true,
			delayTime: 500,
			interTime: 8000,
			mouseOverStop: false,
			startFun: function (i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell) {
				console.log(i)
				console.log(slider)
				$('#slideBox .bd ul li').eq(i).find('.bannerInfo').addClass('bannerBlock')
				$('#slideBox .bd ul li').eq(i).find('.leftBannerInfo').addClass('animated slideInLeft')
				$('#slideBox .bd ul li').eq(i).find('.rightBannerInfo').addClass('animated slideInDown')


			},
			endFun: function (i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell) {
				// $('#slideBox .bd ul li').eq(i).find('.leftBannerInfo').one(
				// 	'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				// 	function () {
				// 		setTimeout(function () {
				// 			$('#slideBox .bd ul li').eq(i).find('.bannerInfo').removeClass('bannerBlock')
				// 			$('#slideBox .bd ul li').eq(i).find('.leftBannerInfo').removeClass('animated slideInLeft')
				// 			$('#slideBox .bd ul li').eq(i).find('.rightBannerInfo').removeClass('animated slideInDown')
				// 		}, 7000)
				// 	});

			}
		});
		$('.close-intrance').on('click', function () {
			$('.pc-intrance').hide()
		})


		// 移动端

		function banner() {
			// $('#slideBox1').width($(window).width());
			// $('#slideBox1').height(970 * ($(window).width() / 750));
			var html =
				`<div class="swiper-slide">
                    <img src=" ../images/sj_banner.jpg">
                </div>
                <div class="swiper-slide">
                    <img src=" ../images/sj_banner.jpg ">
                </div>`;
			$('#slideBox1 .swiper-wrapper').html(html)
			var mySwiper = new Swiper('#slideBox1', {
				direction: 'horizontal',
				loop: true,
				// 如果需要分页器
				pagination: '#slideBox1 .swiper-pagination',
				autoplay: 4000
			})
			$('#slideBox1').height(mySwiper.height)
		}
		banner();
		$(window).on('resize', function () {
			banner();
		})
	})
})
