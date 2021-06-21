<template>
  <div class="main-layout">
    <Header />
<!--
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
-->
    <router-view />
    <Footer />

  </div>

</template>


<script>
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
