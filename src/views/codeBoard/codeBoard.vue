<template>
    <el-row class="display">
        <el-col :span="24"  class="flex">
            <el-col :span="12" class="autoScroll">
                <Topic></Topic>
            </el-col>
            <el-col :span="12" class="autoScroll">
                <Answer ref="code"></Answer>
            </el-col>
        </el-col>
        <el-col class="footer" :span="24">
            <Operation @preNextTopic="preNextTopic" @submit="submit" @chooseTopic="chooseTopic"></Operation>
        </el-col>
    </el-row>
</template>

<script>
    import Topic from './components/topic/topic';
    import Answer from './components/answer/answer';
    import Operation from './components/operation/operation';
    export default {
        name: "codeBoard",
        components:{
            Topic,
            Answer,
            Operation,
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
            chooseTopic(info){
                console.log(info);
            },
            submit(){
                console.log(this.$refs.code.editor.getValue());
            },
            preNextTopic(type){
                console.log(type);
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "./codeBoard";
</style>
