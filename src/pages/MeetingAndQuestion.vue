<template>
  <div class="main-container connecting-container">
    <div class="meeting-block" v-for="item in items" :key="item.id">
      <img :src="item.img" alt=""/>
      <div class="description">
        <div class="text">
          <h3> {{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <div class="buttons">
          <common-button>{{ item.buttonName }}</common-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Meeting from '../assets/meeting.png'
import Question from '../assets/question.png'

export default {

  data() {
    return {
      items: [
        {
          title: 'Setup a Meeting',
          description: 'Fill out our contact form and have someone get back to you within 24 hours.',
          img: Meeting,
          buttonName: 'Schedule a Meeting'
        },
        {
          title: 'Ask a Question',
          description: 'Have a question? Just fill out our contact us form and we will get back to you.',
          img: Question,
          buttonName: 'Ask a question'
        }
      ]
    }
  }
}

</script>
<style scoped>
.connecting-container {
  background: #FFFFFF;
  display: flex
}

.meeting-block {
  display: flex;
}

.description {
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  padding: 10px 30px
}

@media screen and (max-width: 1400px) {
  .connecting-container {
    flex-direction: column;
    align-items: center;
    gap: 24px
  }
}

@media screen and (max-width: 735px) {
  .meeting-block {
    flex-direction: column;
  }

  .description {
    align-items: center;
    padding: 26px 0
  }

  .text {
    text-align: center;
    padding-bottom: 12px;
  }
}


</style>
