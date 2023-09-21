<template>
  <a-form
    ref="form"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <span>aaa</span>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <slot name="action" :form="form" :model="model"></slot>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref } from 'vue'

let form = ref()

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array,
    required: true
  }
})

// 表单数据对象
const model = ref(null)
// 表单校验规则
const rules = ref(null)

const resetFields = () => {
  form.value.resetFields();
}

// 分发方法
defineExpose({
  resetFields,
})

</script>

<style lang="less" scoped></style>
