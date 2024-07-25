<template>
  <nut-tabs v-model="value" type="smile">
    <nut-tab-pane title="关注" pane-key="1"> 关注 </nut-tab-pane>
    <nut-tab-pane title="发现" pane-key="2">
      <nut-space class="nut-space">
        <nut-tag plain> 推荐 </nut-tag>
        <nut-tag plain> 绿植 </nut-tag>
        <nut-tag plain> 摄影 </nut-tag>
        <nut-tag plain> 花器 </nut-tag>
        <nut-tag plain> 繁殖 </nut-tag>
        <nut-tag plain> 营养 </nut-tag>
        <nut-tag plain> 家装 </nut-tag>
      </nut-space>
      <List></List>
    </nut-tab-pane>
    <nut-tab-pane title="南京" pane-key="3"> 南京 </nut-tab-pane>
  </nut-tabs>
</template>

<script setup>
import { ref } from "vue";
import List from "./List.vue";
const value = ref("2");
</script>

<style scope>
.nut-tab-pane {
  padding: 0;
}
.nut-space {
  margin: 10px;
}
</style>
