<template>
  <div class="framework-item">
    <img v-bind:src="framework.image" alt="app"/>
    <div class="framework-item-info">
      <div>
        <h3> {{ framework.title }}</h3>
        <p>{{ framework.description }}</p>
      </div>
      <div class="buttons">
        <common-button>Read more</common-button>
        <common-button mode="white">Webinar</common-button>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  components: {},

  props: {
    framework: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
h3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #3D3D3D;
  margin-bottom: 10px;
}

.framework-item {
  background-color: #FFFFFF;
  display: flex;
  gap: 60px;
  border-radius: 5px;
}

.framework-item-info {
  padding: 24px 12px;
  color: #3D3D3D;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.framework-item-info p {
  color: #808080;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.buttons {
  display: flex;
  gap: 25px
}
</style>
