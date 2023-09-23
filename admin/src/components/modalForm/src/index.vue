<template>
  <a-modal v-model:open="dialogVisible" v-bind="$attrs">
    <a-custom-form
      ref="form"
      :options="options"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      @before-upload="beforeUpload"
      @preview-file="previewFile"
      @remove-file="removeFile"
      @on-change="handleChange"
      @on-preview="preview"
      @on-download="downloadFile"
    >
      <template #uploadArea>
        <slot name="uploadArea"></slot>
      </template>
      <template #uploadTip>
        <slot name="uploadTip"></slot>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </a-custom-form>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </a-modal>
</template>

<script setup>
import { ref, watch } from 'vue'

let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: []
  },
  beforeUpload: {
    type: Function
  },
  previewFile: {
    type: Function
  },
  removeFile: {
    type: Function
  },
  handleChange: {
    type: Function
  },
  preview: {
    type: Function
  },
  downloadFile: {
    type: Function
  },
})

// 弹出框的显示与隐藏
let dialogVisible = ref(props.visible)

watch(() => props.visible, (val) => {
  dialogVisible.value = val
})

// let emits = defineEmits(['update:visible'])
// watch(() => dialogVisible.value, (val) => {
//   emits('update:visible', val)
// })

// 表单
let form = ref(null)

const labelCol = {
    span: 4,
}
const wrapperCol = {
    span: 14,
}

// 验证表单
const validate = () => {
  return form.value.validate()
}

const getFormData = () => {
  return form.value.getFormData()
}

defineExpose({
  validate,
  getFormData,
})
</script>

<style lang="less" scoped></style>
