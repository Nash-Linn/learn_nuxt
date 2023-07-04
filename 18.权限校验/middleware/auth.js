export default ({ store, redirect }) => {
  //判断是否已登录
  if (!store.state.auth) {
    redirect("/login");
  }
};
