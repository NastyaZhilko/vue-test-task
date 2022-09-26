<template>
  <div class="framework-item">
    <img v-bind:src="framework.image" alt="app"/>
    <div class="framework-item-info">
      <div class="framework-item-text">
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

@media screen and (max-width: 1240px) {
  .framework-item {
    gap: 30px
  }
}

@media screen and (max-width: 1035px) {
  .framework-item {
    flex-direction: column;
    align-items: center;
  }

  .framework-item-info {
    align-items: center;
    max-width: 535px;
    padding: 24px 0
  }

  .framework-item-text {
    text-align: center;
    padding-bottom: 12px;
  }
}

@media screen and (max-width: 700px) {
  img {
    width: 100%;
  }
}
</style>
