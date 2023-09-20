<template>
    <a-choose-time @startChange="startChange" @endChange="endChange"></a-choose-time>
</template>

<script setup>
import {} from 'vue'

const startChange = (val) => {
    console.log(val)
}
const endChange = (val) => {
    console.log(val)
}
</script>

<style lang="less" scoped></style>
  