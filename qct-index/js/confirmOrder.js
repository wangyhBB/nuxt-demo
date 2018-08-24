if (document.body.clientWidth <= 1000) {
	//判断屏幕大小  在移动端下
	require(['jquery', 'common', 'mobile'], function ($, c_fnc) {

	})
} else {
	require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
		$(function () {
			pc.init()
			// 选择地址
			$('.selectAddressItem').on('click', function (e) {
				e.stopPropagation();
				$(this).addClass('selectDefault').siblings().removeClass('selectDefault')
			});
			// 设置默认
			$('.address-default').on('click', function (e) {
				e.stopPropagation();
				alert('已设置城默认')
				$(this).text('默认地址')
			})
			// 点击出现优惠券
			$('.discount-input span').on('click', function () {
				$('.discount-chose').fadeIn(200);
			})
			// 关掉优惠券
			$('.closeDiscount').on('click', function () {
				$('.discount-chose').fadeOut(200);
			})
			// 地址选择
			$.each(cityJson, function (i, val) {
				if (val.item_code.substr(2, 4) == '0000') {
					$("#province").append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
				}
			});
			// 三级联动
			$('#province').change(function () {
				var city = $("#citys");
				var county = $("#county");
				if (city.children().length >= 1) {
					city.empty();
				}
				if (county.children().length >= 1) {
					county.empty();
				}
				if ($("#chooseCity").length === 0) {
					city.append("<option id='chooseCity' value='-1'>请选择城市</option>");
				}
				if ($("#chooseCounty").length === 0) {
					county.append("<option id='chooseCounty' value='-1'>请选择区/县</option>");
				}
				$.each(cityJson, function (i, val) {
					if (val.item_code.substr(0, 2) == $("#province").val().substr(0, 2) && val.item_code.substr(2, 4) != '0000' && val.item_code.substr(4, 2) == '00') {
						$('#citys').append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
					}
				});
				$('#citys').change(function () {
					var cityVal = $("#citys").val();
					var county = $("#county");
					if (county.children().length >= 1) {
						county.empty();
					}
					if ($("#chooseCounty").length === 0) {
						county.append("<option id='chooseCounty' value='-1'>请选择您所在区/县</option>");
					}
					$.each(cityJson, function (i, val) {
						if (cityVal == '110100' || cityVal == "120100" || cityVal == "310100" || cityVal == "500100") {
							if (val.item_code.substr(0, 3) == cityVal.substr(0, 3) && val.item_code.substr(4, 2) != '00') {
								county.append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
							}
						} else {
							if (val.item_code.substr(0, 4) == cityVal.substr(0, 4) && val.item_code.substr(4, 2) != '00') {
								county.append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
							}
						}
					});
				})
            })
            // 后期用于编辑 地址内容
			// var provinceobj = document.getElementById("province");
			// for (var i = 0; i < provinceobj.options.length; i++) {
			// 	if (provinceobj.options[i].innerHTML == '福建省') {
            //         provinceobj.options[i].selected = true; 
            //         $('#province').trigger('change')
            //         var cityobj = document.getElementById("citys");
            //         for (var i = 0; i < cityobj.options.length; i++) {
            //             if (cityobj.options[i].innerHTML == '泉州市') {
            //                 cityobj.options[i].selected = true; 
            //                 $('#citys').trigger('change')
            //                 var countyobj = document.getElementById("county");
            //                 for (var i = 0; i < countyobj.options.length; i++) {
            //                     if (countyobj.options[i].innerHTML == '鲤城区') {
            //                         countyobj.options[i].selected = true; 
            //                         break;
            //                     }
            //                 }
            //                 break;
            //             }
            //         }
            //         break;
			// 	}
			// }
			// 默认勾选
			$('.checkBox').on('click', function () {
				var checkState = $(this).attr('data-state') == 'false' ? true : false;
				$(this).attr('data-state', checkState) //设置上去
				if (checkState) { //选中几个了
					$(this).addClass('boxChecked')
				} else {
					$(this).removeClass('boxChecked')
				}
			})
			// 地址模态框消失
			$('.addRess-close').on('click', function () {
				$('.addRess-options-wrapper').fadeOut(200)
			})
			// 地址模态显示
			$('.addRessBtn').on('click', function () {
				$('.addRess-options-wrapper').fadeIn(200)
			})
			// 订单支付
			$('.confirm-btn').on('click', function () {
				window.location.href = 'orderPay.html'
			})
			// 切换出现优惠券
			$('.discount-tabs-item').on('click', function () {
				var index = $(this).index();
				$(this).addClass('discount-tabs-show').siblings().removeClass('discount-tabs-show');
				$('.chose-discount-item').eq(index).addClass('discount-type-show').siblings('.chose-discount-item').removeClass('discount-type-show');
			})
		})
	})
}
