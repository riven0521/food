
const cloud = wx.cloud;

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function randomString(e) {    
  e = e || 32;
  let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  let a = t.length;
  let n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function radomNumber(ratio) {
  return Math.random()*ratio;
}



async function callFunction(name, data, errorResult) {
  const res = await (async () => {
    try {
      const result = (await cloud.callFunction({
        name: name,
        data: data
      })).result;
      return result;
    } catch (error) {
      console.log(error);
      return errorResult;
    }
  })();
  return res;
}

module.exports = {
  formatTime,
  callFunction,
  randomString,
  radomNumber
}
