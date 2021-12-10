Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad:function(){
    const db = wx.cloud.database()
    console.log(db);
  }

});
