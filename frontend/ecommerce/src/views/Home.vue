<template>
  <Banner />
  <NewCollection />
  <RacingBoots />
  <BestProducts />
  <ContactNow />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Banner from "@/components/home/Banner.vue";
import NewCollection from "@/components/home/NewCollection.vue"; // @ is an alias to /src
import RacingBoots from "@/components/home/RacingBoots.vue"; // @ is an alias to /src
import BestProducts from "@/components/home/BestProducts.vue"; // @ is an alias to /src
import ContactNow from "@/components/home/ContactNow.vue"; // @ is an alias to /src

@Options({
  components: {
    Banner,
    NewCollection,
    RacingBoots,
    BestProducts,
    ContactNow,
  },
})
export default class Home extends Vue {}
</script>
