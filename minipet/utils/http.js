const BASE_URL='http://127.0.0.1'
const get = (url,data) => {
  return new Promise((reslove, reject) => {
    wx.request({
      url:BASE_URL+url,
      data,
      method:"GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        reslove(res.data)
      }
    })
  })

}
const post = (url, data) => {
  return new Promise((reslove, reject) => {
    wx.request({
      url:BASE_URL+url,
      data,
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        reslove(res.data)
      }
    })
  })

}

module.exports = {
  post,
  get
}