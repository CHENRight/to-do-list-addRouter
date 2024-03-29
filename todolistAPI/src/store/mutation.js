export default {
    loadList(state,list){
      state.items = list
    },
    addItem(state, item) {
        state.items.push(item);
    },
    updateItem(state, updateItem) {
        state.items.filter((i) => {return i.id === parseInt(updateItem.id)})[0].content = updateItem.content;
    },
    updateStatus(state,status){
        state.status = status;
    },
    getInputName(state,inputName){
      state.name = inputName;
    }
}
