<template>
  <a-popover trigger="click" v-model:open="visible" placement="bottomLeft">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <div class="popover-desc">
      <span>{{ result }}</span>
      <DownOutlined :class="{ 'rotate': visible}"/>
    </div>
  </a-popover>
</template>

<script setup>
import { ref } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue';

const visible = ref(false);
const result = ref('请选择');
</script>

<style lang="less" scoped>
.popover-desc {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  span {
    margin-right: 5px;
  }
  .rotate {
    transform: rotate(180deg);
  }
}
</style>
