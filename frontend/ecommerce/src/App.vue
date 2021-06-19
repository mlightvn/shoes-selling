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

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
