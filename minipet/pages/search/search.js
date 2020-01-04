// pages/search/search.js
const {
  post
} = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    datalist: [],
    historyList: wx.getStorageSync('historyList'),
    showhistory: true
  },

  inputChange(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  async handleSearch() {

    // 搜索历史存入缓存
    let historyList = wx.getStorageSync('historyList') || []
    historyList.push(this.data.keyword)
    // 去重
    let list = [...new Set(historyList)]
    wx.setStorageSync('historyList', list)
    let rs = await post('/index.php/trade/get_search_list', {
      keyword: this.data.keyword
    })
    this.setData({
      datalist: rs.data
    })
    // 隐藏历史数据
    this.setData({
      showhistory: false
    })
  },
  searchByhistory(e){
    this.setData({
      keyword:e.currentTarget.dataset.keyword
    })
    this.handleSearch()
  },
  goDetail(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }
})