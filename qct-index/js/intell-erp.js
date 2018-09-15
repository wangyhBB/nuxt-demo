// if (document.body.clientWidth <= 1000) {
//     //判断屏幕大小  在移动端下
//     require(['common', 'mobile'], function (c_fnc, mb) {
//         mb.init()
//     })
// } else {
//     require(['common', 'pc'], function (c_fnc, pc) {
//         pc.init()
//         $('.nav-items a').eq(0).css('color', '#f8404b');
//     })
// }
require(['common', 'pc'], function (c_fnc, pc) {
    pc.init()
    $('.nav-items a').eq(0).css('color', '#f8404b');
})
