<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Dashboard from "@/components/dashboard/Index.vue"; // @ is an alias to /src

@Options({
  components: {
    Dashboard,
  },
})
export default class Dashboard extends Vue {}
</script>
