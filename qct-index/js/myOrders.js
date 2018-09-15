// if (document.body.clientWidth <= 1000) {
// 	//判断屏幕大小  在移动端下
// 	require(['jquery', 'common', 'mobile'], function ($, c_fnc) {

// 	})
// } else {
// 	require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
// 		$(function () {
// 			pc.init();
// 			$('.remindGood').on('click', function () {
//                 var state = $(this).attr('data-state')
//                 if(state == 1){
//                     var top = $(this).offset().top;
//                     var left = $(this).offset().left;
//                     c_fnc.tipsMark(this,top, left, '已提醒发货！', 2000);
//                 }
//             })
//             // 确认收货
//             $('.confirmGood').on('click',function(){
//                     var top = $(this).offset().top;
//                     var left = $(this).offset().left;
//                    c_fnc.confirmMark(this,top, left, '已收到商品，确认收货？', 2000);
//             })
// 		})
// 	})
// }
require(['jquery', 'common', 'pc'], function ($, c_fnc, pc) {
    $(function () {
        pc.init();
        $('.remindGood').on('click', function () {
            var state = $(this).attr('data-state')
            if(state == 1){
                var top = $(this).offset().top;
                var left = $(this).offset().left;
                c_fnc.tipsMark(this,top, left, '已提醒发货！', 2000);
            }
        })
        // 确认收货
        $('.confirmGood').on('click',function(){
                var top = $(this).offset().top;
                var left = $(this).offset().left;
               c_fnc.confirmMark(this,top, left, '已收到商品，确认收货？', 2000);
        })
    })
})
