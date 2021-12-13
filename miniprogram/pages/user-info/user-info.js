Page({
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.setData({
      useid: options.useid,
      day: options.day,
      height: options.height,
      id: options.id,
      new: options.new,
      now: options.now
    })
  },
  //昵称
  nicheng(e) {
    this.setData({
      name: e.detail.value
    })
  },
  //身高
  shengao(e) {
    this.setData({
      height: e.detail.value
    })
  },
  //目标
  mubiao(e) {
    this.setData({
      new: e.detail.value
    })
  },
  //当前
  dangqian(e) {
    this.setData({
      now: e.detail.value
    })
  },
  //生日
  shengri: function (e) {
    console.log('picker携带值为', e.detail.value)
    this.setData({
      day: e.detail.value
    })
  },
  save() {
    //根据id的值，去添加修改
    let id = this.data.id
    let useid = this.data.useid
    let day = this.data.day
    let height = this.data.height
    let new1 = this.data.new
    let now = this.data.now
    
    console.log('id:', id)
    wx.cloud.database().collection('user').doc(id) // doc方法去修改文档
      .update({ // 在对应的文档中用update传入一个对象更新
        data: {
          useid: useid,
          day: day,
          height: height,
          new: new1,
          now: now
        }
      })
      .then(res => {
        console.log('更新完成', res)
      })
      .catch(err => {
        console.log('更新失败', err)
      })
  }
})