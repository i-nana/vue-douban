# msg-vue

> A [Vue.js](https://cn.vuejs.org/) project

## 环境搭建

1. Node.js & npm
2. [vue-cli](https://github.com/vuejs/vue-cli) 官方推荐，快速构建单页应用的脚手架
    +  Node.js (>=4.x, 6.x preferred), npm version 3+ and Git.
        - node：v6.11.0
        - npm：5.0.3
3. [vue-router](https://router.vuejs.org/zh-cn/) 路由
4. [Vuex](https://vuex.vuejs.org/zh-cn/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
4. [webpack](https://webpack.js.org/)
5. [Babel](http://babeljs.io/) is a JavaScript compiler.

---

### 开始

1. 全局安装 `vue-cli`

``` bash
npm install vue-cli -g
```

2. 创建一个基于 webpack 模板的项目

``` bash
vue init webpack myApp

# 此过程会需要输入一些项目基本信息：创建一个package.json文件和基本的项目结构。
? Project name myApp
? Project description A Vue.js project
? Author Lina <lina@enlightent.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "myApp".

   To get started:

     cd myApp
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack

```

项目目录结构如下：

``` bash
myApp
│  .babelrc
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .postcssrc.js
│  index.html
│  package.json
│  README.md
│          
├─build
│      build.js
│      check-versions.js
│      dev-client.js
│      dev-server.js
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│      
├─config        # 配置文件
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│      
├─node_modules  # 依赖模块
│  
├─src
│  │  App.vue
│  │  main.js
│  │  
│  ├─assets     # 静态资源
│  │      logo.png
│  │      
│  ├─components # 模板
│  │      Hello.vue
│  │      
│  └─router     # 路由
│          index.js
│          
├─static    
│      
└─test          # 测试

```



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


---

相关学习资料

1. [阮一峰：a collection of simple demos of Webpack](https://github.com/ruanyf/webpack-demos#demo01-entry-file-source)
2. [阮一峰：Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)