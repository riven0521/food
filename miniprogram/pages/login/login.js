// pages/login/login.js
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

  },
  jinru(){
    //获取当前用户微信信息，例如：头像
    wx.getUserProfile({
      desc: '必须授权才能使用',
      success: res => {
        let user = res.userInfo
        this.setData({
          touxiang:user.avatarUrl,
          mingchen:user.nickName
        })
        console.log('用户信息', user)
        // wx.reLaunch({
        //   url: '/pages/my/my',
        // })
        // wx.navigateTo({
        //   url: '/pages/my/my?touxiang=' + user.avatarUrl + '&nickName=' + user.nickName
        // })
      },
      fail: res => {
        console.log('授权失败', res)
      }
    })
  }
})