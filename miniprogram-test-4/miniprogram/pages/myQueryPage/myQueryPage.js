// pages/myQueryPage/myQueryPage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ques: null
  },
  
  jumpToDetail: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../Detail/Detail?id=' + e.currentTarget.dataset.id,
    })
  },

  finishQuery: function (e) {
    const db = wx.cloud.database()
    db.collection('Query').doc(e.target.dataset._id).update({
      data: {
        isLiving: false,
      },
      success: res => {
        wx.showToast({
          title: '当前问卷已完成',
        })
        this.onLoad()
      },

      fail: err => {
        console.error(err)
      }
    })
  },

  deleteQuery: function (e) {
    const db = wx.cloud.database()
    db.collection('Query').doc(e.target.dataset._id).remove({
      success: res => {
        wx.showToast({
          title: '问卷已删除',
        })
        this.onLoad()
      },
      fail: err => {
          console.error(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用数据库
    const db = wx.cloud.database()
    console.log(app.globalData.userInfo.openid)
    db.collection('Query').where({
      _openid: app.globalData.userInfo.openid
    }).get({
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