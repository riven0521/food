// pages/classify/classify.js
// bug:class标签横线

const app = getApp();
const globalData = app.globalData;
Page({

  data: {
    itemdata: [{
        id: "0",
        label: "蔬菜",
      },
      {
        id: "1",
        label: "水果",
      },
      {
        id: "2",
        label: "肉类",
      },
      {
        id: "3",
        label: "主食",
      },
      {
        id: "4",
        label: "牛奶",
      },
      {
        id: "5",
        label: "坚果",
      },
      {
        id: "6",
        label: "饮料",
      },
      {
        id: "7",
        label: "豆类",
      },
      {
        id: "8",
        label: "油脂",
      },
      {
        id: "9",
        label: "零食",
      }
    ],
    /****这里填每一个页面的数据，像第一个一样** */
    pageList: [{
        id: 0,
        img: "/img/class/zmc.png",
        content: '芝麻菜',
        tanshui: '2.18g/100g',
        danbaizhi: '2.58g/100g',
        zhifang: '0.66g/100g',
        calorie: '25kcal/100g',

      },
      {
        id: 1,
        img: "/img/class/zmc.png",
        content: '芝麻菜',
        tanshui: '2.18g/100g',
        danbaizhi: '2.58g/100g',
        zhifang: '0.66g/100g',
        calorie: '25kcal/100g',
      },
      {
        id: 2,
        content: '我是2',
      },
      {
        id: 3,
        content: '我是3',
      },
      {
        id: 4,
        content: '我是4',
      },
      {
        id: 5,
        content: '我是5',
      },
      {
        id: 6,
        content: '我是6',
      },
      {
        id: 7,
        content: '我是7',
      },
      {
        id: 8,
        content: '我是8',
      },
      {
        id: 9,
        content: '我是9',
      },

    ],
    currentTab: 0,
    flag: 0,

  },
  switchNav: function (e) {
    console.log(e);
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    globalData.classifyTapChoiseId = id;
    page.setData({
      flag: id
    });
  },
  swiperChange: function (e) {
    var page = this;
    const id = e.detail.current;
    // globalData.classifyTapChoiseId=id;
    // console.log(id);
    page.setData({
      flag: id
    });
  },


  onShow: function (options) {
    // console.log(options);
    const option = {};
    option.target = {};
    option.target.id = globalData.classifyTapChoiseId;
    this.switchNav(option);
  },


})