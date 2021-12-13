Page({
  data: {

  },


  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我添加的数据'
    })
  },
   // 跳转到自定义新增
  goEventList: function (param) {
    wx.navigateTo({
      url: '/pages/useadd/useadd',
    })
  },
})