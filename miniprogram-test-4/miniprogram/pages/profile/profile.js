// pages/profile/profile.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Credit: 0
  },

  addQuery : function(event){
    console.log("添加调查问卷");
    console.log(event);
    wx.navigateTo({
      url: "../addQueryPage/addQueryPage",
    });
  },

  checkQuery: function (event) {
    console.log("查看自己的调查问卷");
    console.log(event);
    wx.navigateTo({
      url: "../myQueryPage/myQueryPage",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    console.log(app.globalData.userInfo.openid)
    db.collection('UsersInfo').where({
      _openid: app.globalData.userInfo.openid
    }).get({
      success: res => {
        this.setData({
          Credit: res.data[0].credit
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})