// pages/Answer/Answer.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ques: null,
    answerRes: [],
  },

  listenerRadioGroup: function (e) {
    console.log(e.detail.value);
    
  },

  submitQuery: function (e) {
    
    
    // console.log(e);
    // console.log(e.detail)
    console.log(e.detail.value)
    console.log("查看detailValue")

    // console.log(this.data.ques.questions);
    // console.log("查看ques内容")//接受到了question，但每个question的values为""
    for (let i = 1; i <= this.data.ques.questions.length; i++) {
      if (!e.detail.value["question" + i]){
        wx.showToast({
          title: '有未回答问题'
        });
        return;
      }
    }
    //此时成功获取了题目和答案的集合

    var answerRes = []
    var optionYesNumber = 0
    for (var i = 0; i < this.data.ques.questions.length; i++) {
      //创建索引
      var key = "question" + this.data.ques.questions[i].quesIndex;
      //取值
      var optionYesNumber = parseInt(e.detail.value[key])
      answerRes = answerRes.concat({optionYesNumber})
    }
    console.log(answerRes[0].optionYesNumber)
    console.log("输出答案结果")

    
    //添加选择"是"的人数
    for (var i = 0; i < this.data.ques.questions.length; i++) {
      if (answerRes[i].optionYesNumber){
        this.data.ques.questions[i].optionYesNum+=1;
      }
      console.log(this.data.ques.questions[i].optionYesNum)
      console.log("debug");
    }
    console.log(this.data.ques)



    const db = wx.cloud.database()
    db.collection('Query').doc(this.data.ques._id).update({
      data: {
        questions: db.command.set(this.data.ques.questions),
        total: db.command.inc(1)
      },
      success: res => {
        console.log('问卷回答成功')
      },
      fail: err => {
        console.error(err)
      }
    })
    wx.showToast({
      title: '正在提交',
      icon: 'loading',
      duration: 10000,
      mask: true
    })
    // 对用户进行奖励
    db.collection('UsersInfo').doc(getApp().globalData.userInfo._id).update({
      data: {
        credit: db.command.inc(this.data.ques.reward)
      },
      success: res => {
        getApp().globalData.userInfo.credit += this.data.ques.reward
        console.log(getApp().globalData.userInfo.credit)
        wx.reLaunch({
          url: '../querylist/querylist',
        })
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