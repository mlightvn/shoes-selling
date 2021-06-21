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
                <input type="number" v-model="model.id" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                Name
              </div>
              <div class="col-8">
                <input type="number" v-model="model.name" class="form-control">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary"><i class="fas fa-cloud-upload-alt"></i></button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    edit_item_modal: Object,
  },
  data() {
    return {
      model: {
        id: null,
        name: null,
      }
    }
  },

  watch: {
    "edit_item_modal": async function() {
      console.log("edit_item_modal changed")
      this.model = this.edit_item_modal
    }
  },

  created() {
    console.log("created")
    console.log("this.edit_item_modal")
    console.log(this.edit_item_modal)
  },

}
</script>
