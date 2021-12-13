// pages/adddiary/adddiary.js
let array1 = []
let array = []
let fenlei = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['早餐', '午餐', '晚餐', '加餐'],
    sum: 0,
    cai1: 0,
    cai2: 0,
    cai3: 0,
    cai11: "",
    cai22: "",
    cai33: "",
    sum1: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let array = this.data.array
    this.setData({
      array: array
    })
    wx.cloud.database().collection('foods')
      .get()
      .then(res => {
        console.log('分类表：', res)
        fenlei = res.data
        console.log('fenlei：', fenlei)
        var res = 0;
        for (var i = 1; i <= fenlei.length; i++) {
          array1[res] = fenlei[res].name
          res += 1
        }
        this.setData({
          array1: array1
        })
      })
  },
  bindPickerChange: function (e) {
    console.log('种类', e.detail.value)
    this.setData({
      sum: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('菜品1', e.detail.value)
    this.setData({
      cai1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('菜品2', e.detail.value)
    this.setData({
      cai2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('菜品3', e.detail.value)
    this.setData({
      cai3: e.detail.value
    })
  },
  //数量
  shuliang(e) {
    console.log('数量', e.detail.value)
    this.setData({
      shuliang: e.detail.value
    })
  },
  //日期
  shijian: function (e) {
    console.log('picker携带值为', e.detail.value)
    this.setData({
      shijian: e.detail.value
    })
  },
  add() {
    let sum = this.data.sum
    let sum1 = this.data.sum1
    let cai1 = this.data.cai1
    let cai2 = this.data.cai2
    let cai3 = this.data.cai3
    let shuliang = this.data.shuliang
    let shijian = this.data.shijian
    let cai11 = this.data.cai11
    let cai22 = this.data.cai22
    let cai33 = this.data.cai33

    if (sum == 0) {
      this.setData({
        sum1: "早餐"
      })

    } else if (sum == 1) {
      this.setData({
        sum1: "午餐"
      })

    } else if (sum == 2) {
      this.setData({
        sum1: "晚餐"
      })

    } else {
      this.setData({
        sum1: "加餐"
      })

    }


    if (cai1 == 0) {
      this.setData({
        cai11: "苹果"
      })

    } else if (cai1 == 1) {
      this.setData({
        cai11: "青菜"
      })

    } else if (cai1 == 2) {
      this.setData({
        cai11: "坚果"
      })

    }
        
    //注册功能的实现，把输入的数据添加到数据库
    wx.cloud.database().collection('addfood').add({
      data: {
        sum: this.data.sum1,
        one: this.data.cai11,
        two: cai22,
        three: cai33,
        shijian: shijian,
        shuliang: shuliang,
      },
      success(res) {
        console.log('成功', res)
      },
      fail(res) {
        console.log('失败', res)
      }
    })
  }
})