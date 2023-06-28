// 存储公共数据

const state = () => {
  return {
    list: [10, 20, 30, 40, 50, 60, 70],
  };
};

// 定义mutations，处理同步操作
const mutations = {
  updateList(state, payload) {
    state.list.push(payload);
  },
};

// 定义actions，处理异步操作
const actions = {};

export { state, mutations, actions };
