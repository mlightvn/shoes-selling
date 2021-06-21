<template>
  <div>
    <div class="row">
      <div class="col-md-12"></div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <td
                v-for="(header, index) in headers"
                :key="index"
              >{{header.text}}</td>
            </tr>
          </thead>
          <tbody
            v-if="getItems()"
          >
            <tr
              v-for="(item, item_index) in getItems()"
              :key="item_index"
            >
              <td
                v-for="(value, item_value_index) in item"
                :key="item_value_index"
              >{{value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {

  data() {
    return {
      headers: [
          {text: "#", value: "id"},
          {text: "Name", value: "name"},
      ],

    };
  },

  computed: {
    // ...mapState({
    //   items: (state) => state.products.items,
    // }),
  },

  methods: {
    ...mapGetters({
      getItems: "products/getItems",
    }),
    ...mapMutations({
      // setItems: "products/setItems",
    }),
    ...mapActions({
      fetchItems: "products/fetchItems",
    }),
  },

  async created() {
    await this.fetchItems()
  }
}
</script>