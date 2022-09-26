<template>

  <Header/>

  <Home/>
  <AboutUs/>
  <Frameworks/>
  <MeetingAndQuestion/>
  <Applications/>
  <ContactUs/>

  <Footer/>

</template>
<script>
import Header from '@/components/Header.vue'
import Home from '@/pages/Home.vue'
import AboutUs from '@/pages/AboutUs.vue'
import Applications from '@/pages/Applications.vue'
import Footer from '@/components/Footer.vue'
import Frameworks from "@/pages/Frameworks";
import ContactUs from "@/pages/ContactUs";
import MeetingAndQuestion from "@/pages/MeetingAndQuestion";

export default {
  components: {Frameworks, Header, Home, AboutUs, Applications, Footer, ContactUs, MeetingAndQuestion}
}

</script>
<style>
</style>
