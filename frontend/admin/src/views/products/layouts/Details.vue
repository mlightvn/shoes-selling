<template>
  <div>
    <div class="row my-2">
      <div class="col-md-12"></div>
    </div>
    <div class="row my-2">
      <div class="col-md-12">
        <button type="button" class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#NewItemModal"
        ><i class="fas fa-plus"></i></button>
      </div>
    </div>
    <div class="card">
      <div class="card-body p-0">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
              >{{header.text}}</th>
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
              <td
                v-if="item"
              >
                <button type="button" class="btn btn-primary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#EditItemModal"
                  @click="openEditModal(item)"
                ><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn btn-danger mx-1"
                  @click="handleDeleteModal(item.id)"
                ><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <NewItemModal />
    <EditItemModal />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import NewItemModal from "../modals/New.vue"
import EditItemModal from "../modals/Edit.vue"

export default {

  components: {
    NewItemModal,
    EditItemModal,
  },

  data() {
    return {
      headers: [
          {text: "#", value: "id"},
          {text: "Name", value: "name"},
          {text: "",},
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
      setEditedItem: "products/setEditedItem",
    }),
    ...mapActions({
      fetchItems: "products/fetchItems",
      searchItems: "products/searchItems",
      post: "products/post",
      delete: "products/delete",
    }),

    async search (model) {
      await this.searchItems(model)
    },
    async reset () {
      await this.fetchItems()
    },

    async openEditModal (model) {
      this.setEditedItem(model)
    },

    async handleDeleteModal (id) {
      console.log("handleDeleteModal", id)
      this.delete(id)
    },
  },

  async created() {
    await this.fetchItems()
  },
}
</script>