<template>
  <router-view></router-view>
  <nut-tabbar
    v-model="active"
    bottom
    safe-area-inset-bottom
    placeholder
    @tab-switch="tabSwitch"
  >
    <nut-tabbar-item
      v-for="(item, index) in List"
      :key="index"
      :tab-title="item.title"
      :icon="item.icon"
    >
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup>
import { h, ref } from "vue";
import { Uploader } from "@nutui/icons-vue-taro";
import { useRouter } from 'vue-router'

const router = useRouter()

const List = [
  {
    title: "首页",
  },
  {
    title: "自然",
  },
  {
    icon: h(Uploader),
  },
  {
    title: "消息",
  },
  {
    title: "我",
  },
];
const active = ref(0);

const paths = ["/", "/nature", "/", "/message", "/mine"];

const tabSwitch = (item, index) => {
  router.push(paths[index]);
};
</script>

<style></style>
