// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    //headshot
    iconSrc: '../icons/user2.png',
    // orderItems
    orderItems: [{
        typeId: 0,
        name: '进行中',
        url: 'bill',
      imageurl: '../../icons/jinxingzhong.png',
      },
      {
        typeId: 1,
        name: '已完成',
        url: 'bill',
        imageurl: '../../icons/yiwancheng.png',
      },
      {
        typeId: 2,
        name: '已发布',
        url: 'bill',
        imageurl: '../../icons/yifabu.png'
      },
      {
        typeId: 3,
        name: '被完成',
        url: 'bill',
        imageurl: '../../icons/beiwancheng.png'
      }
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})