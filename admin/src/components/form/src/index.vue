<template>
  <a-form
    v-if="model"
    ref="form"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <a-form-item :label="item.label" :name="item.prop" v-if="!item.children || !item.children.length">
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :placeholder="item.placeholder"
          :is="`a-${item.type}`"
          v-bind="item.attrs"
          v-model:value="model[item.prop]"
        ></component>
        <a-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :before-upload="beforeUpload"
          @change="handleChange"
          @preview="preview"
          @download="downloadFile"
          :previewFile="previewFile"
          @remove="removeFile"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </a-upload>
      </a-form-item>
      <a-form-item :label="item.label" :name="item.prop" v-if="item.children && item.children.length">
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :placeholder="item.placeholder"
          :is="`a-${item.type}`"
          v-bind="item.attrs"
          v-model:value="model[item.prop]"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`a-${child.type}`"
            :value="child.value"
          >
          {{ child.label }}
          </component>
        </component>
      </a-form-item>
    </template>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <slot name="action" :form="form" :model="model"></slot>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { cloneDeep } from 'lodash-es';

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array,
    required: true
  }
})

// 表单实例
let form = ref()
// 表单数据对象
const model = ref(null)
// 表单校验规则
const rules = ref(null)

const initForm = () => {
  if (props.options && props.options.length) {
    let m = {}
    let r = {}
    props.options.map(item => {
      m[item.prop] = item.value
      r[item.prop] = item.rules
    })
    console.log(m)
    console.log(r)
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

onMounted(() => {
  initForm()
})

// 监听父组件传递进来的options
watch(() => props.options, () => {
  initForm()
}, { deep: true })

let emits = defineEmits(['before-upload', 'preview-file', 'remove-file', 'on-change', 'on-preview', 'on-download'])
/**
 * 上传组件
 */
const beforeUpload = (file, fileList) => {
  emits('before-upload', file, fileList)
}

const previewFile = (file) => {
  emits('preview-file', file)
}


const removeFile = (file) => {
  emits('remove-file', file)
}

const handleChange = (info) => {
  emits('on-change', info)
}

const preview = (file) => {
  emits('on-preview', file)
}

const downloadFile = (file) => {
  emits('on-download', file)
}

// 重置表单
const resetFields = () => {
  form.value.resetFields();
}
// 验证表单
const validate = () => {
  return form.value.validate
}
//获取表单数据
const getFormData = () => {
  return model.value
}

// 暴露属性或方法给父组件，属性需要父组件在onMounted中接收
defineExpose({
  resetFields,
  validate,
  getFormData,
})

</script>

<style lang="less" scoped></style>
