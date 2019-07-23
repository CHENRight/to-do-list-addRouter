import axios from 'axios'
const url = "http://localhost:3001/todos/";

export default {

    loadList({ commit }){
        axios.get(url).
                then(response => commit('loadList',response.data))
                .catch((error) => console.log(error));
    },

    AddItem(context,item){
        axios.post(url,item)
            .then(response => context.commit('addItem',response.data))
            .catch(error => console.log(error));
    },

    UpdateItemContent(context,item){
      axios.put(url + "/" + item.id,item)
          .then(response => context.commit('updateItem',response.data))
          .catch(error => console.log(error));
    },


}



