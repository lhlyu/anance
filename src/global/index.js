
import isMobile from 'ismobilejs'

import { mapState } from 'vuex'

export default {
    install: function (Vue) {

        Vue.prototype.$isMobile = isMobile().phone

        Vue.prototype.hasPerm = function (f) {
            if(Object.prototype.toString.call(f) == `[object String]`){
                // 判断权限 todo
                return true
            }
            this.$Message.success("很遗憾，你没有权限操作！")
            return false
        }

        Vue.prototype.sleep = function(ms){//时间延迟函数
            return new Promise(resolve =>setTimeout(resolve,ms))
        }

        // mixin
        Vue.mixin({
            data(){
                return{
                    isloading: false
                }
            },
            methods: {
                async LHandler(f){
                    let that = this
                    await (() => {
                        setTimeout(() => {
                            f()
                            that.isloading = false
                        },500)
                    })()
                },
                L(f,perm){
                    this.isloading = true
                    if(perm){
                        if(!this.hasPerm(perm)){
                            this.isloading = false
                            return
                        }
                    }
                    this.LHandler(f)
                },
                Copy(obj){
                    if(!obj){
                        return null
                    }
                    return JSON.parse(JSON.stringify(obj))
                },

                rd(limit,offset){
                    if(!offset){
                        offset = 0
                    }
                    return Math.floor(Math.random() * limit + offset)
                }
            },
            computed: {
                ...mapState(['$author','$user','$roles','$website'])
            }
        })

    }
}
