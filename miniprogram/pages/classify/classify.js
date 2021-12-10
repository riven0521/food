// pages/classify/classify.js
// bug:class标签横线
const {addFood,getFoods} = require('../../crud/crud.js');
const {callFunction,radomNumber,randomString} = require('../../utils/util.js');


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
    pageList: [],
    currentTab: 0,
    flag: 0,

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
  swiperChange: function (e) {
    var page = this;
    const id = e.detail.current;
    // globalData.classifyTapChoiseId=id;
    // console.log(id);
    page.setData({
      flag: id
    });
  },
  addFoodOfThis:async function () {
    //示例
    const food={
      name : randomString(6),
      category:this.data.flag,
      calories : radomNumber(1000).toFixed(2),
      protein : radomNumber(1).toFixed(2)
    };

    const _id = await addFood(food);
    console.log(_id);
    if(_id!=''){
      const pageList = this.data.pageList;
      // debugger;
      pageList[food.category].push(food);
      this.setData({
        pageList:pageList
      });
    }
    
    
  },

  getFoodsOfThis:async function () {
    const foods = await getFoods();
    return foods
  },

  assemblyPagesData: function (categorysMapForId,foods) {
    const pageList = [];
    
    for(let i =0;i<categorysMapForId.size;i++){
      pageList.push([]);
    }

    foods.forEach(food => {
      pageList[food.category].push(food);
    });
    this.setData({
      pageList:pageList
    });
  },

  getCategorys:async function () {
    // debugger;
    try{
      const categorys = await callFunction('getCategorys',{},[]);
      return categorys;
    }catch(error){
      console.log(error);
      return [];
    }
  },

  generateCategorysMapForId:function (categorys) {
    const map = new Map();
    categorys.forEach(category => {
      map.set(category.id,category.name);
    });
    return map;
  },

  generateCategorysMapForName:function (categorys) {
    const map = new Map();
    categorys.forEach(category => {
      map.set(category.name,category.id);
    });
    return map;
  },

  onLoad:async function () {
    const foods = await this.getFoodsOfThis();
    console.log('加载所有食物数据',foods)

    if(globalData.categorys == undefined || globalData.categorys == null){
      globalData.categorys = await this.getCategorys();
      console.log('加载种类数据',globalData.categorys);
    }
    if(globalData.categorysMapForId == undefined || globalData.categorysMapForId == null){
      globalData.categorysMapForId = this.generateCategorysMapForId(globalData.categorys);
    }
    if(globalData.categorysMapForName == undefined || globalData.categorysMapForName == null){
      globalData.categorysMapForName = this.generateCategorysMapForName(globalData.categorys);
    }
    this.assemblyPagesData(globalData.categorysMapForId,foods);
    
    
  },


  onShow: function (options) {
    // console.log(options);
    const option = {};
    option.target = {};
    option.target.id = globalData.classifyTapChoiseId;
    this.switchNav(option);
  },

  


})