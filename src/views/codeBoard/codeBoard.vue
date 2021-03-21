<template>
    <el-row class="display">
        <el-col :span="24"  class="flex">
            <el-col :span="12">
                <Topic></Topic>
            </el-col>
            <el-col :span="12">
                <Answer></Answer>
            </el-col>
        </el-col>
        <el-col class="footer" :span="24">
            Footer
        </el-col>
    </el-row>
</template>

<script>
    import Topic from './components/topic/topic';
    import Answer from './components/answer/answer';
    export default {
        name: "codeBoard",
        components:{
            Topic,
            Answer,
        },
        data(){
            return{

            }
        },
        mounted() {

        },
        created() {

        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
@import "./codeBoard";
</style>
