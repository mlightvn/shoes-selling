<template>
  <Banner />
  <NewCollection />
  <RacingBoots />
  <BestProducts />
  <ContactNow />
</template>

<script>
import Banner from "@/components/home/Banner.vue";
import NewCollection from "@/components/home/NewCollection.vue";
import RacingBoots from "@/components/home/RacingBoots.vue";
import BestProducts from "@/components/home/BestProducts.vue";
import ContactNow from "@/components/home/ContactNow.vue";

export default {
  components: {
    Banner,
    NewCollection,
    RacingBoots,
    BestProducts,
    ContactNow,
  },

}
</script>
