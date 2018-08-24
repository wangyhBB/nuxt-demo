define([
	'common',
	'template',
	'text!../html/m-header.html',
], function (c_fnc, template, header) {
	var init = function () {
		console.log('app')
		var render = template.compile(header)
		var html = render();
		$('.app').append(html)
		// var html = `<div class="pc-navbar-wrapper">
		// 				<div class="pc-navbar">
		// 					<a class="nav-img nav-img-common" href="index.html">
		// 						<img src="../images/login-logo.png">
		// 					</a>
		// 					<div class="nav-login">
		// 			            <!-- <img src="../images/account.png"> -->
		// 			            个人中心
		// 			            <div class="login-state">
		// 			                <a class="login-items login-items-01" href="shoppingCart.html">
		// 			                    <!-- <img src="../images/cart.png"> -->
		// 			                    <span>购物车</span>
		// 			                </a>
		// 			                <a class="login-items login-items-02" href="myOrders.html">
		// 			                    <!-- <img src="../images/order.png"> -->
		// 			                    <span>我的订单</span>
		// 			                </a>
		// 			                <!-- <a href="login.html" class="login-items login-items-03">
		// 			                    <img src="../images/my-account.png">
		// 			                    <span id="login">登入/注册</span>
		// 			                </a> -->
		// 			            </div>
		// 			        </div>
		// 			        <div class="nav-items">
		// 						<a href="intelligent-erp.html">智能ERP</a>
		// 						<a href="#">智能硬件</a>
		// 						<a href="aboutUs.html">关于我们</a>
		// 						<a href="newsReport.html?index=0&type=0">公司动态</a>
		// 						<a href="joinUs.html">加入我们</a>
		// 					</div>
		// 				</div>  
		// 				<div class="pc-lines">
		// 					<div class="lines-wrapper">
		// 			            <div class="lines-item">
		// 			                <div class="leftItems">
		// 			                </div>
		// 			                <div class="leftItems machine">
		// 			                    <a class="">
		// 			                        <img src="../images/machine-ionc-01.png" alt="">
		// 			                        <p>智能pos</p>
		// 			                    </a>
		// 			                    <a class="">
		// 			                        <img src="../images/machine-ionc-02.png" alt="">
		// 			                        <p>MINI 移动支付终端</p>
		// 			                    </a>
		// 			                    <a class="">
		// 			                        <img src="../images/machine-ionc-03.png" alt="">
		// 			                        <p>台式扫码支付终端</p>
		// 			                    </a>
		// 			                    <a class="">
		// 			                        <img src="../images/machine-ionc-04.png" alt="">
		// 			                        <p>pc收银一体机</p>
		// 			                    </a>
		// 			                    <a class="">
		// 			                        <img src="../images/machine-ionc-05.png" alt="">
		// 			                        <p>智能扫码棒</p>
		// 			                    </a>
		// 			                </div>
		// 			            </div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class="shopMask">
		// 			</div>`;
		// $('.app').append(html)
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
