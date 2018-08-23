<template>
    <div class="errow-container">
        <headers></headers>
        <h2 v-if="error.statusCode==404">
            <img src="~static/images/404.png" alt="">
            <h1>404 . Not Found</h1>
        </h2>
        <h2 v-else>500服务器错误</h2>
        <ul>
            <li>
                <nuxt-link to="/">返回首页</nuxt-link>
            </li>
        </ul>
    </div>
</template>
 
<script>
import headers from "~/components/header.vue";

export default {
    props: ["error"],
    components: {
        headers
    }
};
</script>
<style lang="scss" scoped>
.errow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    height: 100vh;
    flex-direction: column;
    h2 {
        text-align: center;
        font-size: 60px;
        margin: 40px 0 20px;
    }
}

ul li {
    font-size: 30px;
}
@media (max-width: 1240px) {
    .errow-container {
        margin: 0 15px;
        h2 {
            text-align: center;
            font-size: 40px;
            margin: 40px 0 20px;
            h1 {
                margin: 20px 0;
            }
        }
    }
    ul li {
        font-size: 20px;
    }
}
</style>
