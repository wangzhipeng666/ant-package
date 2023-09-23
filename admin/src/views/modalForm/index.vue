<template>
  <a-button type="primary" @click="showModal">Open Modal</a-button>
  <a-modal-form
    v-model:visible="visible"
    :options="options"
    title="弹窗表单"
    width="50%"
    ref="form"
  >
    <template #uploadArea>
      <a-button size="small" type="primary">Click to upload</a-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500kb</div>
    </template>
    <template #footer="scope">
      <a-button key="back" @click="handleCancel">取消</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">确定</a-button>
    </template>
  </a-modal-form>
</template>

<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'

// 表单
let form = ref(null)
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
    value: '<h2>123</h2>',
    prop: 'desc',
    label: '描述',
    editorOptions: {
      modules: {
        toolbar: ['bold', 'italic', 'underline']
      },
      theme: 'snow',
      placeholder: '请输入描述',
    },
    attrs: {
      style: {
        height: '300px',
        overflow: 'auto'
      },
    },
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]

// 弹窗
const visible = ref(false);
const showModal = () => {
  visible.value = true
}

const handleCancel = () => {
  visible.value = false
}

let loading = ref(false)
const handleOk = () => {
  console.log('form is:', form.value)
  form.value.validate().then(() => {
    console.log(form.value.getFormData())
    message.success('保存成功')
  }).catch((err) => {
    console.log('err:', err)
    message.error('表单填写有误,请检查')
  })
}
</script>

<style lang="less" scoped></style>
