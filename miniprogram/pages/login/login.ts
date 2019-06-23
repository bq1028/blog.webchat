/**
 * 内容详情
 * @author Philip
 */
Page({
    data: {
        username: '',
        password: '',
        loading: false,
    },

    /**
     * @Handler
     */
    onLoad () {
        
    },

    /**
     * 用户变化
     * @EventHandler
     */
    handleUserChange (event: any) {
        this.setData({
            username: event.detail,
        });
    },
    
    /**
     * 密码
     * @EventHandler
     */
    handlePasswordChange (event: any) {
        this.setData({
            password: event.detail,
        });
    },
    
    /**
     * 登陆
     * @EventHandler
     */
    handleLogin () {
        const { username, password } = this.data;
        
        this.setData({
            loading: true,
        });
        

    }
})
