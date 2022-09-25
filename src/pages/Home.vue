<template>
  <div class="home-page-container" id="home">
    <h1>Welcome to Test Page</h1>
    <h2>Front-end developer</h2>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 700;
  font-size: 70px;
  line-height: 87px;

}

h2 {
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
}

.home-page-container {
  color: #FFFFFF;
  min-height: 100vh;
  max-width: 100%;
  background-image: url('@/assets/bg-images/homePageBg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 120px
}
</style>
