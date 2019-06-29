// pages/querylist/querylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryList: []
  },
  
  //part 1: 载入数据
  getQueryList: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'queryList',
      data: {
        start: this.data.queryList.length,
        count: 10
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        queryList: this.data.movieList.concat(JSON.parse(res.result).subjects)
        //JSON.parse() 方法将其转换为 JavaScript 对象：
      });
      wx.hideLoading();
    }).catch(err => {
      console.error(err);
      wx.hideLoading();
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getQueryList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // this.getQueryList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})