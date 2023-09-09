<template>
  <a-menu
      mode="inline"
      theme="dark"
    >
      <template v-for="item in data" :key="item.name">
        <a-menu-item>
            <template #icon>
              <component :is="item.icon" />
            </template>
            {{ item.name }}
        </a-menu-item>
      </template>
  </a-menu>
</template>

<script setup>
import { HomeOutlined, CarOutlined } from '@ant-design/icons-vue';

let data = [
  {
    icon: HomeOutlined,
    name: '首页',
    index: '/'
  },
  {
    icon: CarOutlined,
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang="less" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
