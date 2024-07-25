<template>
  <view>
    <image :src="src" :style="'height:' + height + 'px;width:100%;'" />
    <text>大丽花插水是有点好看，就是太帅了</text>
    <view>
      <view style="display: flex; float: left; align-items: center">
        <nut-avatar style="width: 13px; height: 13px">
          <img
            src="http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto"
          />
        </nut-avatar>
        <text style="font-size: 12px">用户 A</text>
      </view>
      <view style="display: flex; float: right; align-items: center">
        <Follow style="height:13px"/>
        <text style="font-size: 12px">666</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import { Follow } from "@nutui/icons-vue-taro";
defineProps(["src", "height"]);
</script>
<style scoped></style>
