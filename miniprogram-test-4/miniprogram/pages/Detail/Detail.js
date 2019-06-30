// pages/Detail/Detail.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ques: null,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    // console.log(options);
    // console.log(options.id);
    // console.log("检查optionsId")
    db.collection('Query').doc(options.id).get({
      success: res => {
        console.log("数据库查询成功")
        // console.log(res.data)
        console.log(res.data.questions)
        this.setData({
          ques: res.data
        })
        console.log(res.data.total);
        // console.log("debug得到的数据")
        this.setData({
          total: res.data.total
        })

      },
      fail: err => {
        wx.showToast({
          title: "数据库查询失败"
        })
        console.error(err)
      },
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