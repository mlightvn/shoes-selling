<template>
  <div>
    <div class="modal fade in" tabindex="-1"
      role="dialog"
      id="EditItemModal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">Edit Item</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                ID
              </div>
              <div class="col-8">
                {{model.id}}
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                Name
              </div>
              <div class="col-8">
                <input type="text" v-model="model.name" class="form-control">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary"
              @click="handleUpdate"
              data-bs-dismiss="modal"
            ><i class="fas fa-cloud-upload-alt"></i></button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { cloneDeep } from "lodash"

export default {
  props: {
    // edit_item_modal: Object,
  },
  data() {
    return {
      model_default: {
        id: null,
        name: null,
      },
      model: null,
    }
  },

  watch: {
    "editedItem": async function () {
      this.model = await this.getEditedItem() ?? this.model_default
      this.model = cloneDeep(this.model)
    },
  },

  computed: {
    ...mapState({
      editedItem: (state) => state.products.editedItem,
    }),
  },

  methods: {
    ...mapGetters({
      getEditedItem: "products/getEditedItem",
    }),
    ...mapMutations({
      // setEditedItem: "products/setEditedItem",
    }),
    ...mapActions({
      fetchItems: "products/fetchItems",
      // searchItems: "products/searchItems",
      put: "products/put",
    }),


    async handleUpdate () {
      await this.put(this.model)
      await this.fetchItems()
    }

  },

  created() {
    console.log("created")
    this.model = this.model_default

  },

}
</script>
