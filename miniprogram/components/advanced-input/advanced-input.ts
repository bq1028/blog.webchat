/**
 * 输入框
 * @author Philip
 */
Component({
    
    data: {},
    options: {
        multipleSlots: true,
    },
    properties: {
        label: {
            type: String,
            value: '',
        },
        // 输入值
        value: {
            type: String,
            value: ''
        },
        password:{
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: '请输入'
        },
    },
    methods: {
        /**
         * 输入
         * @EventHandler
         */
        handleInput (event: any) {
            const value = event.detail.value;
            this.triggerEvent('handleInput', value, {});
        },
    },
});
