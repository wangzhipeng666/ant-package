<template>
  <a-popover trigger="click" v-model:open="visible" placement="bottomLeft">
    <template #content>
      <div class="container">
        <a-radio-group v-model:value="radioValue" button-style="solid" style="display: inline-block;">
          <a-radio-button value="a">按城市</a-radio-button>
          <a-radio-button value="b">按省份</a-radio-button>
        </a-radio-group>
        <a-select
          v-model:value="cityResult"
          show-search
          allowClear
          placeholder="请搜索城市"
          style="display: inline-block;width: 200px;margin-left: 15px;"
          :filterOption="filterOption"
          @change="handleChange"
        >
          <a-select-option v-for="item in options" :value="item.id" :key="item.id" :spell="item.spell" :name="item.name">{{ item.name }}</a-select-option>
        </a-select>
        <template v-if="radioValue === 'a'">
          <div class="city">
            <div class="city-item" v-for="item in Object.keys(cities)" @click="clickChat(item)">{{ item }}</div>
          </div>
          <div class="city-value">
            <template v-for="(value, key) in cities" :key="key">
              <a-row style="margin-bottom: 10px;" :id="key">
                <a-col :span="2">{{ key }}:</a-col>
                <a-col :span="22" class="city-name">
                  <div v-for="item in value" :key="item.id" class="city-name-item" @click="clickCity(item)">
                    {{ item.name }}
                  </div>
                </a-col>
              </a-row>
            </template>
          </div>
        </template>
        <template v-if="radioValue === 'b'">
          <div class="province">
            <div class="province-item" v-for="item in Object.keys(provinces)" @click="clickChat(item)">{{ item }}</div>
          </div>
          <div class="province-value">
            <template v-for="(item, index) in Object.values(provinces)" :key="index">
              <template v-for="(item1, index1) in item" :key="index1">
                <a-row style="margin-bottom: 10px;" :id="item1.id">
                  <a-col :span="3">{{ item1.name }}:</a-col>
                  <a-col :span="21" class="province-name">
                    <div v-for="(item2, index2) in item1.data" :key="index2" class="province-name-item" @click="clickProvince(item2)">
                      {{ item2 }}
                    </div>
                  </a-col>
                </a-row>
              </template>
            </template>
          </div>
        </template>
      </div>
    </template>
    <div class="popover-desc">
      <span style="margin-right: 5px;">{{ result }}</span>
      <DownOutlined :class="{ 'rotate': visible}"/>
    </div>
  </a-popover>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import city from '../lib/city'
import province from '../lib/province.json'

/* popover */
const visible = ref(false)
// 最终显示的结果
const result = ref('请选择')

/**
 * 数据
 */
// 所有的城市数据
const cities = ref(city.cities)
// 搜索显示城市的数据
const options = ref([])
// 所有的城市展开数据
const allCity = ref([])
// 所有的省份数据
const provinces = ref(province)

// 点击每个城市
const clickCity = (item) => {
  // 给结果赋值
  result.value = item.name
  // 关闭弹出层
  visible.value = false
  emits('changeCity', item)
}
// 点击每个省份
const clickProvince = (item) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  emits('changeProvince', item)
}
// 点击每个字母
const clickChat = (key) => {
  const el = document.getElementById(key)
  if (el) el.scrollIntoView()
}

/**
 * 搜索
 */
const radioValue = ref('a')
const cityResult = ref(null)

// 自定义过滤
const filterOption = (input, option) => {
  if (input === '') {
    return allCity.value
  } else {
    if (radioValue.value === 'a') {
      // 中文和拼音一起过滤
      return option.spell.toLowerCase().indexOf(input.toLowerCase()) !== -1 || option.name.includes(input);
    } else {
      // 中文过滤
      return option.name.includes(input);
    }
  }
}

// 分发事件
let emits = defineEmits(['changeCity', "changeProvince"])
const handleChange = (val) => {
  let city = allCity.value.find(item => item.id === val)
  result.value = city.name
  if (radioValue.value === 'a') {
    emits('changeCity', city)
  } else {
    emits('changeProvince', city.name)
  }
}

onMounted(() => {
  let values = Object.values(cities.value).flat(2)
  allCity.value = values
  options.value = values
})

</script>

<style lang="less" scoped>
.popover-desc {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  .rotate {
    
    transform: rotate(180deg);
  }
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0px;
  &-item {
    padding: 3px 6px;
    margin: 0px 8px 8px 0px;
    border: 1px solid #eee;
    cursor: pointer;
  }
  &-value {
    max-height: 300px;
    overflow: scroll;
  }
}
.container {
  width: 400px;
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
