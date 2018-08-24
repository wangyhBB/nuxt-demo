if (document.body.clientWidth <= 1000) {
	//判断屏幕大小  在移动端下
	require(['jquery', 'common', 'mobile'], function ($, c_fnc) {

	})
} else {
	require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
		$(function () {
			pc.init()
			// .shoppingCart-null 没有商品的情况
			var checkAllState = false; //全选状态
			var startLength = 0; //默认选中为0个
			var orderIds = []; //订单的id 集合
			var maxBoxLength = $('.shoppingCart-goodsList-wrapper tr').length; //获取总条数
			var sum = 0;
			// 算出总价
			function sumPrice() {
				sum = 0;
				$('.checkBoxItem.boxChecked').each(function () {
					var number = $(this).parent().siblings().find('.shoppingBtns').find('.shoppingBtns-number').val() * 1;
					var count = ($(this).parent().siblings().find('.order-price').text()) * 1;
					var totle = number * count;
					console.log(totle)
					sum += (count * number);
				})
				$('#sum').text('￥' + sum)
			}
			$('#sum').text('￥' + sum)
			$('.shoppingCart-number').text('购物车(' + maxBoxLength + ')')
			// box 全选
			$('.checkBoxAll').on('click', function () {
				checkAllState = !checkAllState;
				if (checkAllState) {
					$('.checkBox').each(function () {
						$(this).addClass('boxChecked')
					})
					$('.checkBoxItem').each(function () {
						$(this).attr('data-state', true) //设置上去
					})
					sumPrice()
					startLength = maxBoxLength;
					$('#selectNumber').text(startLength)
				} else {
					$('.checkBox').each(function () {
						$(this).removeClass('boxChecked')
					})
					$('.checkBoxItem').each(function () {
						$(this).attr('data-state', false) //设置上去
					})
					sumPrice()
					startLength = 0;
					$('#selectNumber').text(startLength)
				}
			})
			// box 单选
			$('.checkBoxItem').on('click', function () {
				var checkState = $(this).attr('data-state') == 'false' ? true : false;
				$(this).attr('data-state', checkState) //设置上去
				if (checkState) { //选中几个了
					startLength += 1;
					$(this).addClass('boxChecked')
					sumPrice()

					if (startLength == maxBoxLength) {
						checkAllState = true; //全部选中了
						$('.checkBoxAll').each(function () {
							$(this).addClass('boxChecked')
						})
                    }
                    $('#selectNumber').text(startLength)
				} else {
					startLength -= 1;
					$(this).removeClass('boxChecked')
					sumPrice()
					if (startLength < maxBoxLength) {
						checkAllState = false; //没有全部选中
						$('.checkBoxAll').each(function () {
							$(this).removeClass('boxChecked')
						})
                    }
                    $('#selectNumber').text(startLength)
				}
			})
			//增加
			// shoppingBtns-addBtn
			$('.shoppingBtns-addBtn').on('click', function () {
				var val = $(this).siblings('.shoppingBtns-number').val() * 1;
				val++;
				// $(this).parent().parent().siblings().find('.checkBoxItem').addClass('boxChecked')
				if (val > 99) {
					alert('上线选择99')
					$(this).siblings('.shoppingBtns-number').val(99)
				} else {
					$(this).siblings('.shoppingBtns-number').val(val)
					sumPrice()
				}
			})
			// shoppingBtns-reduceBtn
			$('.shoppingBtns-reduceBtn').on('click', function () {
				var val = $(this).siblings('.shoppingBtns-number').val() * 1;
				val--;
				if (val <= 0) {
					$(this).siblings('.shoppingBtns-number').val(1)
					alert('选购商品数量不能为0')
				} else {
					$(this).siblings('.shoppingBtns-number').val(val)
					sumPrice()
				}
			})
			// 获取所有删除id集合
			$('.deleteAllWord').on('click', function () {
				orderIds.splice(0, orderIds.length); //清空数组
				$('.checkBoxItem').each(function () {
					var idState = $(this).attr('data-state');
					if (idState == "true") { //填充id集合
						orderIds.push($(this).attr('data-id'));
						$(this).parent().parent().remove();
						var RemainingLength = $('.shoppingCart-goodsList-wrapper tr').length;
						if (RemainingLength == 0) {
							$('.shoppingCart-goodsList').hide()
							$('.shoppingCart-null').show()
                        }
                        maxBoxLength = 0
					}
				})
				// 如果没有选中的提示
				if (orderIds.length == 0) {
					alert('请选择要删除的商品')
				}
			});
			// 单个删除
			// deleteSingle
			$('.deleteSingle').on('click', function () {
				// 获取删除id
				var singleId = $(this).attr('data-id');
				$(this).parent().remove();
				maxBoxLength--;
				var RemainingLength = $('.shoppingCart-goodsList-wrapper tr').length;
				if (RemainingLength == 0) {
					$('.shoppingCart-goodsList').hide()
					$('.shoppingCart-null').show()
				}
			});
			// 结算 跳转确认订单页面
			$('.cartGoSum').on('click', function () {
				window.location.href = 'confirmOrder.html'
			})
		})
	})
}
