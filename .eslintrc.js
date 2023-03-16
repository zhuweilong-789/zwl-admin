module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser' // 解析器
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'never',
          normal: 'always', //配置自动闭合标签
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
