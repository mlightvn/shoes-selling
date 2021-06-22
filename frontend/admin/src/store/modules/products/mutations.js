export default {
    setItems: (state, value) => {
        state.items = value;
    },
    setEditedItem: (state, value) => {
        state.editedItem = value;
    },
    addItem: (state, value) => {
        state.addedItem = value
        state.items.push(value)
    },
}