<script setup>
import { ref } from 'vue'
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'

const isCollapse = ref(false)
</script>

<template>
  <a-layout>
    <a-layout-sider width="200" :collapsed="isCollapse">
        <nav-side></nav-side>
    </a-layout-sider>
    <a-layout>
    <a-layout-header style="background: #fff">
        <nav-header v-model:collapse="isCollapse"></nav-header>
    </a-layout-header>
    <a-layout-content>
        <router-view></router-view>
    </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
:deep(.ant-layout-sider) {
    height: 100vh;
}

:deep(.ant-layout-header) {
    padding-inline: 0px;
}

:deep(.ant-layout-content) {
    height: calc(100vh - 96px);
}

:deep(.ant-menu) {
    margin-top: 18px;
}
</style>
