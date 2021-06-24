import Api from "./index"

const SUB_URI = "/products"

Api.url = SUB_URI

export default {

  async getAll() {
    let data = null
    await Api.get(SUB_URI)
      .then(function (response) {
        data = response?.data?.list
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      })
    return data
  },

  async post(id, model) {
    return await Api.post(SUB_URI + "/" + id, model);
  },

  async put(id, model) {  
    return await Api.put(SUB_URI + "/" + id, model);
  },

  async get(id) {
    return await Api.get(SUB_URI + "/" + id);
  },

  async delete(id) {
    return await Api.delete(SUB_URI + "/" + id);
  },

  async search(model) {
    let data = null
    await Api.get(SUB_URI + "/search", {params: model})
    .then(function (response) {
      data = response?.data?.list
    })
    .catch(function (error) {
      console.log("error");
      console.log(error);
    })
    return data
  }
}