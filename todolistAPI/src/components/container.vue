<template>
    <div id="container" class="container">
        <div>
            <h2>Jquery To Do List</h2>
            <em>Simple Todo List with adding and filter by diff status.</em>
        </div>
        <div>
            <input type="text" class="input-text" name="ListItem" v-model="item">
            <div id="button" @click="addItem">Add</div>
        </div>
        <showlist></showlist>
        <Footer @change="changeShow"></Footer>
    </div>

</template>

<script>
    import showlist from './ShowList.vue'
    import Footer from './Footer.vue'
    export default {
        name: 'container',
        components: {
          showlist,
          Footer
        },
        data() {
            return {
                items: [],
                item: "",
                itemsCopy:[],
            }
        },
        methods: {
            addItem(){
                this.$store.dispatch('AddItem',{content:this.item,isChecked:false,id:Date.parse(new Date())});
                this.item = "";
            },
            changeShow(flag){
                this.$store.state.flags = flag;
            }
        },
        mounted(){
            this.$store.dispatch('loadList');
        },
    }
</script>

<style>
    body {
        font: normal normal 13px/16px "Open Sans", sans-serif;
        background: #ccc;
    }

    .container{
        padding: 20px;
        width: 400px;
        margin: 0 auto;
        margin-top: 40px;
        background: white;
        border-radius: 5px;
    }

    .input-text{
        width: 70%;
    }

    input{
        padding: 4px 15px 4px 0;

    }

    #button{
        display: inline-block;
        background-color:#fc999b;
        color:#ffffff;
        border-radius: 5px;
        text-align:center;
        margin-top:2px;
        padding: 5px 15px;
    }

    #button:hover{
        cursor: pointer;
        opacity: .8;
    }

    ol {
        padding-left: 20px;
    }

    ol li {
        padding: 5px;color:#000;
    }

    ol li span{
        word-break:break-all;
        width: 70%;
    }

    ol li:nth-child(even){
        background: #f4ecec;
    }

    li:hover{
        cursor: pointer;
    }



    #filters li a {
        color: #fc999b;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
    }

    #filters li a.selected, #filters li a:hover {
        border-color: rgba(175, 47, 47, 0.1);
    }

    #filters li {
        display: inline;
        margin: 0 0 5px 0;
        padding: 8px;
        list-style: none;
        outline: none;
    }

</style>
