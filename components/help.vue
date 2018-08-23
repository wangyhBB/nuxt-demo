<template>
    <div class="pc-helpBox hidden-sm-and-down">
        <!-- <div class="helpBox-item">
		<img src="~static/images/words.png">
		<div class="help-show words-show">
			<p>在线留言</p>
			<a href="###">点击进入</a>
			<div class="help-show-arrow">
			</div>
		</div>
	</div>
	<div class="helpBox-item">
		<img src="~static/images/tel.png">
		<div class="help-show words-show tel-show">
			<p>服务热线</p>
			<a>4006-877-999</a>
			<div class="help-show-arrow">
			</div>
		</div>
	</div> -->
        <div class="helpBox-item">
            <img src="~static/images/qq.png">
            <div class="help-show words-show qq-show">
                <div class="qq-img"></div>
                <a class="qq-title">
                    <div>在线客服</div>
                    <div>点击交谈</div>
                </a>
                <div class="help-show-arrow">
                </div>
            </div>
        </div>
        <div class="helpBox-item">
            <img src="~static/images/wechat.png">
            <div class="qcode-show">
                <div class="qcode-img"></div>
                <p>扫一扫，微信关注全城淘</p>
                <div class="help-show-arrow" style="top:172px;">
                </div>
            </div>
        </div>
        <div class="helpBox-item arrow-top">
            <img src="~static/images/top.png">
        </div>
    </div>

</template>
<style>
.pc-helpBox {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 50px;
    z-index: 11;
}

.helpBox-item {
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 2px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}

.cart-rage {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f51200;
    font-size: 12px;
    color: #fff;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
}

.pc-helpBox.cart-helpBox .helpBox-item {
    background-color: #ffffff;
}

.helpBox-item.arrow-top {
    display: none;
}

.helpBox-item:hover {
    background-color: rgba(0, 0, 0, 0.9);
}

.pc-helpBox.cart-helpBox .helpBox-item:hover {
    background-color: #ebebeb;
}

.help-show {
    position: absolute;
}

.words-show {
    display: none;
    padding-left: 22px;
    left: -197px;
    top: 0;
    width: 164px;
    height: 87px;
    border: 1px solid #e5e5e5;
    background: #fff;
}

.tel-show {
    display: none;
}

.qq-show {
    padding: 0;
    width: 186px;
}

.qq-img {
    text-align: center;
    float: left;
    width: 82px;
    height: 100%;
    background: url("~static/images/qq-tencent.png") center center no-repeat;
    background-size: 35px 40px;
}

.words-show a.qq-title {
    float: right;
    width: 50%;
    padding-top: 14px;
}

.qq-title div {
    float: left;
    width: 100%;
    color: #f8404b;
}

.qcode-show {
    display: none;
    position: absolute;
    right: 59px;
    width: 164px;
    border: 1px solid #e5e5e5;
    padding: 12px;
    padding-bottom: 0;
    top: -156px;
    background: #fff;
}

.qcode-show .qcode-img {
    width: 164px;
    height: 164px;
    background: url("~static/images/qcode.png") 0 0 no-repeat;
    background-size: cover;
}

.helpBox-item:hover .words-show,
.helpBox-item:hover .tel-show,
.helpBox-item:hover .qq-show,
.helpBox-item:hover .qcode-show {
    display: block;
}

.words-show p {
    float: left;
    width: 100%;
    color: #333333;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    padding-top: 14px;
    text-align: left;
}

.words-show a {
    float: left;
    width: 100%;
    display: block;
    font-size: 18px;
    color: #f8404b;
    height: 30px;
    line-height: 30px;
    text-align: left;
}

.help-show-arrow {
    position: absolute;
    right: -8px;
    top: 22px;
    width: 10px;
    height: 56px;
    background: url("~static/images/triangle.png") 0 0 no-repeat;
    background-size: 7px 13px;
    z-index: 20;
}

.helpBox-item:hover img {
    width: 18px;
}

.helpBox-item:hover img {
    width: 18px;
}

.helpBox-item img {
    vertical-align: middle;
    margin: 0 auto;
    width: 24px;
    -webkit-transition: all ease-out 0.2s;
    transition: all ease-out 0.2s;
}
</style>

