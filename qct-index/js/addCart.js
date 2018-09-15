// if (document.body.clientWidth <= 1000) {
// 	//判断屏幕大小  在移动端下
// 	require(['common', 'mobile'], function (c_fnc, mb) {
// 		mb.init()
// 	})
// } else {
// 	require(['common', 'pc'], function (c_fnc, pc) {
// 		$(function () {
//             pc.init()
//             $('.addCart-goSum').on('click',function(){
//                 // alert(0)
//                 window.location.href = 'shoppingCart.html'
//             })
// 		})
// 	})
// }
require(['common', 'pc'], function (c_fnc, pc) {
    $(function () {
        pc.init()
        $('.addCart-goSum').on('click',function(){
            // alert(0)
            window.location.href = 'shoppingCart.html'
        })
    })
})
