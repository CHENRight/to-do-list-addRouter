export default {
    loadList(state,list){
      state.items = list
    },
    addItem(state, item) {
        state.items.push(item);
    },
    updateItem(state, updateItem) {
        state.items.filter((i) => {return i.id == updateItem.id})[0].content = updateItem.content;
    },
    updateStatus(state,status){
        state.status = status;
    }
}