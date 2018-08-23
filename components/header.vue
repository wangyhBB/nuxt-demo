<template>
    <div class="pc-navbar-wrapper">
        <el-row class="pc-navbar">
            <el-col :xs="{span: 10, offset: 0}" :sm="{span: 3, offset: 2}" :md="{span: 3, offset: 1}" :lg="{span: 3, offset: 0}">
                <div class="grid-content">
                    <a href="/">
                        <img :src="imgSrc" v-if="imgSrc" class="hidden-sm-and-down nav-img nav-img-default">
                    </a>
                    <a href="/">
                        <img src="~static/images/index-logo.png" v-if="!imgSrc" class="hidden-sm-and-down nav-img">
                    </a>
                    <a href="/">
                        <img src="~static/images/login-logo.png" class="hidden-md-and-up mobile-login-logo">
                    </a>
                </div>
            </el-col>
            <el-col :xs="{span: 3, offset: 2}" :sm="{span: 9, offset: 2}" :md="{span: 8, offset: 4}" :lg="{span: 9, offset: 6}">
                <div class="grid-content">
                    <div class="nav-items hidden-sm-and-down">
                        <!-- <nuxt-link 
                        v-for="(item , index) in hoverList" 
                        :key="index" 
                        :to="{name:item.href}">
                            {{item.name}}
                        </nuxt-link> -->
                        <a :class="{ 'nav-active': selectIndex == index }" v-for="(item , index) in hoverList" :key="index" :href="item.href">{{item.name}}
                        </a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="{span: 3, offset: 6}" :sm="{span: 3, offset: 3}" :md="{span: 3, offset: 4}" :lg="{span: 3, offset: 3}">
                <div class="grid-content">
                    <div class="nav-login hidden-sm-and-down">
                        个人中心
                        <div class="login-state">
                            <a class="login-items login-items-01">
                                <span>购物车</span>
                            </a>
                            <a class="login-items login-items-02">
                                <span>我的订单</span>
                            </a>
                        </div>
                    </div>
                    <div class="nav-login-logo hidden-md-and-up" id="nav-login-logo" @click="navSlide"></div>

                </div>
            </el-col>
        </el-row>
        <div class="pc-lines hidden-sm-and-down">
            <div class="lines-wrapper">
                <div class="leftItems"></div>
                <div class="leftItems machine animated bounceInRight">
                    <a class="">
                        <img src="~static/images/machine-ionc-01.png" alt="">
                        <p>智能pos</p>
                    </a>
                    <a class="">
                        <img src="~static/images/machine-ionc-02.png" alt="">
                        <p>MINI 移动支付终端</p>
                    </a>
                    <a class="">
                        <img src="~static/images/machine-ionc-03.png" alt="">
                        <p>台式扫码支付终端</p>
                    </a>
                    <a class="">
                        <img src="~static/images/machine-ionc-04.png" alt="">
                        <p>pc收银一体机</p>
                    </a>
                    <a class="">
                        <img src="~static/images/machine-ionc-05.png" alt="">
                        <p>智能扫码棒</p>
                    </a>
                </div>
            </div>
        </div>

        <div class="shopMask"></div>
        <div id="gb-mask-layer"></div>
        <div class="nav-bar-list hidden-md-and-up" ref="barList">
            <a v-for="(item , index)  in mobileNav" :href="item.href" :key="index" ref="menuItem" :class="['nav-item', item.children ? 'nav-item-arrow' : '' ]">
            <!-- <nuxt-link :to="{name:item.href}" v-for="(item , index)  in mobileNav" :key="index" ref="menuItem" :class="['nav-item', item.children ? 'nav-item-arrow' : '' ]"> -->
                <span>
                    {{item.name}}
                </span>
                <div class="nav-more" v-if="item.children">
                    <p v-for="(itemChild,index) in item.children" :href="itemChild.href" :key="index" class="nav-more-item">{{itemChild.name}}
                    </p>
                </div>
            <!-- </nuxt-link> -->
            </a>
        </div>
    </div>
</template>
<style lang="scss">
.grid-content {
    position: relative;
    border-radius: 4px;
    min-height: 60px;
}
.pc-navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    z-index: 200;
}
.pc-navbar .el-col {
    transition: all ease 0.5s;
}
.pc-navbar {
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    height: 60px;
    z-index: 200;
}
.nav-img {
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    float: left;
    // width: 120px;
    z-index: 100;
}
.nav-img.nav-img-default {
    width: auto;
    top: 50%;
    transform: translateY(-50%);
}
.mobile-login-logo {
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translateY(-50%);
    height: 24px;
}
.nav-items {
    display: flex;
    height: 60px;
    a {
        float: left;
        display: block;
        width: 86px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: nth($colour, 1);
    }
    a:hover {
        color: nth($colour, 4);
    }
    a.nav-active{
        color: nth($list: $colour, $n: 4);
    }
}
.nav-login {
    position: relative;
    height: 60px;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
    z-index: 1000;
    padding-left: 30px;
    text-align: right;
    background: url("~static/images/account.png") center center no-repeat;
    background-size: 20px auto;
}
.nav-login:hover {
    color: #f8404b;
    background: url("~static/images/account-show.png") center center no-repeat;
    background-size: 20px auto;
}
.nav-login-logo {
    position: absolute;
    top: 50%;
    right: 20%;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA1klEQVRoQ+2Y0Q3CMBBD7QmATdgERoVN2IQyQfgCAaJSldcoSuV+177L86k51Rr88eD9KwfonWASSAKQwNcIlVKOkk7Qs7X8avv2KvJ7gLukfesOoP9k+zB3gEnSDhZoLX/YfkP+N0Ln1h1A/8vsCEHjLvLcA12wfxRNAkkAEsgIQYBYngQwQmiwrQSyTsNxWCjPOr0QVLPXsk43Q1tjvK3PaA2B3pokkAQggYwQBIjlSQAjhAb5Ow0B1sizTtdQW1OTdXpNmtgr9wBGCA2SAASI5cMn8ATJxjwxY2PppAAAAABJRU5ErkJggg==");
    background-size: 100% 100%;
    z-index: 12;
}
.pc-lines {
    display: none;
    top: 60px;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
    .lines-wrapper {
        position: relative;
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
        .leftItems {
            display: flex;
            display: none;
            margin-left: 280px;
            width: auto;
            a {
                text-align: center;
                display: block;
                margin: 0 20px;
                p {
                    margin-top: 4px;
                    color: #fff;
                }
                img {
                    width: auto;
                    height: 42px;
                }
            }
            a:hover {
                p {
                    color: #f8404b;
                }
            }
        }
        .leftItems.block {
            display: flex;
        }
        .leftItems.machine {
            padding-top: 10px;
            height: 80px;
        }
    }
}
.pc-lines.show {
    display: block;
}
.shopMask {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}
.login-state {
    display: none;
    padding: 15px 0;
    position: absolute;
    left: -20px;
    top: 60px;
    width: 160px;
    background-color: #fff;
    z-index: 1000;
    .login-items {
        position: relative;
        display: block;
        overflow: hidden;
        line-height: 38px;
        height: 38px;
        padding-left: 50px;
        cursor: pointer;
        letter-spacing: 2px;
        text-align: left;
    }
    .login-items:hover span {
        color: nth($colour, 4);
    }
    .login-items.login-items-01 {
        background: url("~static/images/cart.png") 16px center no-repeat;
        background-size: 20px auto;
    }
    .login-items.login-items-02 {
        background: url("~static/images/order.png") 16px center no-repeat;
        background-size: 20px auto;
    }
    .login-items.login-items-01:hover {
        background: url("~static/images/cart-show.png") 16px center no-repeat;
        background-size: 20px auto;
    }
    .login-items.login-items-02:hover {
        background: url("~static/images/order-show.png") 16px center no-repeat;
        background-size: 20px auto;
    }
}
@keyframes navFadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -60px, 0);
        transform: translate3d(0, -60px, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}
.nav-bar-list.ani-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-animation: navFadeInDown 0.6s both;
    animation: navFadeInDown 0.6s both;
}

.nav-bar-list.ani-list .nav-item {
    opacity: 1;
}

.nav-bar-list {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    .nav-item {
        position: relative;
        opacity: 0;
        line-height: 0.84rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 0.3rem;
        color: #fff;
        -webkit-transition-delay: 1.5s;
        transition-delay: 1.5s;
        -webkit-transition: opacity 0.2s;
        transition: opacity 0.2s;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}

.nav-bar-list .nav-item span {
    padding: 0 0.48rem;
}
.nav-more {
    display: none;
    color: #fff;
}

.nav-more p.nav-more-item {
    padding: 0 0.62rem;
    display: block;
    color: #afafaf;
    line-height: 0.64rem;
    font-size: 0.28rem;
}

.nav-more p:hover {
    color: #f7414f;
}

.nav-bar-list .nav-item.nav-item-arrow span {
    background: url("~static/images/arrow-down.png") 96% 0.2rem no-repeat;
    background-size: 0.42rem auto;
}
.nav-bar-list .nav-item.nav-item-arrow.arrow-up span {
    background: url("~static/images/arrow-up.png") 96% 0.2rem no-repeat;
    background-size: 0.42rem auto;
}
.nav-bar-list .nav-item:hover span,
.nav-bar-list .nav-item.nav-item-arrow:hover span {
    background-color: #f7414f;
}
#gb-mask-layer {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 98;
}
#gb-mask-layer.showMask {
    display: block;
}
</style>
<script>
export default {
    data() {
        return {
            hoverList: [
                { name: "智能ERP", href: "erp" },
                { name: "智能硬件" },
                { name: "关于我们" ,href: "about"},
                { name: "公司动态" },
                { name: "加入我们" }
            ],
            mobileNav: [
                { name: "首页", href: "/" },
                {
                    name: "智能ERP",
                    href: "erp"
                },
                {
                    name: "智能硬件",
                    href: "#",
                    children: [
                        { name: "智能pos" },
                        { name: "MINI 移动支付终端", href: "#" },
                        { name: "台式扫码支付终端", href: "#" },
                        { name: "pc收银一体机", href: "#" },
                        { name: "智能扫码棒", href: "#" }
                    ]
                },
                {
                    name: "关于我们",
                    href: "#",
                    children: [
                        { name: "公司简介", href: "#" },
                        { name: "公司文化", href: "#" },
                        { name: "联系我们", href: "#" },
                        { name: "分支结构", href: "#" }
                    ]
                },
                {
                    name: "公司动态",
                    href: "#",
                    children: [
                        { name: "新闻报道", href: "#" },
                        { name: "政府关怀", href: "#" },
                        { name: "公司活动", href: "#" },
                        { name: "系统公告", href: "#" },
                        { name: "行业资讯", href: "#" }
                    ]
                },
                { name: "加入我们", href: "#" }
            ]
        };
    },
    mounted() {
        var navIndex; //hover选中的位置
        $(".nav-items a").hover(function() {
            navIndex = $(this).index();
            var $items = $(".leftItems").eq(navIndex);
            if ($items.length) {
                $(".pc-lines").addClass("show");
                $(".leftItems")
                    .eq(navIndex)
                    .siblings()
                    .removeClass("block animated bounceInRight");
                $(".leftItems")
                    .eq(navIndex)
                    .addClass("block");
                $(".leftItems")
                    .eq(navIndex)
                    .addClass("animated");
                $(".leftItems")
                    .eq(navIndex)
                    .addClass("animated bounceInRight");
            } else {
                $(".pc-lines").removeClass("show");
            }
        });
        $(".lines-wrapper").hover(
            function() {
                $(".pc-lines").addClass("show");
            },
            function() {
                $(".pc-lines").removeClass("show");
                $(".leftItems")
                    .eq(navIndex)
                    .removeClass("block animated bounceInRight");
            }
        );
        //登入hover
        $(".nav-login").hover(
            function() {
                $(".login-state").slideDown();
                $(".shopMask").show();
            },
            function() {
                $(".login-state")
                    .stop(true, false)
                    .slideUp();
                $(".shopMask").hide();
            }
        );
        $(".nav-item.nav-item-arrow span").on("click", function() {
            $(this)
                .siblings(".nav-more")
                .stop(true, false)
                .slideToggle();
            $(this)
                .parent()
                .toggleClass("arrow-up");
            $(this)
                .parent()
                .siblings(".nav-item.nav-item-arrow")
                .removeClass("arrow-up");
            $(this)
                .parent()
                .siblings(".nav-item.nav-item-arrow")
                .children(".nav-more")
                .slideUp();
        });
        $("#gb-mask-layer").on("touchstart", function() {
            $(".nav-more").each(function() {
                $(this).slideUp(500);
            });
            $("body").removeClass("limit-content");
            $(".nav-item.nav-item-arrow").removeClass("arrow-up");
            $("#gb-mask-layer").toggleClass("showMask");
            $(".nav-bar-list")
                .stop(true, false)
                .toggleClass("ani-list");
        });
    },
    methods: {
        navSlide() {
            var barList = this.$refs.barList;
            if (barList.classList.value.indexOf("ani-list") > -1) {
                barList.classList.remove("ani-list");
                $("#gb-mask-layer").toggleClass("showMask");
            } else {
                barList.classList.add("ani-list");
                $("#gb-mask-layer").toggleClass("showMask");
            }
            $("body").toggleClass("limit-content");
            let obj = [
                {
                    name: "122",
                    state: 0,
                    index: 0
                },
                {
                    name: "344",
                    state: 0,
                    index: 1
                }
            ];
        }
    },
    props: ["imgSrc","selectIndex"]
};
</script>



