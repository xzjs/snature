<template>
  <scroll-view scroll-y style="width: 100%; height: 100%">
    <grid-view type="masonry" main-axis-gap="2" cross-axis-gap="2">
      <Item v-for="item in imgs" :src="item.src" :height="item.height" />
    </grid-view>
  </scroll-view>
</template>

<script setup>
import { ref } from "vue";
import Item from "./Item.vue";
const imgs = ref([
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/001ccea95362ab06d4fc8bff5de085366da838c5.jpg",
    with: 806,
    height: 100,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/0a36a868ce41f2ff03168ea4ffab0106f769e4ac.jpg",
    with: 680,
    height: 200,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/0b67dff6b96956ba9e30dd4973aa7d75db291d0b.jpg",
    with: 816,
    height: 300,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/0bac1bd275efde0192f046427cbc9d65cdcc7953.jpg",
    with: 814,
    height: 400,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/0eb3c6b03e7f49d7ecd2661da7c8a6c8d782cb85.jpg",
    with: 1024,
    height: 500,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/1bb993741117186513ab1fa6b0d5e3c401758c78.jpg",
    with: 1024,
    height: 500,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/1bfa0158e26d7a7c57ed2426b02fd18e1312c377.jpg",
    with: 1024,
    height: 400,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/1ca8da9b1fe7c765960221819ec88257ad888f6b.jpg",
    with: 1024,
    height: 300,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/1d4d4e2fc79e2daf3603ef9e73ae2f2a9704f8c1.jpg",
    with: 819,
    height: 200,
  },
  {
    src: "http://sh26qbnp2.hd-bkt.clouddn.com/2bc205b077adcbcf443418f02a644a1e12ee5787.jpg",
    with: 1024,
    height: 100,
  },
]);
</script>
