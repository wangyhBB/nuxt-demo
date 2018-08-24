if (document.body.clientWidth <= 1000) {
	//判断屏幕大小  在移动端下
	require([
		'common',
		'mobile',
		'template',
		'text!../html/tpl/aboutUs-intro.html',
		'text!../html/tpl/aboutUs-culture.html',
		'text!../html/tpl/aboutUs-map.html',
		'text!../html/tpl/aboutUs-tree.html',
	], function (c_fnc, mb, template, intro, culture, map, tree) {
		setTimeout(function () {
			mb.init()
		}, 50); //50秒延迟初始化
		var index = c_fnc.getQueryString('index');
		if (index == 0) {
			var render = template.compile(intro)
			var html = render();
			$('.mb-content').html(html)
		}
		if (index == 1) {
			var render = template.compile(culture)
			var html = render();
			$('.mb-content').html(html)
		}
		if (index == 2) {
			var render = template.compile(map)
			var html = render();
			$('.mb-content').html(html)
			var map2 = new BMap.Map("m-mpa1");
			var point2 = new BMap.Point(121.606836, 31.218891);
			// 添加带有定位的导航控件
			var navigationControl2 = new BMap.NavigationControl({
				// 靠左上角位置
				anchor: BMAP_ANCHOR_TOP_LEFT,
				// LARGE类型
				type: BMAP_NAVIGATION_CONTROL_LARGE,
				// 启用显示定位
				enableGeolocation: true
			});
			map2.addControl(navigationControl2);
			map2.centerAndZoom(point2, 15);
			var marker2 = new BMap.Marker(point2); // 创建标注
			map2.addOverlay(marker2); // 将标注添加到地图中
			// 上海即富信息技术服务有限公司
			var label2 = new BMap.Label("上海即富信息技术服务有限公司", {
				offset: new BMap.Size(20, -10)
			});
			marker2.setLabel(label2);

			var map = new BMap.Map("m-mpa2");
			var point = new BMap.Point(118.62687, 24.914398);
			// 添加带有定位的导航控件
			var navigationControl = new BMap.NavigationControl({
				// 靠左上角位置
				anchor: BMAP_ANCHOR_TOP_LEFT,
				// LARGE类型
				type: BMAP_NAVIGATION_CONTROL_LARGE,
				// 启用显示定位
				enableGeolocation: true
			});
			map.addControl(navigationControl);
			map.centerAndZoom(point, 15);
			var marker = new BMap.Marker(point); // 创建标注
			map.addOverlay(marker); // 将标注添加到地图中
			// 上海即富信息技术服务有限公司
			var label = new BMap.Label("福建即富大厦", {
				offset: new BMap.Size(20, -10),
				color: "rgb(255, 0, 0)",
			});
			marker.setLabel(label);

		}
		if (index == 3) {
			var render = template.compile(tree)
			var html = render();
			$('.mb-content').html(html)
		}
	})
} else {
	require(['common', 'pc', 'superSlide'], function (c_fnc, pc, superSlide) {
		$(function () {
			pc.init()

			$(".picScroll-left").slide({
				titCell: ".hd ul",
				mainCell: ".bd ul",
				autoPage: true,
				effect: "left",
				autoPlay: true,
				vis: 4

			});
			$('.picList li').on('click', function () {
				var src = $(this).find('img').attr('src');
                var index = $(this).index();
                var firstSrc = $('.about-picture-wrapper a').eq(0).attr('href');
				$('.about-picture-wrapper img').attr('src', src);
				$('.about-picture-wrapper a').eq(0).attr('href', src);
				$('.about-picture-wrapper a').eq(index).attr('href', firstSrc);
			})
			$('.nav-items a').eq(2).css('color', '#f8404b');
			$('.about-list-item').on('click', function () {
				$('.about-infoItem').eq($(this).index() - 1).addClass('infoShow').siblings().removeClass('infoShow')
				$(this).addClass('aboutActive').siblings().removeClass('aboutActive')
				var stateName = $(this).attr('data-state');
				var href = window.location.href;
				// tab切换实现  返回当初的tab显示效果 前提浏览器支持h5
				if (href.indexOf('#') > -1) {
					history.pushState(stateName, '', href.split('#')[0] + '#' + stateName)
				} else {
					history.pushState(stateName, '', href + '#' + stateName)
				}
				if ($(this).index() == 3) {
					// 百度地图API功能
					var map = new BMap.Map("map1");
					var point = new BMap.Point(118.62687, 24.914398);
					// 添加带有定位的导航控件
					var navigationControl = new BMap.NavigationControl({
						// 靠左上角位置
						anchor: BMAP_ANCHOR_TOP_LEFT,
						// LARGE类型
						type: BMAP_NAVIGATION_CONTROL_LARGE,
						// 启用显示定位
						enableGeolocation: true
					});
					map.addControl(navigationControl);
					map.centerAndZoom(point, 15);
					var marker = new BMap.Marker(point); // 创建标注
					map.addOverlay(marker); // 将标注添加到地图中
					// 上海即富信息技术服务有限公司
					var label = new BMap.Label("福建即富大厦", {
						offset: new BMap.Size(20, -10),
						color: "rgb(255, 0, 0)",
					});
					marker.setLabel(label);

					var map2 = new BMap.Map("map2");
					var point2 = new BMap.Point(121.606836, 31.218891);
					// 添加带有定位的导航控件
					var navigationControl2 = new BMap.NavigationControl({
						// 靠左上角位置
						anchor: BMAP_ANCHOR_TOP_LEFT,
						// LARGE类型
						type: BMAP_NAVIGATION_CONTROL_LARGE,
						// 启用显示定位
						enableGeolocation: true
					});
					map2.addControl(navigationControl2);
					map2.centerAndZoom(point2, 15);
					var marker2 = new BMap.Marker(point2); // 创建标注
					map2.addOverlay(marker2); // 将标注添加到地图中
					// 上海即富信息技术服务有限公司
					var label2 = new BMap.Label("上海即富信息技术服务有限公司", {
						offset: new BMap.Size(20, -10)
					});
					marker2.setLabel(label2);

				}
			})
			$(window).on('popstate', function () {
				var index = window.history.state;
				$('.about-list-item').eq(index).addClass('aboutActive').siblings().removeClass('aboutActive')
				$('.about-infoItem').eq(index).addClass('infoShow').siblings().removeClass('infoShow')
			})
			// aboutUs-item
			$(window).on('scroll', function () {
				var oTop = ($('.aboutUs-item').offset().top)
                var scrollT = $(this).scrollTop()
                this.console.log(oTop)
                this.console.log(scrollT)
				if (scrollT >= oTop) {
					$('.about-left').addClass('fixedContent')
				} else {
					$('.about-left').removeClass('fixedContent')
				}
			})
			$('.swipebox').swipebox();
		})
	})
}
