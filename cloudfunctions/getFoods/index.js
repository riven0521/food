// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const COLLECTION_FOODS_OFFICIAL = 'foods_official';
const COLLECTION_FOODS_USER = 'foods_user';

const db = cloud.database();
// const foodsOfficialColleciton = db.collection(COLLECTION_FOODS_OFFICIAL);
const foodsUserColleciton = db.collection(COLLECTION_FOODS_USER);


// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const _openid = wxContext.OPENID;

    // const { category } = event;
    // if (category == undefined || category == null) {
    //     return {};
    // }

    const datas = await (async () => {
        try {
            return (await foodsUserColleciton.where({
                _openid: _openid,
                // category: category
            }).get()).data;
        } catch (error) {
            console.log(error);
            return [];
        }
    })();

    return datas;
}