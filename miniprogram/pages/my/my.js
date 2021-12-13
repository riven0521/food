// pages/my/my.js
let user = []
let aa = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    new1: "",
    now: "",
  },

  toWeightRecord: function () {
    wx.navigateTo({
      url: "/pages/width-record/index"
    });
  },
  editInfo: function () {
    console.log('nickName', this.data.nickName)
    //登录
    wx.cloud.database().collection('user').where({
      useid: this.data.nickName
    }).get({
      success(res) {
        console.log('数据', res)
        let user = res.data[0]
        console.log('user', user)
        wx.navigateTo({
          url: "/pages/user-info/user-info?id=" + user._id + '&useid=' + user.useid + '&now=' + user.now + '&new=' + user.new + '&height=' + user.height + '&day=' + user.day
        });
      },
      fail(res) {
        console.log('数据获取失败', res)
        wx.showToast({
          title: '数据获取失败',
          icon: 'none'
        })
      }
    })
  },
  addInfo: function () {

    //获取当前用户微信信息，例如：头像
    wx.getUserProfile({
      desc: '必须授权才能使用',
      success: res => {
        let user = res.userInfo
        let new1 = this.data.new1
        let now = this.data.now
        console.log(new1)
        console.log(now)
        this.setData({
          avatarUrl: user.avatarUrl,
          nickName: user.nickName,
          new1: new1,
          now: now
        })
        //数据
        wx.cloud.database().collection('user').where({
          useid: user.nickName
        }).get({
          success(res) {
            console.log('数据获取成功', res)
            let aa = res.data[0]
            console.log('aa', aa)

            console.log('new', aa.new)
            console.log('now', aa.now)
            this.setData({
              aa: aa,
              new1: aa.new,
              now: aa.now
            })
          },
          fail(res) {
            console.log('数据获取失败', res)
          }
        })
        //注册功能的实现，把输入的数据添加到数据库
        wx.cloud.database().collection('user').add({
          data: {
            useid: user.nickName,
            day: 0,
            height: 0,
            new: 0,
            now: 0
          },
          success(res) {
            console.log('注册成功', res)
          },
          fail(res) {
            console.log('注册失败', res)
          }
        })

      },
      fail: res => {
        console.log('授权失败', res)
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)


  },

  goEventList: function (param) {
    wx.navigateTo({
      url: '/pages/bodydata/bodydata',
    })
  },
  gomyAdd: function (param) {
    wx.navigateTo({
      url: '/pages/myAdd/myAdd',
    })
  }
})