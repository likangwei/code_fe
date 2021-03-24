<template>
    <el-row>
        <el-col :span="24" class="operation">
            <el-col :span="4" class="enter">
                <span class="subject" @click="showTopic"><i class="el-icon-s-unfold"></i>题目列表</span>
            </el-col>
            <el-col :span="16" class="enter">
                <span @click="preNextTopic(1)" class="subject"><i class="el-icon-s-promotion"></i>上一题</span>
                <span class="total">{{topicList.current}} / {{topicList.total}}</span>
                <span @click="preNextTopic(2)" class="subject"><i class="el-icon-s-promotion"></i>下一题</span>
            </el-col>
            <el-col :span="4" class="enter">
                <span class="subject" @click="submit"><i class="el-icon-s-promotion"></i>提交代码</span>
            </el-col>
        </el-col>


        <el-drawer
                direction="ltr"
                :with-header="false"
                :visible.sync="topicFlag"
                :before-close="closeTopic"
                size="40%">
            <el-row>
                <el-col :span="24" class="topicTitle">
                    <el-col :span="6">
                        <el-select @change="initTopic" v-model="subject">
                            <el-option
                                    v-for="item in subjectList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6"><el-input @input="searchTopic" v-model="search" placeholder="搜索题目"></el-input></el-col>
                    <el-col :span="6">
                        <el-dropdown @command="chooseCurrent" trigger="click">
                            <el-button>
                                {{topicList.current}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item :key="item" :command="item" v-for="item in topicList.total">{{item}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="6">
                        <i @click="preTopic" class="el-icon-caret-left"></i>
                        <i @click="nextTopic" class="el-icon-caret-right"></i>
                    </el-col>
                </el-col>
                <el-col :span="24" class="topicListBox">
                    <el-col @click.native="chooseTopic(item)" :key="item.grade" :span="24" class="topicList" v-for="item in topicList.list">
                        #{{item.grade}} {{item.title}}
                        <span :class="`color${item.difficulty}`">{{difficulty(item.difficulty)}}</span>
                    </el-col>
                </el-col>
            </el-row>
        </el-drawer>
    </el-row>
</template>

<script>
    export default {
        name: "operation",
        data(){
            return{
                topicFlag: false,
                topicList: {
                    current: 3,
                    page: 10,
                    total: 12,
                    list: [
                        {
                            title: '二叉树的层序遍历',
                            grade: '123',
                            difficulty: 1,
                        },
                        {
                            title: '二叉树的最小深度',
                            grade: '232',
                            difficulty: 3,
                        },
                        {
                            title: '将有序数组转换为二叉搜索树',
                            grade: '111',
                            difficulty: 2,
                        }
                    ],
                },
                subject: '1',
                subjectList: [
                    {
                        label: '全部题目',
                        value: '1',
                    },
                    {
                        label: '热题',
                        value: '2',
                    }
                ],
                search: '',
            }
        },
        created() {

        },
        methods:{
            showTopic(){
                this.topicFlag = true;
                this.initTopic();
            },
            initTopic(current, page, userId){
                console.log(current, page, userId)
                //  TODO 初始化答题列表
                this.topicList.current = current;
                this.topicList.page = page;

            },
            closeTopic(){
                this.topicFlag = false;
            },
            difficulty(val){
                if(val === 1) return '简单';
                else if(val === 2) return '中等';
                else if(val === 3) return '困难';
            },
            chooseTopic(info){

                this.closeTopic();

                this.$emit('chooseTopic', info)
            },
            searchTopic(){
                this.initTopic();
            },
            preTopic(){
                if(this.topicList.current <= 1) return;
                this.initTopic(this.topicList.current - 1,this.topicList.page,12);
            },
            nextTopic(){
                if(this.topicList.current >= this.topicList.total) return;
                this.initTopic(this.topicList.current + 1,this.topicList.page,12);
            },
            chooseCurrent(current){
                this.initTopic(current,this.topicList.page,12);
            },

            submit(){
                this.$emit('submit');
            },
            preNextTopic(type){
                this.$emit('preNextTopic', { type, });
            },

        }
    }
</script>

<style lang="stylus" scoped>
@import "./operation.styl";
</style>
