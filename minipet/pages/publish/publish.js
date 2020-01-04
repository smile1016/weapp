// pages/publish/publish.js
const {post} = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  // address，latitude，longitude，message，contact，type（sell，buy），openid（可不传）
  data: {
    address:"点击选择，要勾选哦~",
    latitude:"",
    longitude:"",
    message:"",
    contact:"",
    type:"sell",
    issubmit:false,
    isSuccess:true
  },

  chooseLocation(){
    wx.chooseLocation({
      complete: (res) => {
        this.setData({
          address:res.name,
          latitude:res.latitude,
          longitude:res.longitude
        })
      },
    })
  },
  typechange(e){
    this.setData({
      type:e.detail.value
    })
  },
  inputMessage(e){
    this.setData({
      message:e.detail.value
    })
  },
  inputContact(e){
    this.setData({
      contact:e.detail.value
    })
  },
  async submit(){
    if(this.data.address==='点击选择，要勾选哦~'){
      wx.showToast({
        title: '地址不能为空',
        icon:"loading",
        duration:2000
      })
      return;
    }
    if(!this.data.message){
      wx.showToast({
        title: '说明不能为空',
        icon:"loading",
        duration:2000
      })
      return;
    }
    if(!this.data.contact){
      wx.showToast({
        title: '联系方式不能为空',
        icon:"loading",
        duration:2000
      })
      return;
    }
    this.setData({
      issubmit:true
    })
    let params={
      address:this.data.address,
      latitude:this.data.latitude,
      longitude:this.data.longitude,
      message:this.data.message,
      contact:this.data.contact,
      type:this.data.type
    }
    let rs = await post('/index.php/trade/add_item',params)
    this.setData({
      isSuccess:rs.ret
    })
    console.log(this.data.isSuccess)
  },
  repulish(){
    this.setData({
      isSubmit:false,
      isSuccess:null
    })
  }
})