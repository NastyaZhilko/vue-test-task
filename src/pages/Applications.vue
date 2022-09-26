<template>
  <div class="main-container applications-container" id="applications">
    <div class="title">
      <PageTitle :title="title"/>
    </div>
    <div class="applications-block">
      <ApplicationItem v-for="application in applications" :key="application.id"
                       :app="application"/>

    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/shared/PageTitle.vue'
import ApplicationItem from '@/components/ApplicationItem.vue'
import App1 from '@/assets/apps-images/app1.png'
import App2 from '@/assets/apps-images/app2.png'
import App3 from '@/assets/apps-images/app3.png'
import App4 from '@/assets/apps-images/app4.png'
import App5 from '@/assets/apps-images/app5.png'
import App6 from '@/assets/apps-images/app6.png'
import App7 from '@/assets/apps-images/app7.png'
import App8 from '@/assets/apps-images/app8.png'

export default {
  components: {PageTitle, ApplicationItem},
  data() {
    return {
      title: 'Applications'
      ,
      applications: [
        {
          id: 0,
          title: 'App1',
          image: App1
        },
        {
          id: 1,
          title: 'App2',
          image: App2
        },
        {
          id: 2,
          title: 'App3',
          image: App3
        },
        {
          id: 3,
          title: 'App4',
          image: App4
        },
        {
          id: 4,
          title: 'App5',
          image: App5
        },
        {
          id: 5,
          title: 'App6',
          image: App6
        },
        {
          id: 6,
          title: 'App7',
          image: App7
        },
        {
          id: 7,
          title: 'App8',
          image: App8
        },
      ]
    }
  }
}

</script>

<style scoped>

.applications-container {
  background: #F5F7FA;
  padding-top: 45px;
  padding-bottom: 45px;
}

.title {
  margin-bottom: 45px;
  text-align: center;
}

.applications-block {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 45px
}

@media screen and (max-width: 765px) {
  .applications-block {
    flex-direction: column;
    align-items: center;
  }
}

</style>
