
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
            return false
        }

        // mixin
        Vue.mixin({
            methods: {

            },
            computed: {
                ...mapState(['$author','$user','$roles','$website'])
            }
        })

    }
}