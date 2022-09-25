<template>
  <div class="application-item">
    <img v-bind:src="app.image" alt="app"/>
    <div class="application-item-title">
      {{ app.title }}
    </div>
  </div>
</template>
<script>
export default {

  props: {
    app: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.application-item {
  background: #3D3D3D;
}

.application-item img {
  width: 227px;
  height: 124px;
}

.application-item-title {
  height: 40px;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
