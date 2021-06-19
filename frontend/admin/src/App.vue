<template>
  <div id="wrapper">
    <NavBar />

    <main id="content-wrapper" class="d-flex flex-column">

      <div id="content">
        <TopBar />
        <div class="container-fluid">
          <router-view />
        </div>
      </div>

      <Footer />

    </main>
    <!-- End of Content Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#wrapper">
        <i class="fas fa-angle-up"></i>
    </a>

    <LogoutModal />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/views/layouts/NavBar.vue";
import TopBar from "@/views/layouts/TopBar.vue";
import Footer from "@/views/layouts/Footer.vue";
import LogoutModal from "@/views/layouts/LogoutModal.vue";


@Options({
  components: {
    NavBar,
    TopBar,
    Footer,
    LogoutModal,
  },
})
export default class App extends Vue {}
</script>
