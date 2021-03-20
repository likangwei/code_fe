<template>
    <el-container class="container">
        <el-header>Header</el-header>
        <el-main class="main">
            <router-view />
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style lang="stylus" scoped>
@import "./layout.styl";
</style>
