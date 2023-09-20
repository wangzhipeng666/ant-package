<template>
  <div>
    <a-time-picker
      v-model:value="startTime"
      :placeholder="startPlaceholder"
      style="margin-right: 10px;width: 200px;"
      allowClear
      v-bind="$attrs"
    />
    <a-time-picker
      v-model:value="endTime"
      :placeholder="endPlaceholder"
      style="width: 200px;"
      allowClear
      :disabled="!startTime"
      :disabledHours="disabledHours"
      :disabledMinutes="disabledMinutes"
      :disabledSeconds="disabledSeconds"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
})

/*定义时间数组*/
const hours = Array.from(Array(24), (v, k) => k)
const minutes = Array.from(Array(60), (v, k) => k)
const seconds = Array.from(Array(60), (v, k) => k)

const startTime = ref('')
const endTime = ref('')

// 结束时间控制-hours
const disabledHours = () => {
  let h = startTime.value.hour()
  return hours.slice(0, h);
}
// 结束时间控制-minutes
const disabledMinutes = (h) => {
  if (h > startTime.value.hour()) return []
  let m = startTime.value.minute()
  return minutes.slice(0, m)
}
// 结束时间控制-seconds
const disabledSeconds = (h, m) => {
  if (h > startTime.value.hour() || m > startTime.value.minute()) return []
  let s = startTime.value.second()
  return seconds.slice(0, s)
}

let emits = defineEmits(['startChange', 'endChange'])

// 监听开始时间的变化
watch(
  () => startTime.value,
  (val) => {
    if (val) {
      emits('startChange', val)
    } else {
      endTime.value = ''
    }
  }
)

// 监听结束时间的变化
watch(
  () => endTime.value,
  (val) => {
    if (val) {
      emits('endChange', {
        startTime: startTime.value,
        endTime: val
      })
    }
  }
)
</script>

<style lang="less" scoped></style>
