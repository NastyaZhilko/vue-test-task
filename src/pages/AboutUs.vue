<template>
  <div class="main-container about-container" id="about">
    <div class="about-description">
      <PageTitle :title="title"/>
      <p>{{ description }}</p>
      <div class="buttons">
        <common-button>Read me</common-button>
        <common-button mode="white">Contact us</common-button>
      </div>
    </div>
    <img src="@/assets/videoAboutUs.png" alt="">
  </div>
</template>

<script>
import PageTitle from '@/components/shared/PageTitle.vue'

export default {
  components: {PageTitle},
  data() {
    return {
      title: 'About us',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.'
    }
  }
}

</script>
<style scoped>


.about-container {
  color: #FFFFFF;
  max-width: 100%;
  background-image: url("@/assets/bg-images/aboutUsBg.png");
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 45px;
  padding-bottom: 45px;
}

.about-description {
  display: flex;
  flex-direction: column;
  gap: 16px
}

@media screen and (max-width: 1240px) {
  .about-container {
    flex-direction: column;
  }

  .about-description {
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 590px) {
  img {
    width: 100%;
  }
}

</style>
