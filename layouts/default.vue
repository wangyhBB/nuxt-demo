<template>
    <div class="app-container">
        <div class="app-content">
            <nuxt/>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import footers from "~/components/footer.vue";
export default {
    components: {
        footers
    }
};
</script>
<style lang="scss">
.app-content{
    background-color: $bgColor;
}
</style>
>


