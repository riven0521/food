// // pages/diary/diary.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },

//   toAnalyze: function (param) {
//     wx.navigateTo({
//       url: '/pages/analyze/analyze',
//     })
//   }


// })

let yinshi=[]
Page({
  data: {
    list: [{
      id: 'zc',
      name: '早餐',
      open: false,
      pages: ['添加记录']
    }, {
      id: 'content',
      name: '午餐',
      open: false,
      pages: ['添加记录']
    }, {
      id: 'form',
      name: '晚餐',
      open: false,
      pages: ['添加记录']
    }, {
      id: 'nav',
      name: '加餐',

    }, ]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.database().collection('addfood')
      .get()
      .then(res => {
        console.log('饮食记录表：', res)
        yinshi = res.data
        console.log('yinshi:', yinshi)
        var res = 0;
        for (var i = 1; i <= yinshi.length; i++) {
          this.setData({
            yinshi: yinshi,
            sum: yinshi[res].sum,
            one: yinshi[res].one,
            two: yinshi[res].two,
            three: yinshi[res].three,
            shuliang: yinshi[res].shuliang,
            shijian: yinshi[res].shijian,
          })
          res += 1
        }
      })

  },
  toDietAnalyze(){
    wx.navigateTo({
      url: '../../pages/adddiary/adddiary',
    })
  }
})