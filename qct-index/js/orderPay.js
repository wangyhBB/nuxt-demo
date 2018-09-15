// if (document.body.clientWidth <= 1000) {
//     //判断屏幕大小  在移动端下
//     require(['jquery', 'common', 'mobile'], function ($, c_fnc) {

//     })
// } else {
//     require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
//         $(function () {
//             pc.init();
//             // 订单详情列表显示
//             $('.order-pay-info-bottom h1').on('click', function () {
//                 if (!$(this).hasClass('showUp')) {
//                     $(this).addClass('showUp')
//                     $('.order-pay-info-list').show();
//                 } else {
//                     $(this).removeClass('showUp')
//                     $('.order-pay-info-list').hide();
//                 }
//             });
//             // 支付方式选择
//             $('.choseItem').on('click',function(){
//                 $(this).addClass('chosed').siblings().removeClass('chosed');
//             })
//         })
//     })
// }

require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
    $(function () {
        pc.init();
        // 订单详情列表显示
        $('.order-pay-info-bottom h1').on('click', function () {
            if (!$(this).hasClass('showUp')) {
                $(this).addClass('showUp')
                $('.order-pay-info-list').show();
            } else {
                $(this).removeClass('showUp')
                $('.order-pay-info-list').hide();
            }
        });
        // 支付方式选择
        $('.choseItem').on('click',function(){
            $(this).addClass('chosed').siblings().removeClass('chosed');
        })
    })
})