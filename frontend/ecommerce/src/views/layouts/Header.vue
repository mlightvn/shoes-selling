<template>
  <NavBar />

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "./NavBar.vue";

// export default {
//   components: {
//     NavBar,
//   },
// }

@Options({
  components: {
    NavBar,
  },
})
export default class Header extends Vue {}
</script>
