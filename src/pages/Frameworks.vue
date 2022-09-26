<template>
  <div class="main-container frameworks-container" id="frameworks">
    <div class="title">
      <PageTitle :title="title"/>
    </div>
    <div class="frameworks-block">
      <FrameworkItem
          v-for="framework in frameworks" :key="framework.id"
          :framework="framework"/>
    </div>
  </div>
</template>
<script>
import PageTitle from '@/components/shared/PageTitle.vue'
import FrameworkItem from '@/components/FrameworkItem.vue'
import Vue from '@/assets/frameworks-images/vue.png'
import Angular from '@/assets/frameworks-images/angular.png'
import React from '@/assets/frameworks-images/react.png'

export default {
  components: {PageTitle, FrameworkItem},
  data() {
    return {
      title: 'Frameworks'
      ,
      frameworks: [
        {
          id: 0,
          image: Vue,
          title: "Vue js",
          description: "Vue.js is an open source JavaScript framework for creating user interfaces. It is easily integrated into projects using other JavaScript libraries. It can function as a web framework for developing single-page applications in a reactive style."
        },
        {
          id: 1,
          image: Angular,
          title: "Angular js",
          description: "AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.",
        },
        {
          id: 2,
          image: React,
          title: "React js",
          description: "React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.",
        },
      ]
    }
  }
}

</script>

<style scoped>
.frameworks-container {
  background: #F5F7FA;
  padding-top: 45px;
  padding-bottom: 45px;
}

.frameworks-block {
  display: flex;
  flex-direction: column;
  gap: 25px
}

.frameworks-block div:nth-child(even) {
  display: flex;
  flex-direction: row-reverse;
}

.title {
  margin-bottom: 45px;
  text-align: center;
}
@media screen and (max-width: 1035px) {
  .frameworks-block div:nth-child(even){
    flex-direction: column;
    align-items: center;
  }
}

</style>
