// pages/useadd/useadd.js
Page({

  data: {
    shiwuname: "",
    shuliang: "",
    danwei: "",
    reliang: "",
    danbaizhi: "",
    zhifang: "",
    tanshui: ""

  },


  onReady: function () {

  },
  //食物名称
  shiwu(e) {
    console.log('食物名称：', e.detail.value)
    this.setData({
      shiwuname: e.detail.value
    })
  },
  //数量
  shuliang(e) {
    console.log('数量：', e.detail.value)
    this.setData({
      shuliang: e.detail.value
    })
  },
  //单位
  danwei(e) {
    console.log('单位：', e.detail.value)

    this.setData({
      danwei: e.detail.value
    })
  },
  //热量
  reliang(e) {
    console.log('热量：', e.detail.value)
    this.setData({
      reliang: e.detail.value
    })
  },
  //蛋白质
  danbaizhi(e) {
    console.log('蛋白质：', e.detail.value)
    this.setData({
      danbaizhi: e.detail.value
    })
  },
  //脂肪
  zhifang(e) {
    console.log('脂肪：', e.detail.value)
    this.setData({
      zhifang: e.detail.value
    })
  },
  //碳水
  tanshui(e) {
    console.log('碳水：', e.detail.value)
    this.setData({
      tanshui: e.detail.value
    })
  },
  wancheng() {
    let shiwuname = this.data.shiwuname
    let shuliang = this.data.shuliang
    let reliang = this.data.reliang
    let danwei = this.data.danwei
    let danbaizhi = this.data.danbaizhi
    let zhifang = this.data.zhifang
    let tanshui = this.data.tanshui

    //把输入的数据添加到数据库
    wx.cloud.database().collection('foods').add({
      data: {
        name: shiwuname,
        sum: shuliang,
        Calories: reliang,
        unit: danwei,
        protein: danbaizhi,
        fat: zhifang,
        CarbonWater: tanshui,
      },
      success(res) {
        console.log('添加成功', res),
        wx.reLaunch({
          url: '../../pages/classify/classify',
        })
      },
      fail(res) {
        console.log('添加失败', res)
      }
    })
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加自定义食物'
    })
  },
})