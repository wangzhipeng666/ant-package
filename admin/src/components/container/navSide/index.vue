<template>
  <a-menu
      mode="inline"
      theme="dark"
      :selectedKeys="selectedKeys"
    >
      <template v-for="item in data" :key="item.name">
        <a-menu-item @click="handleToPage(item)">
            <template #icon>
              <component :is="item.icon" />
            </template>
            {{ item.name }}
        </a-menu-item>
      </template>
  </a-menu>
</template>

<script setup>
import { ref } from 'vue';
import {
  HomeOutlined,
  SettingFilled,
  FieldTimeOutlined,
  SmileOutlined,
  FundOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const selectedKeys = ref(['首页']);
const handleToPage = (item) => {
  selectedKeys.value = [item.name]
  router.push(item.index)
}

let data = [
  {
    icon: HomeOutlined,
    name: '首页',
    index: '/'
  },
  {
    icon: SettingFilled,
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: FieldTimeOutlined,
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: SmileOutlined,
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: FundOutlined,
    name: '进度条',
    index: '/progress'
  },
  {
    icon: SmileTwoTone,
    name: '表单',
    index: '/form'
  },
  {
    icon: HeartTwoTone,
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: CheckCircleTwoTone ,
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
