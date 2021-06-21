export default {
    fetchItems: async ({commit}) => {
        let items = [
            {id:1, name: "Shoes 1"},
            {id:2, name: "Shoes 2"},
            {id:3, name: "Shoes 3"},
            {id:4, name: "Shoes 4"},
            {id:5, name: "Shoes 5"},
        ]

        await commit("setItems", items);

        return items
    }
}
