<template>
  <a-choose-city @changeCity="changeCity" @changeProvince="changeProvince"></a-choose-city>
</template>

<script setup>
import {} from 'vue'

const changeCity = (val) => {
  console.log(val)
}
const changeProvince = (val) => {
  console.log(val)
}
</script>

<style lang="less" scoped></style>
