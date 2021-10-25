export default {
  pages: ["pages/todo/index", "pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "宠记",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/todo/index",
        text: "首页",
        iconPath: "./public/home.png",
        selectedIconPath: "./public/home-selected.png",
      },
      {
        pagePath: "pages/index/index",
        text: "宠物",
        iconPath: "./public/pet-home.png",
        selectedIconPath: "./public/pet-home-selected.png",
      },
      {
        pagePath: "pages/index/index",
        text: "设置",
        iconPath: "./public/setting.png",
        selectedIconPath: "./public/setting-selected.png",
      },
    ],
  },
};
