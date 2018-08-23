<template>
    <div>
        <div class="introduce-content">
            <h1>
                关于平台
            </h1>
            <p>
                全城淘信息技术服务有限公司（简称“全城淘”）是上海即富信息技术服务有限公司旗下子公司之一，是一家采用领先的云端技术，基于大数据打造“互联网+”和“支付+”的信息化管理平台，为中小微企业提供完整信息化解决方案、支付解决方案的系统运营服务企业。
            </p>
            <p>
                全城淘拥有合格收单机构认证资质及多项软件著作权，从门店收银入手，聚合多种支付方式，为商超便利、休闲食品、生鲜果蔬、餐饮酒吧、鞋服箱包、生活服务等多个行业提供量身定制的管理软件和服务，提升中小微企业经营效率和店铺营业额。
            </p>
            <p>
                全城淘顺应时代潮流，利用积累的大数据信息，发挥技术、人才、金融等综合优势，携手中小微企业一起构建新时代的O2O商圈。
            </p>
        </div>
        <div class="introduce-content">
            <h1>
                办公环境
            </h1>
            <div class="about-picture-wrapper" :data-index="index" @click="zoomMask" ref="picture">
                <img :src="imgArray[index]" alt="全场淘关于我们" title="关于我们">
            </div>
            <div class="slider-container">
                <div class="slider-wrapper">
                    <div v-swiper:mySwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item , index) in imgArray" :key="index">
                                <img :src="item" alt="">
                            </div>
                        </div>
                    </div>
                    <a class="prev">&lt;</a>
                    <a class="next">&gt;</a>
                </div>
            </div>
        </div>
        <!-- zoom 显示 -->
        <zooms :showMask="showMask" ref="zoom" @closeZoom="closeZoom"></zooms>
    </div>
</template>
<style>
.introduce-content {
    float: left;
    width: 840px;
    padding: 30px 20px;
    margin-bottom: 20px;
    background-color: #fff;
}

.introduce-content h1 {
    font-size: 24px;
    font-weight: normal;
    color: #333333;
    margin-bottom: 30px;
}
.introduce-content p {
    font-size: 14px;
    color: #333333;
    line-height: 28px;
    text-indent: 2em;
}
.slider-container {
    position: relative;
}
.slider-wrapper {
    width: 780px;
    margin: 0 auto;
    padding: 0 10px;
}
.slider-wrapper .prev {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 60;
    display: inline-block;
    font-size: 24px;
    color: #7f7f7f;
    width: 20px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    font-family: "黑体";
    position: absolute;
    top: 50%;
    margin-top: -18px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.slider-wrapper .next {
    right: 0px;
    display: inline-block;
    font-size: 24px;
    color: #7f7f7f;
    width: 20px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    font-family: "黑体";
    position: absolute;
    top: 50%;
    margin-top: -18px;
    cursor: pointer;
    z-index: 60;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.about-picture-wrapper {
    width: 100%;
    height: 420px;
    overflow: hidden;
    margin-bottom: 48px;
}
</style>
<script>
import zooms from "~/components/zoom.vue";
export default {
    data() {
        return {
            imgArray: [
                "http://www.qcterp.com/images/leader-a.jpg",
                "http://www.qcterp.com/images/leader-b.jpg",
                "http://www.qcterp.com/images/leader-c.jpg",
                "http://www.qcterp.com/images/leader-d.jpg",
                "http://www.qcterp.com/images/leader-a.jpg"
            ],
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000 //5秒切换一次
                },
                on: {
                    click: () => {
                        const clickedIndex = this.mySwiper.clickedIndex;
                        console.log(this.index + ":::" + clickedIndex);
                        if (clickedIndex !== "undefined") {
                            this.index = clickedIndex;
                        }
                    }
                },
                navigation: {
                    nextEl: ".slider-container .next",
                    prevEl: ".slider-container .prev"
                }
            },
            index: 0,
            showMask: false,
            winWidth: 0
        };
    },
    mounted() {
        window.onresize = () => {
            this.winWidth = window.innerWidth;
        };
    },
    components: {
        zooms
    },
    methods: {
        zoomMask() {
            this.showMask = true;
            var i = this.$refs.picture.getAttribute("data-index");
            this.$refs.zoom.goSlidePage(i); //滑动到第几个slider
        },
        closeZoom() {
            // console.log(1)
            
            this.showMask = !this.showMask;
        }
    },
    watch: {
        winWidth(val) {
            console.log(val);
            this.mySwiper.update();
        }
    }
};
</script>
