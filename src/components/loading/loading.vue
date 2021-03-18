<!--
 * author: the.one
 *
 * time: null
 *
 * optimizeTime: 2021-01-23
 *
 * desc: 加载loading组件
 *
-->
<template>
    <div  class="loading" id="vue-loading">
        <div class="loadEffect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading",
    }
</script>

<style lang="stylus" scoped>
    @import "./loading.styl";
</style>
