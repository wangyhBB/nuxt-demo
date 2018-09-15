require(['common', 'pc', 'text!../html/tpl/newsTpl.html', 'template'], function (c_fnc, pc, header, template) {
    $(function () {
        pc.init()
        $('.nav-items a').eq(3).css('color', '#f8404b');
        var slectIndex = c_fnc.getQueryString('index');
        $('.about-left a').eq(slectIndex).addClass('aboutActive');
        $(window).on('scroll', function () {
            var oTop = ($('.aboutUs-item').offset().top)
            var scrollT = $(this).scrollTop()
            console.log(oTop + '::::' + scrollT)
            if (scrollT >= oTop) {
                $('.about-left').addClass('fixedContent')
            } else {
                $('.about-left').removeClass('fixedContent')
            }
        })
        var data = {
            list: [{
                img: '../images/newsImg.png',
                title: '即富&全城淘“支付+新零售行业峰会暨即富即富&全城淘“支付+新零售行业峰会暨即富全国招商大会全国招商大会',
                detail: '2018年6月30日，在全体工作人员的齐心协力下，即富&全城淘“支付+新零售行业峰会 暨即富全国招商大会”在上海浦东新区宝龙丽笙酒店顺利召开',
                time: '2018-06-23 09:21:26',
                id: 54545,
                sex: 1
            }, {
                img: '../images/newsImg.png',
                title: '即富&全城淘“支付+新零售行业峰会暨即富即富&全城淘“支付+新零售行业峰会暨即富全国招商大会全国招商大会',
                detail: '2018年6月30日，在全体工作人员的齐心协力下，即富&全城淘“支付+新零售行业峰会 暨即富全国招商大会”在上海浦东新区宝龙丽笙酒店顺利召开',
                time: '2018-06-23 09:21:26',
                id: 54545,
                sex: 0
            }]
        }
        var render = template.compile(header)
        var html = render({
            list: data.list
        })
        $('.newsContent-list').append(html);
        $('.newsDetail-btn').on('click', function () {
            var id = $(this).attr('data-id');
            window.location.href = 'newsDetail.html?index=' + slectIndex + '&id=' + id;
        })
    })
})
