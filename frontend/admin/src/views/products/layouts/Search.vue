<template>
  <div>
    <div class="card">
      <div class="card-header">
        <strong>Search</strong>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <div class="row">
              <div class="col-4">
                ID
              </div>
              <div class="col-8">
                <input type="number" v-model="model.id" class="form-control">
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-4">
                Name
              </div>
              <div class="col-8">
                <input type="text" v-model="model.name" class="form-control">
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-4">
                Brand
              </div>
              <div class="col-8">
                <input type="text" v-model="model.brand" class="form-control">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-12 text-right">
            <button type="button" class="btn btn-primary mx-1" @click="search"><i class="fas fa-search"></i></button>
            <button type="button" class="btn btn-secondary mx-1" @click="reset"><i class="fas fa-recycle"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      model: {
        id: null,
        name: null,
        brand: null,
      }
    }
  },

  methods: {
    async search () {
      this.$emit("search", this.model)
    },
    async reset () {
      this.$emit("reset")
    },
  }
}
</script>
