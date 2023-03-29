module.exports = {
    root: true,//停止在父级目录中寻找
    env: {
      //browser: true, // 浏览器全局变量
      //es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
      node: true, // 浏览器全局变量
      //ActiveXObject: true,
    },
    'extends': [
      'plugin:vue/essential', //vue官方eslint插件配置eslint-plugin-vue
      'eslint:recommended'   // eslint 推荐版本 recommended
    ],
    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
       //在rules中添加自定义规则
       //关闭组件命名规则
       'vue/no-multiple-template-root':'off',
       'vue/multi-word-component-names': 'off'
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true,
          //mocha: true
        }
      }
    ]
  }