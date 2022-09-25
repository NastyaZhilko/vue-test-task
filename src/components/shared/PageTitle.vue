<template>
  <span class="title">{{ title }}</span>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style scoped>
.title {
  color: #3D3D3D;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
}
</style>
