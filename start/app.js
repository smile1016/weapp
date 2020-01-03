//app.js
App({
  
  // onLaunch: function () {
  //   // 展示本地存储能力
  //   var logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)
  // },
  // onShow:function(){
  //   console.log(wx.getLaunchOptionsSync())
  // },
  //进入，只触发一次
  onLaunch:function(){
    console.log('onLaunch')
  },
  // 显示
  onShow:function(){
    console.log('onShow')
  },
  // 隐藏
  onHide:function(){
    console.log('onHide')
  },
  
  globalData: {
    userInfo: null,
    message:'helloworld'
  }
})