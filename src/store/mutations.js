// 根级别的 mutation
import {
    RECORD_USERINFO
} from './mutation-types'

export default {
    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        console.log(state, info);
        // state.userInfo = info;
        // state.login = true;
        // let validity = 7;
        // let now = new Date();

        // now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
        // doucument.cookie = "UID=" + info.id + ";expires=" + now.toGMTString();
    }
}