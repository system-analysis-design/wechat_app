// pages/querylist/querylist.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ques: null
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用数据库
    const db = wx.cloud.database()
    //这里问题出现在权限，把权限设置为最高即可
    db.collection('Query').get({
      success: res => {
        this.setData({
          ques: res.data
        })
        console.log(res)
        console.log("数据库查询成功")
      },
      fail: err => {
        wx.showToast({
          title: "数据库查询失败"
        })
        console.error(err)
      }
    })
  },

  jumpToDetail: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../Answer/Answer?id=' + e.currentTarget.dataset.id,
    })
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