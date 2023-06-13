<template>
  <div class="goods"><Goods /></div>
</template>

<script>
export default {
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    console.log("isDev", isDev);
    console.log("route", route);
    console.log("store", store);
    console.log("env", env);
    console.log("params", params);
    console.log("query", query);
    console.log("req", req);
    console.log("res", res);
    console.log("redirect", redirect);
    console.log("error", error);
  },
};
</script>
