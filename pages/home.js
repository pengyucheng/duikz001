// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  openLocation:function(){
    wx.openLocation({
      latitude: 22.738830,
      longitude: 114.392360,
      scale: '16',
      name: '深圳市斗星激光技术有限公司',
      address: '深圳市坪山新区坑梓街道金沙社区东联工业区2号厂房',
    })
  },

  makePhone:function(){
    wx.makePhoneCall({
      phoneNumber: '18825262776',
    })
  }
})