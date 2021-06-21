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
}
