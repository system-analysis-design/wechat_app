# Architecture Design
我们这次开发挣闲钱这个应用用的是微信小程序，微信小程序与web应用很像，但是原理不同，微信小程序是运行在微信应用内的，不是运行在浏览器上，所以JS的一些DOM操作在这里不适用。小程序有自己的一套标记语言（wxml），样式语言(wxss)，与web开发的html和css思想是一致的。

## 微信小程序架构
架构分为视图层，逻辑层，组件，API几个部分。视图层负责页面结构、样式和数据展示，用wxml、wxss语言编写。逻辑层负责业务逻辑，调用API等，由js编写。视图层和逻辑层类似MVVM模式，逻辑层只需对数据对象更新，就可以改变视图层的数据显示，这个很像vue，不知道底层是不是vue! 组件是视图层封装好的基础组件，如按钮、输入框等！API提供了访问手机设备、网络、服务器、微信平台接口等能力。如下图

![](/image/Architecture1.png)

## 开发框架
每个小程序在微信里是个应用(App)，App中又包含了多个页面(Page)。App有属于他的生命周期和目录结构，Page也有属于他的生命周期和目录结构。如下图：

![](/image/Architecture2.png)

更详细资料请查看：
[微信小程序开发文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html)