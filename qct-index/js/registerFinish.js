if (document.body.clientWidth <= 1000) {
    //判断屏幕大小  在移动端下
    require(['common', 'mobile'], function (c_fnc, mb) {
        mb.init()
        $('.code-to-ctn').text('验证短信已发送至'+ c_fnc.getQueryString('tel') +'的手机')
        $('.check-step2-verify').verifyCodeN()
        $('.message-verify').on('click', function () {
			$(this).verifyCodeN()
        })
    })
} else {
    require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
        pc.init()
        $('.message-number').text('验证短信已发送至'+ c_fnc.getQueryString('tel') +'的手机')
        $('.message-verify').verifyCodeN()
		$('.message-verify').on('click', function () {
			$(this).verifyCodeN()
        })
    })
}