var newsData = require("../../data/newdata.js")
// pages/rt/rt.js
var app = getApp()
Page({

  /**
   * 页面的初始数�?
   */
  data: {
      indicaaator_dots:true,
      autoplay:true,
      publishericon: "../../icons/user1.png",
      publishername:"张三",
      money:"2元",
      pdate:"2019/6/24",
      title:null,
      intro:"明天18：00前去丰巢11号取快递。",
      useData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      useData:newsData.initData
    })
    // wx.setStorageSync('key', 'data')
    
    
    console.log(wx.getStorageSync('key'));
  },
  btnfun: function() {
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面初�?�渲染完�?
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的�?�理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分�?
   */
  onShareAppMessage: function () {

  }
})