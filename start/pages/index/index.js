//index.js
//获取应用实例
const app = getApp()
const {formatTime} = require('../../utils/util')
const http = require('../../utils/http')
Page({
  data: {
    count:1,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    datalist:[1,2,3,4,5]
  },
  onReady(){
    // console.log(formatTime(new Date()))
    // console.log(http.msg)
    // console.log(http)
    console.log(wx.env)
  },
  changemsg(){
    this.setData({
      motto:'hi hi'
    })
  },
  tapName(arg){
    console.log(arg)
  },
  hanldeTap1(){
    console.log('hanldeTap1')
  },
  hanldeTap2(){
    console.log('hanldeTap2')
  },
  hanldeTap3(){
    console.log('hanldeTap3')
  },
  decrement(event){
    console.log(event)
    this.setData({
      count:this.data.count-parseInt(event.currentTarget.dataset.num)
    })
  },
  increment(event){
    this.setData({
      count:this.data.count+parseInt(event.currentTarget.dataset.num)
    })
  },
  gotodolist(){
    // wx.navigateTo({
    //   url: '/pages/todolist/todolist',
    // })
    wx.redirectTo({
      url: '/pages/todolist/todolist',
    })
  },
  golog(){
    wx.switchTab({
      url: '/pages/logs/logs',
    })
  }
})
