<template>
  <div>
    <a-select
      v-model:value="province"
      style="width: 200px"
      placeholder="请选择省份"
      :allowClear="true"
    >
      <a-select-option
          v-for="item in allAreasOptions"
          :key="item.code"
          :value="item.code"
      >
      {{ item.name }}
      </a-select-option>
    </a-select>
    <a-select
      v-model:value="city"
      style="width: 200px;margin: 0 10px;"
      placeholder="请选择城市"
      :disabled="!province"
      :allowClear="true"
    >
      <a-select-option
          v-for="item in cityOptions"
          :key="item.code"
          :value="item.code"
      >
      {{ item.name }}
      </a-select-option>
    </a-select>
    <a-select
      v-model:value="area"
      style="width: 200px"
      placeholder="请选择区域"
      :disabled="!province||!city"
      :allowClear="true"
    >
      <a-select-option
          v-for="item in areaOptions"
          :key="item.code"
          :value="item.code"
      >
      {{ item.name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

const province = ref(null)
const city = ref(null)
const area = ref(null)

const allAreasOptions = ref(allAreas)
const cityOptions = ref([])
const areaOptions = ref([])

watch(
  () => province.value,
  (val) => {
    if (val) {
      const cities = allAreasOptions.value.find((item) => {
        return item.code === province.value
      })?.children
      cityOptions.value = cities
    } else {
      city.value = null
      area.value = null
    }
  }
)

watch(
  () => city.value,
  (val) => {
    if (val) {
      const areas = cityOptions.value.find((item) => {
        return item.code === city.value
      })?.children
      areaOptions.value = areas
    } else {
      area.value = null
    }
  }
)

const emits = defineEmits(['change'])

watch(
  () => area.value,
  (val) => {
    if (val) {
      const provinceData = {
        code: province.value,
        name: allAreasOptions.value.find(item => item.code === province.value)?.name
      }
      const cityData = {
        code: city.value,
        name: cityOptions.value.find(item => item.code === city.value)?.name
      }
      const areaData = {
        code: area.value,
        name: areaOptions.value.find(item => item.code === area.value)?.name
      }
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
      })
    }
  }
)
</script>

<style lang="less" scoped></style>
