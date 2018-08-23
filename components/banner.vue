<template>
    <el-carousel :indicator-position="position" :interval="interval" :height="height">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
            <el-row>
                <el-col :span="24">
                    <img :src="item.href" ref="imgH">
                </el-col>
            </el-row>
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    props:['banner','position','interval','height']
}
</script>

