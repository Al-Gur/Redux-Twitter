import {CHANGE_AVATAR, CHANGE_NAME, CHANGE_STATS} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    const payload = action.payload;
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: payload || state.user.name}};
        case CHANGE_STATS:
	    let res = state.stats[payload.statsType] + payload.sum;
            res = res < 0 ? 0 : res;
            return {...state, stats: {...state.stats, [payload.statsType]: res}};
        default:
            return state;
    }
}
