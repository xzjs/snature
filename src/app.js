import { createApp } from "vue";
import "./app.scss";
import Home from "./components/Home.vue";
import Nature from "./components/Nature.vue";
import Message from "./components/Message.vue";
import Mine from "./components/Mine.vue";
import { createRouter, createWebHistory } from "vue-router";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

const routes = [{ path: "/", component: Home },
  {path: "/nature", component: Nature},
  {path: "/message", component: Message},
  {path: "/mine", component: Mine}
];
const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

App.use(router);

export default App;
