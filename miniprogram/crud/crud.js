const cloud = wx.cloud;



async function addFood(food) {
  const res = await callFunction('addFood', {
    'food': food
  }, '');
  return res;
}

async function getFoods(food) {
  const res = await callFunction('getFoods', {
    
  }, '');
  return res;
}





async function callFunction(name, data, errorResult) {
  const res = await (async () => {
    try {
      return (await cloud.callFunction({
        name: name,
        data: data
      })).result;
    } catch (error) {
      console.log(error);
      return errorResult;
    }
  })();
  return res;
}

module.exports = {
  addFood,
  getFoods
}