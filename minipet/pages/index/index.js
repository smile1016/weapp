//index.js
const {
  get
} = require('../../utils/http')
Page({
  data: {
    longitude: '113.324520',
    latitude: '23.099994',
    markers: []
  },
  onLoad() {
    this.getLocation();
    this.getMarkers()
  },
  onReady() {
    this.mapContext = wx.createMapContext('map')
  },
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          speed: res.speed,
          accuracy: res.accuracy,
        })
      }
    })
  },
  async getMarkers() {
    let rs = await get('/index.php/trade/get_list')
    let list =[]
     rs.data.forEach((item,index)=>{
       let params = {
         ...item,
         iconPath:item.type==='sell'?'/resources/sell.png':'/resources/buy.png'
       }
       list.push(params)
    });

    this.setData({
      markers:list
    })
    console.log(list)
  },
  movetocenter() {
    console.log('1')
    this.mapContext.moveToLocation()
  },
  goPublish() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})