// pages/pt/pt.js
var app = getApp()
Page({

  /**
   * 页面的初始数�?
   */
  data: {
    input_title:null,
    input_content:null,
    money:null
  },
  btnClick: function(){
      console.log(this.data.input_content),
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000
      })
  },
  inp_title: function(e){
    this.setData({input_title: e.detail.value})
  },
  inp_content:function(e){
    this.setData({ input_content: e.detail.value })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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