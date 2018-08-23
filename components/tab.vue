<template>
    <div :class="['targetTabs']" id="targetTabs">
        <div :class="['target-item',index == showIndex ? 'aboutActive':'']" v-for="(item,index) in targetArray" :key="index" @click="targetClick(index)">
            <span class="blank" v-if="showIndex == index"></span>
            {{item}}
        </div>
    </div>
</template>
<style lang="scss" >
.targetTabs {
    display: flex;
    width: 100%;
    flex-direction: column;
    .target-item {
        position: relative;
        color: #333333;
        width: 100%;
        height: 52px;
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
        line-height: 52px;
        font-size: 18px;
        background: #fff;
        .blank {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 5px;
            background-color: #f8404b;
        }
    }
    .target-item.aboutActive {
        color: #f8404b;
    }
}
.targetTabs.fixedContent {
    max-width: 216px;
    position: fixed;
    top: 80px;
    z-index: 100;
}
</style>
<script>
export default {
    props: {
        targetArray: {
            // 必须提供字段
            required: true
        },
        showIndex: {
            // 可选字段，有默认值
            default: 0
        }
    },
    methods: {
        targetClick(index) {
            this.$emit("showbox", index);
        },
        handleScroll() {
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            var offsetTop =
                document.querySelector("#targetTabs").offsetTop ;
            console.log(scrollTop);
            console.log(offsetTop);
            if (scrollTop >= offsetTop) {
                this.tabBarFixed = true;
            } else {
                this.tabBarFixed = false;
                // console.log(0)
            }
        }
    },
    data() {
        return {
            tabBarFixed: false
        };
    },
    mounted() {
        // window.addEventListener("scroll", this.handleScroll);
    }
};
</script>

