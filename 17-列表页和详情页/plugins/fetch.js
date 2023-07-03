export default (context, inject) => {
  //注入插件
  inject("api", {
    /**
     * 获取主题列表
     * @param {String} path
     * @returns promise
     */
    getTopics(path) {
      return fetch(`https://cnodejs.org/api/v1${path}`).then((res) =>
        res.json()
      );
    },
    getDetail(path) {
      return fetch(`https://cnodejs.org/api/v1${path}`).then((res) =>
        res.json()
      );
    },
  });
};
