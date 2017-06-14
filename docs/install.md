> 参考：
> 1. [Vue.js实践：一个Node.js+mongoDB+Vue.js的博客内容管理系统](https://segmentfault.com/a/1190000006939687)
    + https://github.com/ciqulover/CMS-of-Blog
> 2. [Vue.js+Node.js+Mongodb+Express的前后端分离的个人博客](https://github.com/FatDong1/VueBlog)

---

## 项目构建

### 前端：Vue全家桶

+ Vue.js
+ vue-cli：官方脚手架，用于初始化项目
+ Vue-resource：是一个通过`XMLHttpRequest`和`JSONP`技术实现异步加载服务器端数据的Vue插件，提供了一般的HTTP请求接口和RESTful架构请求接口，并且提供了全局方法和Vue组件实例方法
    - [**segmentfault**：Vue_VueResource](https://segmentfault.com/a/1190000007087934)
+ Vue-router：官方路由插件。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 vue-router 添加进来，我们需要做的是，将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们。
    - [官方文档：vue-router 2](https://router.vuejs.org/zh-cn/)
+ VueX：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    - [官方文档：vuex](https://vuex.vuejs.org/zh-cn/intro.html)

### 后端

+ Node.js
+ MongoDB (mongoose)
+ Express

### 工具和语言

+ Webpack
+ ES6
+ Sass

在此，我将前后端建为两个项目，实现前后端分离解耦，前后端只需要约定好restful数据接口，和数据存取格式就OK了。

---

### 后端环境配置

1. 安装 Node.js
2. 创建后端项目并安装express

``` shell
mkdir douban-serve && cd douban-serve
npm init
npm install express --save
``` 
3. Hello World

在主目录下新建入口文件`app.js`，并敲入一下代码：

``` javascript
// app.js
var express = require('express');
var app = express();

// 设置端口为 8333
var port = process.env.PORT || 8333;

app.get('/', function(req, res) {
	res.send('Hello World!');
});

var server = app.listen(port, function() {
	var host = server.address().address;

	console.log("The app listening at http://%s:%s", host, port);
});
```
在CMD中通过如下命令启动此应用：

``` shell
node app.js 
```

至此，我们已经初步创建了一个node.js应用。

4. 通过Express生成器快速创建一个应用
+ 首先，我们需要__全局安装__`express-generator`

``` shell
npm install express-generator -g
```

+ 创建一个名为`appNode`的应用

``` shell
warning: the default view engine will not be jade in future releases
warning: use '--view=jade' or '--help' for additional options

create : appNode
create : appNode/package.json
create : appNode/app.js
create : appNode/public
create : appNode/routes
create : appNode/routes/index.js
create : appNode/routes/users.js
create : appNode/views
create : appNode/views/index.jade
create : appNode/views/layout.jade
create : appNode/views/error.jade
create : appNode/bin
create : appNode/bin/www
create : appNode/public/stylesheets
create : appNode/public/stylesheets/style.css

install dependencies:
> cd appNode && npm install

run the app:
> SET DEBUG=appnode:* & npm start

create : appNode/public/javascripts
create : appNode/public/images

```

用该方式创建的应用，目录如下：

``` shell
|—— bin
|   └── www
|—— public  // 静态资源文件夹
|   |—— images
|   |—— javascripts
|   └── stylesheets
|       └── style.css
|—— routes
|   |—— index.js
|   └── users.js
|—— views
|   |—— error.jade
|   |—— index.jade
|   └── layout.jade
|
|—— app.js  // 入口文件
└── package.json
```

+ 进入应用目录，安装依赖

``` shell
cd appNode && npm install
```

+ 启动应用

``` shell
SET DEBUG=appnode:* & npm start
```

__🍀 在此，我将采用第一种方式创建应用！__

---

### 🍀

- 安装依赖工具
    + serve-favicon : 请求网页的logo
    + path : 处理文件和目录路径的工具，详见[文档](https://nodejs.org/api/path.html)
    + cookie-parser : 
    + bodyParser :
    + logger

//// 放置，待整理
express: web 框架
express-session: session 中间件
connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
connect-flash: 页面通知提示的中间件，基于 session 实现
ejs: 模板
express-formidable: 接收表单及文件的上传中间件
config-lite: 读取配置文件
marked: markdown 解析
moment: 时间格式化
mongolass: mongodb 驱动
objectid-to-timestamp: 根据 ObjectId 生成时间戳
sha1: sha1 加密，用于密码加密
winston: 日志
express-winston: 基于 winston 的用于 express 的日志中间件
////

修改项目目录结构如下：

``` shell
|—— app
|   |—— controllers     // 数据控制
|       |—— index.js    
|       └── Totoro.js   // 为前端提供的数据接口，我们统一为 /totoro/...
|   |—— model           // 输出数据模块 
|   └── schemas         // 定义数据结构
|
|—— public              // 静态资源文件夹
|   |—— images
|   |—— javascripts
|   └── stylesheets
|       └── style.css
|
|—— routes
|   └── index.js        // 路由
|
|—— views               // 视图
|
|—— app.js  // 入口文件
└── package.json
```

我们先定义一个接口：当请求**/totoro/**时返回“Hello world”。

+ 首先，先在`app/controllers/Totoro.js`设置请求输出
``` javascript
exports.index = function(req, res) {
	res.status(200).send('ヾ(◍°∇°◍)ﾉﾞ Hello World.')
}
```

+ 修改路由文件 `routes/index.js`

``` javascript
var Index = require('../app/controllers/index');
var Totoro = require('../app/controllers/Totoro')

module.exports = function (app) {
	app.post('/', Index.index);
	app.post('/totoro', Totoro.index);
};
```

详细代码请见：