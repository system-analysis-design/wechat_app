// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logged: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
      wx.reLaunch({
        url: '../profile/profile',
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(app.globalData.userInfo)
      }
    } else {
      // 版本兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.switchTab({
            url: '../profile/profile',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      })
    }
  },


  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  // how to get user's openid and add user's info into database
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.userInfo["credit"] = 10  //什么意思？
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    wx.showToast({
      title: '登录中',
      icon: 'loading',
      duration: 1000,
      mask: true
    })

    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('云函数login调用成功')
        console.log(res.result.openid)
        app.globalData.userInfo.openid = res.result.openid
        console.log(app.globalData.userInfo)
        const db = wx.cloud.database()
        db.collection('UsersInfo').where({
          _openid: app.globalData.userInfo.openid
        }).get({
          success: res => {
            //数据库里有用户信息
            if (res.data.length != 0) {
              app.globalData.userInfo = res.data[0]
              console.log("成功获取用户信息")
              console.log(app.globalData.userInfo)
              wx.reLaunch({
                url: '../profile/profile'
              })
            }

            else {
              db.collection('UsersInfo').add({
                data: app.globalData.userInfo,
                success: res => {
                  console.log('数据库成功插入用户信息')
                  console.log(res._id)
                  wx.reLaunch({
                    url: '../profile/profile'
                  })
                },
                fail: err => {
                  console.error(err)
                }
              })
            }

          },
          fail: err => {
            console.log("获取用户信息失败")

          }
        })
      },
      fail: err => {
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