<template>
  <a-choose-area @change="handleChange"></a-choose-area>
</template>

<script setup>
import {} from 'vue'

const handleChange = (data) => {
  console.log(data)
}
</script>

<style lang="less" scoped></style>
