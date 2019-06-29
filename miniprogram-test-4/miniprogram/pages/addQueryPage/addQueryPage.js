// miniprogram/pages/addQueryPage/addQueryPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryTitle : '',
    queryDes: null,
    queryReward: null,
    queryOriented: null,

    quesTypeArray: '单选题',
    queses: [],//该问卷下所有已有的题目
    quesorder: 0,//题目的指数
    current: "queryDetail",  //默认在调查信息界面
    // current: "questionList",
    // current: "option",

    
    nextquesid: null,
    user: null,
    time: null,       //当前时间
    timetab: null,    //当前时间距1970年1月1日之间的毫秒数
  },

  queryComplete: function (e) {
    if (!(e.detail.value.queryTitle && e.detail.value.queryDes && e.detail.value.queryReward && e.detail.value.queryOriented))    {
      // console.log(e.detail.value.queryTitle)
      // console.log(e.detail.value.queryDes)//为何queryDes未定义？？？ => 名字打错了
      // console.log(e.detail.value.queryReward)
      // console.log(e.detail.value.queryOriented)
      wx.showToast({
        title: '输入不能为空',
      })
      return
    }
    if (!parseInt(e.detail.value.queryReward)) {
      wx.showToast({
        title: '报酬请输入数字',
      })
      return
    }
    this.setData({
      current: "questionList",
      queryTitle: e.detail.value.queryTitle,
      queryDes: e.detail.value.queryDes,
      queryReward: parseInt(e.detail.value.queryReward),
      queryOriented: e.detail.value.queryOriented
    })
    // console.log(e.detail.value.queryTitle);
    // console.log(e.detail.value.queryDes)
    // console.log(e.detail.value.queryReward)
    // console.log(e.detail.value.queryOriented)
  },


  newques: function () {
    this.setData({
      current: "option",
    })
  },

  quesComplete: function (e) {
    if (!e.detail.value.quesContent) {
      wx.showToast({
        title: '请输入题目内容',
      })
      return
    }
    this.setData({
      quesorder: this.data.quesorder + 1,
    })
    var quesess = this.data.queses.concat([{
      quesContent: e.detail.value.quesContent,
      questionTypeid: 1 + parseInt(this.data.questionTypeid),
      quesOrder: this.data.quesorder,
    }])
    console.log(quesess)
    this.setData({
      queses: quesess,
      questionTypeid: 0,
    })
    this.setData({
      current: "questionList",
    })
  },



  completeAll: function () {
    //调用云数据库
    const db = wx.cloud.database()
    if (this.data.queses.length == 0) {
      wx.showToast({
        title: '请添加新题',
      })
      return
    }

    db.collection('Query').add({
      data: {
        title: this.data.queryTitle,
        description: this.data.queryDes,
        questions: this.data.queses,
        total: 0,
        isLiving: true,
        userName: getApp().globalData.userInfo.nickName,//globalData存在
        reward: this.data.queryReward
      },
      success: res => {
        wx.showToast({
          title: '发布问卷成功',
        })
        console.log("数据库新增记录成功")
        console.log(res)
        wx.reLaunch({
         url: '../profile/profile',
        })
      },
      fail: err => {
        wx.showToast({
          title: '创建问卷失败'
        })
        console.error(err)
      }
    })
    wx.showToast({
      title: '正在提交',
      icon: 'loading',
      duration: 10000,
      mask: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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