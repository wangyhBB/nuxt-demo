<template>
    <div class="index-wrapper">
        <headers ></headers>
        <div class="pc-banner" id="pc-banner">
            <!-- pc banner -->
            <viewBanner :banner="banner" :position="position" :interval="interval" :height="imgHeight"></viewBanner>
        </div>
        <div class="mb-banner" style="padding-top: 60px;" id="mb-banner">
            <!-- mb banner -->
            <viewBanner :banner="mBbanner" :position="position" :interval="interval" :height="mbImgHeight"></viewBanner>
        </div>
        <div class="index-poster">
            <el-row>
                <el-col :span="24" class="poster-header">他们都选择使用全城淘</el-col>
                <el-col :span="24">
                    <div class="poster-wrapper">
                        <img src="~static/images/seller_logo.png" class="pc-poster-img">
                        <img src="~static/images/seller_logo_sj.jpg" class="mb-poster-img">
                    </div>
                </el-col>
            </el-row>
        </div>
        <helps></helps>
    </div>
</template>

<script>
import viewBanner from "~/components/banner.vue";
import helps from "~/components/help.vue";
import headers from "~/components/header.vue";
export default {
    data() {
        return {
            banner: [
                { href: "../images/banner_sy.jpg" },
                { href: "../images/banner_sy.jpg" }
            ],
            mBbanner: [
                { href: "../images/sj_banner.jpg" },
                { href: "../images/sj_banner.jpg" }
            ],
            imgHeight: "700px",
            mbImgHeight: "9.7rem",
            position: "inside",
            interval: 4000,
            // imgSrc:'../images/index-logo.png'
        };
    },
    components: {
        viewBanner,
        headers,
        helps
    },
    mounted() {
        var _this = this;
    },
    created() {
        if (typeof window !== "undefined") {
            //do something
            this.window = window;
            this.imgHeight = this.window.innerWidth * 880 / 1920 + "px";
            this.window.onresize = () => {
                this.imgHeight = this.window.innerWidth * 880 / 1920 + "px";
            };
        }
    }
};
</script>
<style lang="scss" >
.index-wrapper {
    background: #fff;
}
#pc-banner .el-carousel__indicators {
    bottom: 12px !important;
}
#mb-banner .el-carousel__indicators {
    bottom: 0.4rem !important;
}
.el-carousel__item {
    color: #475669;
    font-size: 18px;
    height: auto;
}
.mb-banner {
    display: none;
}
@media screen and (max-width: 750px) {
    .pc-banner {
        display: none;
    }
    .mb-banner {
        display: block;
    }
}
.index-poster {
    margin-top: 80px;
    margin-bottom: 80px;
    background-color: #ffffff;
}
.poster-header {
    // padding-top: 30px;
    text-align: center;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: 0px;
    color: #000000;
    margin-bottom: 80px;
}
.poster-wrapper {
    text-align: center;
    img {
        margin: 0 auto;
    }
}
.mb-poster-img {
    display: none;
}
@media screen and(max-width:1200px) {
    .poster-wrapper img.pc-poster-img {
        width: 90%;
    }
}
@media screen and(max-width:750px) {
    .index-poster {
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
    }
    .poster-header {
        font-size: 18px;
        margin-bottom: 0.2rem;
        font-size: 0.4rem;
    }
    .poster-wrapper img.pc-poster-img {
        display: none;
    }
    .poster-wrapper img.mb-poster-img {
        display: block;
        width: 92%;
        margin: 0 auto;
    }
}
</style>


