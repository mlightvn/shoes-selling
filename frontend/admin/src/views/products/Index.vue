<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <Search @search="search" @reset="reset"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <Details ref="details" />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./layouts/Search.vue";
import Details from "./layouts/Details.vue";

export default {

  components: {
    Search,
    Details,
  },

  methods: {
    async search(model){
      this.$refs.details.search(model)
    },
    async reset(){
      this.$refs.details.reset()
    },
  },
}
</script>