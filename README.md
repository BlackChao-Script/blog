# 个人博客开发

## 前言

一直想用 node 写个后台来用用，主要用来尝试使用 node 搭建接口，大部分时间精力花费在后台接口的划分与搭建。最后做了一个个人博客网站(包括后台管理)。

博客内容展示：主要是用来展示 MarkDown 文件格式的笔记(记录学习)。

接口项目地址：https://github.com/BlackChao-Script/blogApi

后台管理项目地址：

## 技术栈

Vue3 全家桶+Vite+Ts+Axios+ElementPlus+Node+Koa2+MySQL+Sequelize

渲染 MarkDown 文件主要用 **v-md-editor** 插件

选择**v-md-editor**的主要原因是他对 Vue3+Ts+vite 的支持，还有一个中文文档，比较友好

## 项目运行

```
git clone https://github.com/BlackChao-Script/blog.git
// 进入项目根目录 (下载依赖)
npm install
// 运行
npm run dev
```