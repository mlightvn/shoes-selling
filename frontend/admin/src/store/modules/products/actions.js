import ApiProducts from "@/api/products"

export default {
    fetchItems: async ({commit}) => {
        let items = []

        items = await ApiProducts.getAll()

        await commit("setItems", items);

        return items
    },
    searchItems: async ({commit}, model) => {
        let items = []

        items = await ApiProducts.search(model)

        await commit("setItems", items);

        return items
    },
    post: async ({commit}, model) => {
        await ApiProducts.post(model.id, model)
        .then(function (response) {
            console.log("response?.data?.model")
            console.log(response?.data?.model)

            commit("setAddedItem", model);
        })

        return model
    },
    put: async ({commit}, model) => {
        await ApiProducts.put(model.id, model)
        .then(function (response) {
            console.log("response?.data?.model")
            console.log(response?.data?.model)

            commit("setEditedItem", model);
        })

        return model
    },
    delete: async ({commit}, model) => {
        await ApiProducts.delete(model.id)
        .then(function (response) {
            console.log("response?.data?.model")
            console.log(response?.data?.model)

            commit("setEditedItem", model);
        })

        return model
    },
}
