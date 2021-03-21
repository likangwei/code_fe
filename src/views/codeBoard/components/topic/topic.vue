<template>
    <el-row class="mavonBox">
        <mavonEditor
                     :value="md"
                     ref="md"
                     :toolbarsFlag="false"
                     :editable="false"
                     :subfield="false"
                     :scrollStyle="true"
                     :defaultOpen="'preview'"
                     :ishljs="true"
                     class="md">
        </mavonEditor>
    </el-row>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css';
    export default {
        name: "topic",
        components:{
            mavonEditor,
        },
        data(){
            return{
                md: '',
            }
        },
        mounted() {

        },
        created() {
            this.md = `# code_fe

#### Author：the.one


## Project setup
\`\`\`
yarn install
\`\`\`

### Compiles and hot-reloads for development
\`\`\`
yarn serve
\`\`\`

### Compiles and minifies for production
\`\`\`
yarn build
\`\`\`

### Lints and fixes files
\`\`\`
yarn lint
\`\`\`

### Customize configuration
See [the.one Blog](https://blog.csdn.net/c_Breath/article/details/104777130).



            `;
        },
        methods:{

        }
    }
</script>

<style lang="stylus" scoped>
@import "./topic.styl";
</style>
