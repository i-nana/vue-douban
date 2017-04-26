// 根级别的 mutation
import {
    RECORD_USERINFO
} from './mutation-types'

export default {
    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.user = info;
        state.login = true;
        let validity = 7;
        let now = new Date();
        now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
        document.cookie = "uname=" + encodeURIComponent(info.name) + ";uid=" + info.id + ";expires=" + now.toGMTString();
    }
}