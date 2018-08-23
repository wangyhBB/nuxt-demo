<template>
    <div class="erp-wrapper">
        <headers :imgSrc="imgSrc" :selectIndex="selectIndex"></headers>
        <div class="intelligent-bg1">
            <img src="~static/images/erp_01.jpg" alt="">
            <div class="intelligent-info">
                <h1>开店宝——商超管家</h1>
                <p>即是店铺的好帮手，又是店铺的好管家</p>
                <p class="intelligent-info-detail">
                    营销活动多样、商品属性设置齐全 、一机多种收款，客流量增加 告别经营
                    <br>低效和客户流失会员管理系统化提升顾客粘性，库存实时查询，只能经营系
                    <br> 统，帮您快速进入新零售时代。
                </p>
                <a class="intelligent-link" href="#">
                    查看详情
                </a>
            </div>
        </div>
        <div class="intelligent-bg2">
            <img src="~static/images/erp_02.jpg" alt="">
            <div class="intelligent-info1">
                <h1>开店宝——餐饮管家</h1>
                <p>支付+SaaS模式 &nbsp;&nbsp;&nbsp;打造智慧餐厅</p>
                <p class="intelligent-info-detail">
                    顾客自助点餐、外卖订单自动接单 ， 食堂、外卖统一高效管理。花样会员
                    <br> 营销、多维度数据报表 手机随时查，打造支付生态圈为智慧餐厅赋能。
                </p>
                <a class="intelligent-link" href="intelligent-food.html">
                    查看详情
                </a>
            </div>
        </div>
        <div class="m-erp-wrapper">
            <h1>开店宝——商超管家</h1>
            <span>即是店铺的好帮手，又是店铺的好管家</span>
            <a href="#">查看详情 &gt;&gt;</a>
        </div>
        <div class="m-erp-wrapper m-erp-wrapper-b">
            <h1 style="color:#fff;">开店宝——餐饮管家</h1>
            <span style="color:#fff;">支付+SaaS模式 打造智慧餐厅</span>
            <a href="#">查看详情 &gt;&gt;</a>
        </div>
        <helps></helps>
    </div>
</template>
<script>
import headers from "~/components/header.vue";
import helps from "~/components/help.vue";
export default {
    data() {
        return {
            imgSrc: "../images/login-logo.png",
            selectIndex: 0
        };
    },
    components: {
        headers,
        helps
    },
    head() {
        return {
            title: "智能ERP",
            meta: [
                {
                    hid: "description",
                    name: "news",
                    content: "智能ERP"
                }
            ]
        };
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
.intelligent-bg1,
.intelligent-bg2 {
    transition: all 0.5s ease;
}
.intelligent-bg1 .intelligent-info {
    position: absolute;
    top: 32%;
    left: 50%;
    max-width: 40%;
    min-height: 48%;
}
.intelligent-bg1 .intelligent-info h1 {
    font-size: 4.2em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #222222;
    margin-bottom: 5%;
}
.intelligent-bg1 .intelligent-info p {
    max-width: 100%;
    font-size: 2.1em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    margin-bottom: 6%;
}
.intelligent-bg1 .intelligent-info p.intelligent-info-detail {
    font-size: 1.2em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
}
.intelligent-link {
    display: inline-block;
    width: 10.7em;
    height: 2.8em;
    line-height: 2.8em;
    border-radius: 100px;
    border: solid 1px #333333;
    font-size: 1.1em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    text-align: center;
    cursor: pointer;
}
.intelligent-link:hover {
    color: #f8404b;
    border: solid 1px #f8404b;
}
.intelligent-info1 {
    position: absolute;
    top: 28%;
    left: 18.6%;
    max-width: 40%;
    min-height: 48%;
    color: #fff;
}
.intelligent-bg2 .intelligent-info1 h1 {
    font-size: 4.2em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    margin-bottom: 5%;
}
.intelligent-bg2 .intelligent-info1 p {
    max-width: 100%;
    font-size: 2.1em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    margin-bottom: 6%;
}
.intelligent-bg2 .intelligent-info1 p.intelligent-info-detail {
    font-size: 1.2em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
}
.intelligent-bg2 .intelligent-link {
    display: inline-block;
    width: 10.7em;
    height: 2.8em;
    line-height: 2.8em;
    border-radius: 100px;
    border: solid 1px #fff;
    font-size: 1.1em;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #fff;
    text-align: center;
    cursor: pointer;
}
.intelligent-link:hover {
    color: #f8404b;
    border: solid 1px #f8404b;
}
@media screen and(max-width: 1400px) {
    .intelligent-bg1 .intelligent-info {
        position: absolute;
        top: 24%;
        left: 50%;
        max-width: 40%;
        min-height: 48%;
    }
    .intelligent-bg2 .intelligent-info1 {
        position: absolute;
        top: 20%;
        left: 18.6%;
        max-width: 40%;
        min-height: 48%;
        color: #fff;
    }
    .intelligent-bg1 .intelligent-info h1,
    .intelligent-bg2 .intelligent-info1 h1 {
        font-size: 3.2em;
    }
    .intelligent-bg1 .intelligent-info p,
    .intelligent-bg2 .intelligent-info1 p {
        font-size: 1.61em;
    }
    .intelligent-bg1 .intelligent-info p.intelligent-info-detail {
        font-size: 1.1em;
        color: #333333;
    }
    .intelligent-bg2 .intelligent-info1 p.intelligent-info-detail {
        font-size: 1.1em;
    }
}
.intelligent-bg2 {
    position: relative;
}
@media screen and(max-width: 1200px) {
    .intelligent-bg1 .intelligent-info {
        position: absolute;
        top: 20%;
        left: 50%;
        max-width: 40%;
        min-height: 48%;
    }
    .intelligent-bg2 .intelligent-info {
        position: absolute;
        top: 16%;
        left: 50%;
        max-width: 40%;
        min-height: 48%;
    }
    .intelligent-bg1 .intelligent-info h1,
    .intelligent-bg2 .intelligent-info h1 {
        font-size: 3em;
    }
    .intelligent-bg1 .intelligent-info p,
    .intelligent-bg2 .intelligent-info p {
        font-size: 1.41em;
    }
    .intelligent-bg1 .intelligent-info p.intelligent-info-detail,
    .intelligent-bg2 .intelligent-info p.intelligent-info-detail {
        font-size: 0.9em;
        color: #333333;
    }
    .intelligent-link {
        width: 9em;
        height: 2.4em;
        line-height: 2.4em;
    }
    .intelligent-bg2 .intelligent-link {
        width: 9em;
        height: 2.4em;
        line-height: 2.4em;
    }
}
@media screen and(max-width: 1022px) {
    .intelligent-bg1 .intelligent-info {
        position: absolute;
        top: 14%;
        left: 50%;
        max-width: 40%;
        min-height: 48%;
    }

    .intelligent-bg1 .intelligent-info h1,
    .intelligent-bg2 .intelligent-info1 h1 {
        font-size: 2em;
    }
    .intelligent-bg1 .intelligent-info p,
    .intelligent-bg2 .intelligent-info1 p {
        font-size: 0.41em;
    }
    .intelligent-bg1 .intelligent-info p.intelligent-info-detail {
        font-size: 0.6em;
        color: #333333;
    }
    .intelligent-bg2 .intelligent-info1 p.intelligent-info-detail {
        font-size: 0.6em;
    }
    .intelligent-link {
        width: 6em;
        height: 1.4em;
        line-height: 1.4em;
    }
    .intelligent-bg2 .intelligent-link {
        width: 6em;
        height: 1.4em;
        line-height: 1.4em;
    }
}
.m-erp-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: none;
    color: #666;
    height: 9.7rem;
    background: url("~static/images/erp_banner1-.jpg") 0 0 no-repeat;
    background-size: 100% 100%;
}
.m-erp-wrapper h1 {
    margin-top: 0.99rem;
    text-align: center;
    font-size: 0.36rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #222222;
}
.m-erp-wrapper span {
    font-size: 0.24rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    margin-top: 0.33rem;
    text-align: center;
}

.m-erp-wrapper a {
    font-size: 0.2rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    text-align: center;
    color: #f8404b;
    margin-top: 0.5rem;
}
.m-erp-wrapper-b {
    background: url("~static/images/erp_banner02-.jpg") 0 0 no-repeat;
    background-size: 100% auto;
}
@media screen and(max-width: 750px) {
    .intelligent-bg1,
    .intelligent-bg2 {
        display: none;
    }
    .erp-wrapper {
        padding-top: 60px;
    }
    .m-erp-wrapper {
        display: flex;
    }
}
</style>


