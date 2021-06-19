<template>
  <div id="wrapper">
    <NavBar />

    <main id="content-wrapper" class="d-flex flex-column">

      <div id="content">
        <Topbar />
        <div class="container-fluid">
          <router-view />
        </div>
      </div>

      <Footer />

    </main>
    <!-- End of Content Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <LogoutModal />

<!-- 
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
 -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/views/layouts/NavBar.vue";
import Topbar from "@/views/layouts/Topbar.vue";
import Footer from "@/views/layouts/Footer.vue";
import LogoutModal from "@/views/layouts/LogoutModal.vue";


@Options({
  components: {
    NavBar,
    Topbar,
    Footer,
    LogoutModal,
  },
})
export default class App extends Vue {}
</script>
