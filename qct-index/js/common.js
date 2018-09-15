define(['jquery'], function ($) {
	var getQueryString = function getQueryString(name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return null;
	}
	var verifyCode = function () {
		var defaluts = {
			seconds: 60,
			text: '获取验证码'
		};
		$.fn.extend({
			"verifyCodeN": function (options) {
				var ops = $.extend({}, defaluts, options);
				var timer;
				return this.each(function () { //这里的this 就是 jQuery对象。这里return 为了支持链式调用
					//遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
					var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
					//根据参数来设置 dom的样式
					var sendState = $this.attr('data-send');
					if (sendState == 1) {
						$this.attr('data-send', 0)
						timer = setInterval(function () {
							ops.seconds--;
							if (ops.seconds == 0) {
								$this.text(ops.text)
								ops.seconds = 60;
								$this.attr('data-send', 1)
								clearInterval(timer)
							} else {
								$this.text('重新获取(' + ops.seconds + ')' + 's')
							}
						}, 1000)
					}
				});
			}
		})
	}
	var dynamicLoadJs = function dynamicLoadJs(url, callback) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		var version = +new Date();
		script.src = url + '?v=' + version;
		if (typeof (callback) == 'function') {
			script.onload = script.onreadystatechange = function () {
				if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
					callback();
					script.onload = script.onreadystatechange = null;
				}
			};
		}
		head.appendChild(script);
	}
	var dynamicLoadCss = function dynamicLoadCss(url) {
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = url;
		head.appendChild(link);
	}
	var keepTwoDecimalFull = function keepTwoDecimalFull(num) {
		var result = parseFloat(num);
		if (isNaN(result)) {
			alert('传递参数错误，请检查！');
			return false;
		}
		result = Math.round(num * 100) / 100;
		var s_x = result.toString();
		var pos_decimal = s_x.indexOf('.');
		if (pos_decimal < 0) {
			pos_decimal = s_x.length;
			s_x += '.';
		}
		while (s_x.length <= pos_decimal + 2) {
			s_x += '0';
		}
		return s_x;
	}
	// 提醒发货提示框
	// var tipsMark = function (_this, top, left, title, timer) {
	// 	var html = `
	//         <div class="prentClick" 
	//             style="position:fixed;
	//             top:0;
	//             left:0;
	//             right:0;
	//             bottom:0;
	//             z-index:10000000;
	//             "
	//         ></div>
	//         <div class="tipsMask" 
	//             style="position: absolute;
	//             display:none;
	//             width: 122px;
	//             height: 38px;
	//             background:rgba(0,0,0,0.8);
	//             border-radius: 3px;
	//             line-height: 38px;
	//             text-align: center;
	//             color:#fff;"
	//         >${title}
	//             <div class="triangle"
	//                 style="
	//                 position: absolute;
	//                 width:12px;
	//                 height:8px;
	//                 background:url('../images/arrow-black.png') 0 0 no-repeat;
	//                 background-size: cover;
	//                 bottom:-8px;
	//                 right: 50%;
	//                 margin-right:-6px;
	//                 "
	//             ></div>
	//         </div>
	//     `
	// 	$(_this).attr('data-state', 0);
	// 	$('body').append(html);
	// 	$('.tipsMask').css('top', top - 60)
	// 	$('.tipsMask').css('left', left - 20)
	// 	$('.tipsMask').fadeIn(timer);
	// 	var timer1 = setTimeout(function () {
	// 		$('.prentClick').remove()
	// 		$('.tipsMask').fadeOut(timer, function () {
	// 			$('.tipsMask').remove()
	// 			$(_this).attr('data-state', 1);
	// 			clearInterval(timer1)
	// 		});
	// 	}, timer)

	// }
	// // 确认收货提示框
	// var confirmMark = function (_this, top, left, title, timer) {
	// 	$('.confimContent').remove();
	// 	var html = `
	//         <div class="confimContent"
	//             style="display:block;
	//             position: absolute;
	//             width: 238px;
	//             height: 98px;
	//             border-radius: 3px;
	//             border:1px solid #e5e5e5;
	//             line-height: 38px;
	//             ">

	//             <p style="
	//                 text-align:center;
	//                 font-size: 14px;
	//                 color: #333333;
	//             ">
	//             ${title}</p>
	//             <div style="width: 172px;height: 30px;margin:10px auto 0;">
	//                 <div 
	//                     style="float:left;
	//                     width: 72px;
	//                     height: 30px;
	//                     font-size: 14px;
	//                     line-height:30px;
	//                     background-color: #f8404b;
	//                     border-radius: 3px;
	//                     text-align:center;
	//                     color:#fff;
	//                 ">确认</div>
	//                 <div 
	//                     style="float:right;
	//                     width: 70px;
	//                     height: 28px;
	//                     font-size: 14px;
	//                     line-height:30px;
	//                     border: solid 1px #e5e5e5;
	//                     border-radius: 3px;
	//                     text-align:center;
	//                     color: #999999;
	//                 " class="confirmCancel"> 取消</div>
	//             </div>
	//             <div class="triangle"
	//                 style="
	//                 position: absolute;
	//                 width:17px;
	//                 height:9px;
	//                 background:url('../images/arrow-white.png') 0 0 no-repeat;
	//                 background-size: cover;
	//                 bottom:-9px;
	//                 right: 50px;
	//                 "
	//             ></div>
	//         </div>`;
	// 	$('body').append(html);
	// 	$('.confimContent').css('top', top - 118);
	// 	$('.confimContent').css('left', left - 136);
	// 	$('.confirmCancel').on('click', function () {
	// 		$('.confimContent').remove();
	// 	})
	// }
	// 订单倒计时
	var cutDowm = function (times) {
		var timer = null;
		timer = setInterval(function () {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; //时间默认值
			if (times > 0) {
				day = Math.floor(times / (60 * 60 * 24));
				hour = Math.floor(times / (60 * 60)) - (day * 24);
				minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (day <= 9) day = '0' + day;
			if (hour <= 9) hour = '0' + hour;
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			//
			console.log(hour + "小时：" + minute + "分钟：" + second + "秒");
			times--;
		}, 1000);
		if (times <= 0) {
			clearInterval(timer);
		}
	}
	var shareTo = function (stype) {
		var ftit = '';
		var flink = '';
		var lk = '';
		//获取文章标题
		ftit = $('.detail-right-header').text();
		//获取网页中内容的第一张图片
		flink = $('.detail-right-html img').eq(0).attr('src');
		if (typeof flink == 'undefined') {
			flink = '';
		}
		//当内容中没有图片时，设置分享图片为网站logo
		if (flink == '') {
			lk = 'http://' + window.location.host + '/images/newLogo.png';
		}
		//如果是上传的图片则进行绝对路径拼接
		if (flink.indexOf('/uploads/') != -1) {
			lk = 'http://' + window.location.host + flink;
		}
		//百度编辑器自带图片获取
		if (flink.indexOf('ueditor') != -1) {
			lk = flink;
		}
		//qq空间接口的传参
		if (stype == 'qzone') {
			window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + document.location.href + '?sharesource=qzone&title=' + ftit + '&pics=' + lk + '&summary=' + document.querySelector('meta[name="Description"]').getAttribute('content'));
		}
		//新浪微博接口的传参
		if (stype == 'sina') {
			window.open('http://service.weibo.com/share/share.php?url=' + document.location.href + '?sharesource=weibo&title=' + ftit + '&pic=' + lk + '&appkey=2706825840');
		}
		// //qq好友接口的传参
		// if (stype == 'qq') {
		// 	window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + document.location.href + '?sharesource=qzone&title=' + ftit + '&pics=' + lk + '&summary=' + document.querySelector('meta[name="description"]').getAttribute('content') + '&desc=php自学网，一个web开发交流的网站');
		// }
		//生成二维码给微信扫描分享
		if (stype == 'wechat') {
			window.open('http://bshare.optimix.asia/barCode?site=weixin&url=' + window.location.href)
		}
	}
	return {
		getQueryString: getQueryString,
		verifyCode: verifyCode,
		dynamicLoadJs: dynamicLoadJs,
		dynamicLoadCss: dynamicLoadCss,
		// tipsMark: tipsMark,
		// confirmMark: confirmMark,
		cutDowm: cutDowm,
        shareTo: shareTo,
        keepTwoDecimalFull:keepTwoDecimalFull
	}
})
