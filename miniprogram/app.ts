/**
 * 首页
 * @author Philip
 */
export interface IMyApp {
  userInfoReadyCallback ? (res: wx.UserInfo) : void
  globalData: {
    userInfo?: wx.UserInfo
  }
}

App<IMyApp>({
  onLaunch() {
    // 登录
    wx.login({
      success(_res) {
        
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res.userInfo)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
  }
})
