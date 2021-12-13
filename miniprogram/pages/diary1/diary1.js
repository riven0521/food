// pages/diary1/diary1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options',options)
    this.setData({
      sum:options.sum,
      one:options.one,
      shijian:options.shijian,
      shuliang:options.shuliang,
      three:options.three,
      two:options.two,
      
    })
  },

})