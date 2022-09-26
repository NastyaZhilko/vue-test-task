<template>
  <div class="main-container home-container" id="home">
    <h1>Welcome to Test Page</h1>
    <h2>Front-end developer</h2>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 700;
  font-size: 70px;
  line-height: 87px;
  text-align: center;
}

h2 {
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
}

.home-container {
  color: #FFFFFF;
  min-height: 100vh;
  max-width: 100%;
  background-image: url('@/assets/bg-images/homePageBg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
