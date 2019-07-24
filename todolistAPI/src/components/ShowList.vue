<template>
    <div>
        <ol>
            <li v-for="(item) in getShowList" v-bind:key="item.id" v-bind:class="{checked:item.isChecked}"
                :id="item.id">
                <a-checkbox v-model="item.isChecked"></a-checkbox>
<!--                <input name="done-todo" type="checkbox" class="done-todo" v-model="item.isChecked" >-->
                <span v-bind:contenteditable="true" @blur="updateItem" :id="item.id">{{item.content}}</span>
                <button @click="deleteItem" :id="item.id">X</button>
            </li>
        </ol>
    </div>
</template>
<script>
    import {mapGetters } from 'vuex';
    export default {
        name: 'List',
        computed: {
            ...mapGetters([
                'getShowList'
            ])
        },
        methods: {
          updateItem(e) {
              this.$store.dispatch('UpdateItemContent',{id: e.target.id, content: e.target.innerText});
          },
          deleteItem(e){
            this.$store.dispatch('deleteItem',e.target.id);
          },
        }
    }
</script>
<style scoped>
  button{
    width:30px;
    height: 20px;
    float: right;
    border: unset;
    border-radius: 5px;
    background-color: cadetblue;
    opacity: 0.7;
  }
</style>
