<template>
    <div class="aboutUs-wrapper">
        <headers :imgSrc="imgSrc" :selectIndex="selectIndex"></headers>
        <div class="about-us-sliderBg">
            <img src="~static/images/banner00.jpg">
        </div>
        <div class="pc-aboutUs">
            <div class="pc-aboutUs-wrapper">
                <div :class="['about-left',tabBarFixed ? 'fixedContent' : '']" ref="targetTabs">
                    <tabs :targetArray="targetArray" :showIndex="showIndex" @showbox="showbox"></tabs>
                </div>
                <div class="about-right">
                    <div class="about-infoItem" :is="currentView">

                    </div>
                </div>
            </div>
        </div>
        <helps></helps>
    </div>
</template>
<script>
import headers from "~/components/header.vue";
import helps from "~/components/help.vue";
import tabs from "~/components/tab.vue";
import introduces from "./introduce.vue";
import cultures from "./culture.vue";
import contacts from "./contact.vue";
import branchs from "./branch.vue";
export default {
    data() {
        return {
            imgSrc: "../images/login-logo.png",
            selectIndex: 2,
            targetArray: ["公司简介", "公司文化", "联系我们", "分支结构"],
            showIndex: 0,
            currentView: introduces,
            tabBarFixed: false,
            offsetTop: 0
        };
    },
    components: {
        headers,
        helps,
        tabs,
        introduces,
        cultures,
        contacts,
        branchs
    },
    methods: {
        showbox(index) {
            this.showIndex = index;
            switch (index) {
                case 0: {
                    this.currentView = introduces;
                    break;
                }
                case 1: {
                    this.currentView = cultures;
                    break;
                }
                case 2: {
                    this.currentView = contacts;
                    break;
                }
                case 3: {
                    this.currentView = branchs;
                    break;
                }
            }
        },
        handleScroll() {
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop >= this.offsetTop) {
                this.tabBarFixed = true;
            } else {
                this.tabBarFixed = false;
            }
        }
    },
    head() {
        return {
            title: "关于我们",
            meta: [
                {
                    hid: "description",
                    name: "news",
                    content: "全城淘关于我们"
                }
            ]
        };
    },
    mounted() {
        this.offsetTop = this.$refs.targetTabs.offsetTop;
        window.addEventListener("scroll", this.handleScroll);
    }
};
</script>
<style lang="scss">
.aboutUs-wrapper {
    .about-us-sliderBg {
        width: 100%;
        max-height: 510px;
        overflow: hidden;
    }
    .pc-aboutUs {
        padding: 22px 0 80px;
        margin: 0 auto;
        max-width: 1200px;
        overflow: hidden;
        .pc-aboutUs-wrapper {
            float: left;
            width: 100%;
            .about-left {
                margin-left: 10px;
                float: left;
                width: 216px;
                border-top: 1px solid #e5e5e5;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
                overflow: hidden;
                background: #fff;
            }
            .about-left.fixedContent {
                position: fixed;
                top: 80px;
                z-index: 100;
            }
            .about-right {
                float: right;
                width: 880px;
                min-height: 800px;
                margin-right: 30px;
            }
        }
    }
}
@media screen and (max-width: 1155px) {
    .about-left {
        display: none;
    }
    .aboutUs-wrapper .pc-aboutUs .pc-aboutUs-wrapper .about-right {
        width: 80%;
        overflow: hidden;
        margin-right: 108px;
    }
    .slider-wrapper {
        width: 740px;
    }
}
</style>


