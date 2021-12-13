// pages/classify/classify.js
// bug:class标签横线
const {
  addFood,
  getFoods
} = require('../../crud/crud.js');
const {
  callFunction,
  radomNumber,
  randomString
} = require('../../utils/util.js');


const app = getApp();
const globalData = app.globalData;


let fenlei = []
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
    pageList: [],
    currentTab: 0,
    flag: 0,

  },
  onLoad: function (options) {
    wx.cloud.database().collection('foods')
      .get()
      .then(res => {
        console.log('分类表：', res)
        fenlei = res.data
        console.log('fenlei:', fenlei)
        var res = 0;
        for (var i = 1; i <= fenlei.length; i++) {

          console.log('每一条数据：', fenlei[res])
          console.log('食物名称：', fenlei[res].name)
          console.log('数量：', fenlei[res].sum)
          console.log('单位', fenlei[res].unit)
          console.log('热量：', fenlei[res].Calories)
          console.log('蛋白质：', fenlei[res].protein)
          console.log('脂肪：', fenlei[res].fat)
          console.log('碳水：', fenlei[res].CarbonWater)

          //渲染在页面上
          this.setData({
            fenlei: fenlei,
            name: fenlei[res].name,
            sum: fenlei[res].sum,
            unit: fenlei[res].unit,
            Calories: fenlei[res].Calories,
            protein: fenlei[res].protein,
            fat: fenlei[res].fat,
            CarbonWater: fenlei[res].CarbonWater
          })
          res += 1
        }
      })
  },
  switchNav: function (e) {
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
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    console.log('page',page)
    console.log('id',id)
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
  addFoodOfThis: async function () {
    //示例
    const food = {
      name: randomString(6),
      category: this.data.flag,
      calories: radomNumber(1000).toFixed(2),
      protein: radomNumber(1).toFixed(2)
    };

    const _id = await addFood(food);
    console.log(_id);
    if (_id != '') {
      const pageList = this.data.pageList;
      // debugger;
      pageList[food.category].push(food);
      this.setData({
        pageList: pageList
      });
    }


  },

  getFoodsOfThis: async function () {
    const foods = await getFoods();
    return foods
  },

  assemblyPagesData: function (categorysMapForId, foods) {
    const pageList = [];

    for (let i = 0; i < categorysMapForId.size; i++) {
      pageList.push([]);
    }

    foods.forEach(food => {
      pageList[food.category].push(food);
    });
    this.setData({
      pageList: pageList
    });
  },

  getCategorys: async function () {
    // debugger;
    try {
      const categorys = await callFunction('getCategorys', {}, []);
      return categorys;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  generateCategorysMapForId: function (categorys) {
    const map = new Map();
    categorys.forEach(category => {
      map.set(category.id, category.name);
    });
    return map;
  },

  generateCategorysMapForName: function (categorys) {
    const map = new Map();
    categorys.forEach(category => {
      map.set(category.name, category.id);
    });
    return map;
  },

  // onLoad: async function () {
  //   const foods = await this.getFoodsOfThis();
  //   console.log('加载所有食物数据', foods)

  //   if (globalData.categorys == undefined || globalData.categorys == null) {
  //     globalData.categorys = await this.getCategorys();
  //     console.log('加载种类数据', globalData.categorys);
  //   }
  //   if (globalData.categorysMapForId == undefined || globalData.categorysMapForId == null) {
  //     globalData.categorysMapForId = this.generateCategorysMapForId(globalData.categorys);
  //   }
  //   if (globalData.categorysMapForName == undefined || globalData.categorysMapForName == null) {
  //     globalData.categorysMapForName = this.generateCategorysMapForName(globalData.categorys);
  //   }
  //   this.assemblyPagesData(globalData.categorysMapForId, foods);



  // },


  onShow: function (options) {
    // console.log(options);
    const option = {};
    option.target = {};
    option.target.id = globalData.classifyTapChoiseId;
    this.switchNav(option);
  },

  // 跳转到自定义新增
  goEventList: function (param) {
    wx.navigateTo({
      url: '/pages/useadd/useadd',
    })
  },

})