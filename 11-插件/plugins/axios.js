import axios from "axios";

export default (context, inject) => {
  axios.defaults.baseURL = "https://cnodejs.org/api/v1";
  //注入插件
  inject("api", {
    /**
     * 获取主题列表
     * @param {String} path
     * @returns promise
     */
    getTopics(path) {
      return axios.get(path);
    },
  });
};
