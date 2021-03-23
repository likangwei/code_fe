<template>
    <el-row>
        <el-col :span="24" class="langs">
            <el-select v-model="lang" @change="initEditor">
                <el-option
                        v-for="item in langList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="24" ref="codeEdit" class="codeEdit">
            <textarea class="code" ref="code"  cols="30" rows="10"></textarea>
        </el-col>
    </el-row>
</template>

<script>
    // import { code } from 'vue-codemirror';


    import 'codemirror/theme/ambiance.css';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/addon/hint/show-hint.css';
    let CodeMirror = require('codemirror/lib/codemirror');

    require('codemirror/addon/edit/matchbrackets');
    require('codemirror/addon/selection/active-line');
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/sql/sql');
    require('codemirror/mode/python/python');
    require('codemirror/mode/css/css');
    require('codemirror/mode/go/go');
    require('codemirror/mode/nginx/nginx');
    require('codemirror/mode/php/php');
    require('codemirror/mode/vue/vue');
    require('codemirror/mode/dart/dart');
    // require('codemirror/mode/');

    require('codemirror/addon/hint/javascript-hint');
    require('codemirror/addon/hint/sql-hint');


    export default {
        name: "answer",
        data(){
            return{
                clientHeight: 0,
                lang: 'python',
                langList: [
                    {
                        label: 'Javascript',
                        value: 'javascript',
                    },
                    {
                        label: 'Python',
                        value: 'python',
                    },
                    {
                        label: 'SQL',
                        value: 'sql',
                    },
                    {
                        label: 'GO',
                        value: 'go',
                    },
                    {
                        label: 'ngInx',
                        value: 'nginx',
                    },
                    {
                        label: 'PHP',
                        value: 'php',
                    },
                    {
                        label: 'Dart',
                        value: 'dart',
                    }
                ],
            }
        },
        mounted() {
            this.clientHeight = this.$refs.codeEdit.$el.clientHeight;
            console.log(this.$refs.codeEdit.$el.clientHeight);
            this.initEditor();
        },
        created() {

        },
        methods:{
            initEditor(){
                let editor = CodeMirror.fromTextArea(this.$refs.code, {
                    mode: this.lang,//选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
                    indentWithTabs: true,
                    smartIndent: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    matchBrackets: true,
                    fixedGutter: false,
                    height: `${this.clientHeight}px`,
                    //theme: theme,
                    // autofocus: true,
                    extraKeys: {'Ctrl': 'autocomplete'},//自定义快捷键
                    hintOptions: {//自定义提示选项
                        tables: {
                            users: ['name', 'score', 'birthDate'],
                            countries: ['name', 'population', 'size']
                        }
                    }
                });
                editor.on('cursorActivity', function () {
                    editor.showHint()
                });
                editor.setSize('auto',`${this.clientHeight}px`);
                editor.setValue( `
//  代码示例：
class counting_sort(object):
  def _counting_sort(self, alist, k):
    alist3 = [0 for i in range(k)]
    alist2 = [0 for i in range(len(alist))]
    for j in alist:
      alist3[j] += 1
    for i in range(1, k):
      alist3[i] = alist3[i-1] + alist3[i]
    for l in alist[::-1]:
      alist2[alist3[l]-1] = l
      alist3[l] -= 1
    return alist2

  def __call__(self, sort_list, k=None):
    if k is None:
      import heapq
      k = heapq.nlargest(1, sort_list)[0] + 1
    return self._counting_sort(sort_list, k)
                `)
            },
        }
    }
</script>

<style lang="stylus" scoped>
@import "./answer.styl";
</style>
