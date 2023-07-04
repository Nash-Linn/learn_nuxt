import cookieparser from "cookieparser";

const store = () => {
  return {
    auth: "",
  };
};

const mutations = {
  updateAuth(state, payload) {
    state.auth = payload;
  },
};

const actions = {
  // 1.  vuex的用户信息数据持久化存储
  nuxtServerInit({ commit }, { req }) {
    //1. 通过cookie 判断用户是否已经登录
    let cookie;
    if (req.headers.cookie) {
      cookie = cookieparser.parse(req.headers.cookie);
    }
    commit("updateAuth", cookie.auth);
  },
};

export { store, mutations, actions };
