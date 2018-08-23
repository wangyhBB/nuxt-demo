<template>
    <div class="zoomMask" v-show="showMask">
        <div class="closeBtn" @click="closeZoom">
        </div>
        <div v-swiper:mySwiper="swiperOption" class="zoomContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item , index) in imgArray" :key="index">
                    <div class="swiper-zoom-container">
                        <img :src="item">
                    </div>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev" id="prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>
<script>
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
                zoom: true,
                pagination: {
                    el: ".zoomContainer .swiper-pagination"
                },
                navigation: {
                    nextEl: ".zoomContainer .swiper-button-next",
                    prevEl: ".zoomContainer .swiper-button-prev"
                }
            }
        };
    },
    props: {
        showMask: {
            default: false
        }
    },
    mounted() {
        //this.mySwiper.slideTo(3, 1000, false);//切换到第一个slide，速度为1秒
    },
    methods: {
        goSlidePage(index) {
            this.mySwiper.slideTo(index, 500, false); //切换到第一个slide，速度为1秒
        },
        closeZoom(){
            this.$emit('closeZoom')
        }
    }
};
</script>
<style scoped>
.zoomMask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
    z-index: 10000;
    display: flex;
    align-items: center;
}
.swiper-wrapper {
    height: 100%;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
    background-image: url("~static/images/icons.png");
    width: 50px;
    height: 50px;
    left: auto;
    background-position: -78px 13px;
    background-size: auto;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
    background-image: url("~static/images/icons.png");
    width: 50px;
    height: 50px;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: -32px 13px;
}
.closeBtn {
    top: 0;
    right: 0;
    position: absolute;
    z-index: 9999;
    background-position: 15px 12px;
    width: 50px;
    height: 50px;
    background-image:url("~static/images/icons.png");
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 15px 13px;
}
</style>
