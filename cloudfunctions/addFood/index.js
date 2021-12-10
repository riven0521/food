// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();

const COLLECTION_FOODS_OFFICIAL = 'foods_official';
const COLLECTION_FOODS_USER = 'foods_user';




const db = cloud.database();
// const foodsOfficialColleciton = db.collection(COLLECTION_FOODS_OFFICIAL);
const foodsUserColleciton = db.collection(COLLECTION_FOODS_USER);




exports.main = async (event, context) => {

  const foodFields = await(async () => {
    try {
      return (await cloud.callFunction({
        name: 'getFoodFields'
      })).result;
    } catch (error) {
      console.log(error);
      return [];
    }
  })();

  const { food } = event;
  if (food == undefined || food == null) {
    return 0;
  }

  const wxContext = cloud.getWXContext();
  const _openid = wxContext.OPENID;
  food['_openid']=_openid;

  const foodAdd = {};
  foodFields.forEach(field => {
    if (food[field] != undefined && food[field] != null) {
      if (typeof field == 'string' && field.charAt(0) != '_') {
        foodAdd[field] = food[field];
      }
    }
  });
  

  const res = await(async () => {
    try {
      const res = (await foodsUserColleciton.add({
        data: foodAdd
      }))._id;
      return res;
    } catch (err) {
      console.log('add fail');
      console.log(err);
      return 0;
    }
  })();

  return res;

}
