<template>
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
      <a-button>Click to Upload</a-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500kb</div>
    </template>
    <template #action="scope">
      <a-button type="primary" @click="onSubmit(scope)">保存</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
    </template>
  </a-custom-form>
</template>

<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'

let form = ref()

let options = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      allowClear: true
    }
  },
  {
    type: 'input-password',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      visibilityToggle: true
    }
  },
  {
    type: 'select',
    value: null,
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'select-option',
        label: '经理',
        value: '1'
      },
      {
        type: 'select-option',
        label: '主管',
        value: '2'
      },
      {
        type: 'select-option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
        trigger: 'blur'
      }
    ],
  },
  {
    type: 'editor',
    value: '123',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]

const labelCol = {
    span: 4,
}
const wrapperCol = {
    span: 14,
}

// 重置表单
const resetForm = () => {
  form.value.resetFields();
};

// 提交表单
const onSubmit = (scope) => {
  scope.form.validate().then(() => {
    console.log(scope.model)
    message.success('提交成功')
  }).catch((err) => {
    console.log('err:', err)
    message.error('表单填写有误,请检查')
  })
}

/**
 * 上传组件
 */
const beforeUpload = (file, fileList) => {
  console.log('beforeUpload', file, fileList)
}

const previewFile = (file) => {
  console.log('previewFile', file)
}


const removeFile = (file) => {
  console.log('removeFile', file)
}

const handleChange = (info) => {
  console.log('info:', info)
}

const preview = (file) => {
  console.log('preview', file)
}

const downloadFile = (file) => {
  console.log('downloadFile', file)
}
</script>

<style lang="less" scoped></style>
