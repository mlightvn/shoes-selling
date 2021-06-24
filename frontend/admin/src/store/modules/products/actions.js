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
    post: async ({commit, dispatch}, model) => {
        await ApiProducts.post("", model)
        .then(function (response) {
            console.log("response?.data")
            console.log(response?.data)

            commit("setAddedItem", model);
            dispatch("fetchItems")
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

    /* eslint-disable */
    async delete({dispatch}, id) {
        if(id === null){
            return null
        }

        await ApiProducts.delete(id)
        .then(function (response) {
            console.log("response?.data")
            console.log("response?.data")
            console.log(response?.data)

            dispatch("fetchItems")
        })

        return
    },
}
