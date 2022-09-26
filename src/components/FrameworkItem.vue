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

.framework-item {
  background-color: #FFFFFF;
  display: flex;
  gap: 60px;
  border-radius: 5px;
}

.framework-item-info {
  padding: 24px 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.buttons {
  display: flex;
  gap: 25px
}
</style>
