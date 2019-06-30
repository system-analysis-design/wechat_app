// pages/Detail/Detail.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    ques: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    //获得调查问卷的ID
    this.setData({
      id: event.id
    })
    const db = wx.cloud.database()
    db.collection('Query').where({
      _id: this.data.id
    }).get({
      success: res => {
        this.setData({
          ques: res.data[0]
        })
        console.log(res.data)
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