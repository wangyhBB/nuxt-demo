if (document.body.clientWidth <= 1000) {
    //判断屏幕大小  在移动端下
    require(['common', 'mobile'], function (c_fnc, mb) {
        mb.init()
    })
} else {
    require(['jquery', 'common', 'pc', 'superSlide'], function ($, c_fnc, pc, superSlide) {
        pc.init()
        $('#nexTsliderVerfiy').on('click', function () {
            $('.slder-mask').show()
            $('#mpanel4').slideVerify({
                type: 2, //类型
                vOffset: 5, //误差量，根据需求自行调整
                vSpace: 5, //间隔
                imgName: ['1.jpg', '3.jpg', '4.jpg'],
                imgSize: {
                    width: '400px',
                    height: '200px',
                },
                blockSize: {
                    width: '40px',
                    height: '40px',
                },
                barSize: {
                    width: '400px',
                    height: '40px',
                },
                ready: function () {},
                success: function () {
                    window.location.href = 'registerFinish.html?tel=' + $('#tel').val()
                    //......后续操作
                },
                error: function () {
                    //		        	alert('验证失败！');
                }

            });
        });
        // 取消掉 图形验证
        // $('.slder-mask').on('click', function (e) {
        //     e.stopPropagation()
        //     alert(0)
        //     $(this).hide()
        //     $('#mpanel4').children().remove()
        // })
        
    })
}
