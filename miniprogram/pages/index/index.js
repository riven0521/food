

const app = getApp();
const globalData = app.globalData;

Page({
  data: {
    value: "",
    indexs: ["1.jpg", "2.jpg", "3.jpg"],
    works: [{
        id: 0,
        img: "/img/shucai.png",
        label: "蔬菜",
      },
      {
        id: 1,
        img: "/img/shuiguo.png",
        label: "水果",
      },
      {
        id: 2,
        img: "/img/roudan.png",
        label: "肉类",
      },
      {
        id: 3,
        img: "/img/zhushi.png",
        label: "主食",
      },
      {
        id: 4,
        img: "/img/douzhi.png",
        label: "牛奶",
      },
      {
        id: 5,
        img: "/img/jianguo.png",
        label: "坚果",
      },
      {
        id: 6,
        img: "/img/yinliao.png",
        label: "饮料",
      },
      {
        id: 7,
        img: "/img/doulei.png",
        label: "豆类",
      },
      {
        id: 8,
        img: "/img/youzhi.png",
        label: "油脂",
      },
      {
        id: 9,
        img: "/img/lingshi.png",
        label: "零食",
      }
    ],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow:function(options){
    // console.log(options);
  },
  onClearEvent: function (event) {
    this.setData({
      value: ""
    })
  },
  jumpToClassify:function(e){
    // console.log(e.currentTarget.dataset.id);
    const id = e.currentTarget.dataset.id;
    globalData.classifyTapChoiseId=id;
    wx.switchTab({
      url:'../classify/classify'
    });
  }
})