<template>
  <div class="main-container header-container">
    <div><img alt="Vue logo" class="logo" src="@/assets/logo.svg"/></div>
    <div>
      <navigation/>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: {Navigation}
}

</script>


<style scoped>
.header-container {
  height: 80px;
  background: #F8F9FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0;
/*  padding: 0 120px*/
}
/* @media screen and (max-width: 1143px) {
   .header-container{
     padding: 0 60px
   }
}
@media screen and (max-width: 600px) {
  .header-container{
    padding: 0 30px
  }
}*/
</style>
