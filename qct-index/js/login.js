if (document.body.clientWidth <= 1000) {
    //判断屏幕大小  在移动端下
    require(['jquery', 'common', 'mobile'], function ($, c_fnc) {
        
    })
} else {
    require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
        $(function () {
            pc.init()
            $('#register-btn').on('click',function(){
                window.location.href = 'register.html';
            })
            // 切换登录方式
            $('.login-title-tab .title-tabItem').on('click',function(){
                $(this).addClass('login-show').siblings().removeClass('login-show')
                // login-type-show
                var index = $(this).index();
                $('.login-type-item').eq(index).addClass('login-type-show').siblings().removeClass('login-type-show')
            })
            // 点击获取验证码
            $('.login-input-code').on('click',function(){
                $(this).verifyCodeN()
            })
        })
    })
}