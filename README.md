# 个人博客开发

## 前言

一直想用node写个后台来用用，主要用来尝试使用node搭建接口，大部分时间精力花费在后台接口的划分与搭建。最后做了一个个人博客网站(包括后台管理)。

博客内容展示：主要是用来展示MarkDown文件格式的笔记(记录学习)。

接口项目地址（node+koa2）：https://github.com/BlackChao-Script/blogApi

后台管理项目地址(vue3+vite)：https://github.com/BlackChao-Script/blog_admin

## 技术栈

Vue3全家桶+Vite+Ts+Axios+ElementPlus+Node+Koa2+MySQL+Sequelize

渲染MarkDown文件主要用 **v-md-editor** 插件

选择**v-md-editor**的主要原因是他对Vue3+Ts+vite的支持，还有一个中文文档，比较友好

## 项目运行

```
git clone https://github.com/BlackChao-Script/blog.git
// 进入项目根目录 (下载依赖)
npm install
// 运行
npm run dev
```

## 项目目录

	.
	|-- index.html
	|-- vite.config.ts										
	|-- src													// 源码目录
	    |-- App.vue											 // 页面入口文件
	    |-- env.d.ts										 // ts导入排错
	    |-- main.ts											 // 程序入口文件
	    |-- api                                                  // 请求接口
	    |-- assets											 // 静态资源文件
	    |-- components							               // 组件
	    |-- router											 // 路由
	    |-- store											 // vuex状态管理
	    |-- style											 // 样式
	    |-- view											 // 页面
	        |-- aboutMe										  // 关于我页面
	        |-- home                                              // 首页
	        |-- leaveWord						                // 留言
	        |-- lists                                             // 博文列表
	        |-- listsDet                                          // 博文详细
	        |-- sortDet									       // 分类详细

