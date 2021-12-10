// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const categorys = [
        {
            id:0,
            name:'蔬菜'
        },
        {
            id:1,
            name:'水果'
        },
        {
            id:2,
            name:'肉类'
        },
        {
            id:3,
            name:'主食'
        },
        {
            id:4,
            name:'牛奶'
        },
        {
            id:5,
            name:'坚果'
        },
        {
            id:6,
            name:'饮料'
        },
        {
            id:7,
            name:'豆类'
        },
        {
            id:8,
            name:'油脂'
        },
        {
            id:9,
            name:'零食'
        },

       
    ];

    return categorys;
}