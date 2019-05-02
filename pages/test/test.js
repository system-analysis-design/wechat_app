// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:[
        {
          "qid":1,
          "question": "是否使用过微信小程序吗?",
          items: [
            { name: 'a1', value: '经常使用',checked: 'true'},
            { name: 'a2', value: '偶尔使用' },
            { name: 'a3', value: '从未使用过' },
          ]
        },
        {
          "qid": 2,
          "question": "您使用微信小程序多久了？",
          items: [
            { name: 'a1', value: '小于一个月',checked: 'true'},
            { name: 'a2',  value: '一年以上'},
            { name: 'a3', value: '记不清楚'},
          ]
        },
        {
          "qid": 3,
          "question": "您每天使用微信小程序的次数？",
          items: [
            { name: 'a1', value: '1-3次', checked: 'true'},
            { name: 'a2', value: '4-6次'},
            { name: 'a3',value: '6次以上'},
          ]
        },
        {
          "qid": 4,
          "question": "您使用过以下哪些微信小程序？",
          items: [
            { name: 'a1', value: '跳一跳', checked: 'true' },
            { name: 'a2',value: '京东购物'},
            { name: 'a3',value: '顺丰速运'},
          ]
        },

      ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  complete:function(){
    wx.showToast({
      title: '完成',
      icon: 'success',
      duration: 2000
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