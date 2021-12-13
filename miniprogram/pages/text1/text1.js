// pages/text1/text1.js
Page({

  data: {

  },


  formSubmit:function(e){

    console.log(e.detail.value)
    const food = {
      name: name1,
      category: this.data.flag,
      calories: name2,
      protein: name3
    };
  }
})