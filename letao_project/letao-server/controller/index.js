//宫格数据的业务控制
module.exports.gridList = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: [
      {
        id: 1,
        img_src: "/images/nav1.png",
      },
      {
        id: 2,
        img_src: "/images/nav2.png",
      },
      {
        id: 3,
        img_src: "/images/nav3.png",
      },
      {
        id: 4,
        img_src: "/images/nav4.png",
      },
    ],
  };
};

//首页轮播图
module.exports.banners = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: [],
  };
};

//运动专区
module.exports.sports = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: [
      {
        name: "Nike Air Max 270",
        img: "/images/sport1.png",
        price: 999,
        oldPrice: 1299,
      },
    ],
  };
};
