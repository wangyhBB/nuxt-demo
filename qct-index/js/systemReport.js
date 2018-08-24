if (document.body.clientWidth <= 1000) {
	//判断屏幕大小  在移动端下
	require(['common', 'mobile'], function (c_fnc, mb) {
		mb.init()
	})
} else {
	require(['common', 'pc', 'template'], function (c_fnc, pc, template) {
		$(function () {
			pc.init()
			$('.nav-items a').eq(3).css('color', '#f8404b');
			var slectIndex = c_fnc.getQueryString('index');
			$('.about-left a').eq(slectIndex).addClass('aboutActive');
			$(window).on('scroll', function () {
				var oTop = ($('.aboutUs-item').offset().top)
				var scrollT = $(this).scrollTop()
				if (scrollT >= oTop) {
					$('.about-left').addClass('fixedContent')
				} else {
					$('.about-left').removeClass('fixedContent')
				}
			})
			var source =
				`{{each list as $value i}}
                    {{if i == 0}}
                        <a class="newsInfo" href="newsDetail.html?&index=3&id={{$value.id}}">
                            <span>最新</span>{{$value.title}}
                        </a>
                    {{else}}
                    <a href="newsDetail.html?&index=3&id={{$value.id}}">
                        {{$value.title}}
                    </a>
                    {{/if}}
                {{/each}}`;
			var data = [{
				title: '福建各银行全面支持免密免签啦！',
				id: '123'
			}, {
				title: '今日起，全城刷因系统升级将暂停使用',
				id: '665544'
			}]
			var render = template.compile(source)
			console.log(render)
			var html = render({
				list: data
            })
            $('.systemList').append(html);
		})
	})
}
