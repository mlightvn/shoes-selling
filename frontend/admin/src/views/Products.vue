<template>
    <div>
        <div class="row">
            <div class="col-md-12"></div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hoverable">
                    <thead>
                        <tr>
                            <td
                                v-for="(header, index) in headers"
                                :key="index"
                            >{{header.text}}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                          v-for="(item, item_index) in items"
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

<script lang="javascript">
export default {

  data() {
    return {
      headers: [
          {text: "#", value: "id"},
          {text: "Name", value: "name"},
      ],
      items: [
          {id:1, name: "Shoes 1"},
          {id:2, name: "Shoes 2"},
          {id:3, name: "Shoes 3"},
          {id:4, name: "Shoes 4"},
          {id:5, name: "Shoes 5"},
      ],
    };
  },

}
</script>