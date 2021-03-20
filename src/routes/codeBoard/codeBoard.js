/*
* author: the.one
*
* time: 2021-03-20
*
* desc: 在线答题
*
* */

// 在线答题
const CodeBoard = (r) => require.ensure([], () => r(require('@/views/codeBoard/codeBoard.vue')), 'CodeBoard');


export default [
    {
        path: '/codeBoard',
        name: 'codeBoard',
        component: CodeBoard,
    },
];
