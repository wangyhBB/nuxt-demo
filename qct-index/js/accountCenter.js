// if (document.body.clientWidth <= 1000) {
// 	//判断屏幕大小  在移动端下
// 	require(['jquery', 'common', 'mobile'], function ($, c_fnc) {

// 	})
// } else {
// 	require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
// 		$(function () {
// 			pc.init()
// 			// 密码显示 于 隐藏
// 			$('.password-show').on('click', function () {
// 				var type = $('#newPassword').attr('type');
// 				if (type == 'password') {
// 					$('#newPassword').attr('type', 'text');
// 					$(this).addClass('pa-show')
// 				} else {
// 					$('#newPassword').attr('type', 'password');
// 					$(this).removeClass('pa-show')
// 				}
// 			});
// 			// 隐藏密码模态框
// 			$('.closeDiscount').on('click', function () {
// 				$('#password-model').fadeOut()
// 				$('#authentication-model').fadeOut()
// 				$('#bind-cell-model').fadeOut()
// 			})

// 			// 修改密码模态框显示
// 			$('#account-info-edit').on('click', function () {
// 				$('#password-model').fadeIn()
// 			})

// 			// 手机权限
// 			$('#authon-info-edit').on('click', function () {
// 				$('#authentication-model').fadeIn()
// 			})

// 			$('#authen-click').on('click', function () {
// 				$('#authentication-model').fadeOut()
// 				$('#bind-cell-model').fadeIn();
// 			})
// 			$('#authen-verify').on('click', function () {
// 				$(this).verifyCodeN(); //发送验证码
// 			})
// 			$('#bind-verify').on('click', function () {
// 				// 
// 				$(this).verifyCodeN(); //发送验证码
// 			})
// 		})
// 	})
// }
require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
    $(function () {
        pc.init()
        // 密码显示 于 隐藏
        $('.password-show').on('click', function () {
            var type = $('#newPassword').attr('type');
            if (type == 'password') {
                $('#newPassword').attr('type', 'text');
                $(this).addClass('pa-show')
            } else {
                $('#newPassword').attr('type', 'password');
                $(this).removeClass('pa-show')
            }
        });
        // 隐藏密码模态框
        $('.closeDiscount').on('click', function () {
            $('#password-model').fadeOut()
            $('#authentication-model').fadeOut()
            $('#bind-cell-model').fadeOut()
        })

        // 修改密码模态框显示
        $('#account-info-edit').on('click', function () {
            $('#password-model').fadeIn()
        })

        // 手机权限
        $('#authon-info-edit').on('click', function () {
            $('#authentication-model').fadeIn()
        })

        $('#authen-click').on('click', function () {
            $('#authentication-model').fadeOut()
            $('#bind-cell-model').fadeIn();
        })
        $('#authen-verify').on('click', function () {
            $(this).verifyCodeN(); //发送验证码
        })
        $('#bind-verify').on('click', function () {
            // 
            $(this).verifyCodeN(); //发送验证码
        })
    })
})
