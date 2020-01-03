// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt:'',
    datalist:[{
      id:1,name:'北京'
    },{
      id:2,name:'shanghai'
    }]
  },
  onReady(){
    wx.request({
      url: 'https://api.myjson.com/bins/1h8gwt',
      data:{},
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        console.log(res.data)
        this.setData({
          datalist:res.data.products
        })
      }
    })
  },
  del(event){
    let id = event.currentTarget.dataset.id;
    let list = this.data.datalist.filter((item)=>{
      return id!= item.id
    })
    this.setData({
      datalist:list
    })
  },
  changeTxt(e){
    this.setData({
      txt:e.detail.value
    })
  },
  add(){
    let id = Math.ceil(Math.random()*100000)
    let datalist = this.data.datalist.concat([{id,name:this.data.txt}])
    console.log(datalist)
    this.setData({
      datalist:datalist
    })
  }
})