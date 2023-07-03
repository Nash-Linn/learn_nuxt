// 存储公共数据

const state = () => {
  return {
    count: 0,
    randomNum: 0,

    topics: [],
  };
};

// 定义mutations，处理同步操作
const mutations = {
  //同步加
  increment(state, payload) {
    // state.count++;
    state.count += payload;
  },

  //修改随机数
  updateRamdomNum(state, payload) {
    state.randomNum = payload;
  },

  updateTopics(state, payload) {
    state.topics = payload;
  },
};

// 定义actions，处理异步操作
const actions = {
  //异步加
  asyncIncrement({ commit }, payload) {
    setTimeout(() => {
      commit("increment", payload);
    }, 1000);
  },
};

export { state, mutations, actions };
