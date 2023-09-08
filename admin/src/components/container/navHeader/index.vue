<template>
  <div class="header">
    <span @click="toggle">
      <MenuFoldOutlined v-if="collapse" />
      <MenuUnfoldOutlined v-else />
    </span>
  </div>
</template>

<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
const props = defineProps({
  collapse: Boolean
})
const emits = defineEmits(['update:collapse'])

const toggle = () => {
  // 需要修改父组件的数据
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
