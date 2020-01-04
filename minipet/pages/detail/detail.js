// pages/detail/detail.js
const {post} = require('.././../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    console.log(options)
    let id=options.id
    let rs = await post('/index.php/trade/get_item',{id})
    this.setData({
      ...rs.data
    })
  },

  
})