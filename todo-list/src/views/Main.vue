<template>
    <div id="Main">
        <div>
            <input type="text" placeholder="enter your name" v-model="inputName"/>
          <br/><br/>
            <a href="#" @click="pushRouter">Start Using</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
          return{
            inputName:''
          }
        },
        methods: {
            pushRouter(){
              this.$store.commit('getInputName',this.inputName)
              this.$router.push('/home')
            },

        }
    }

</script>

<style scoped>
  div{
    text-align: center;
    padding-top: 30px;
  }
  input{
    width: 500px;
    height: 50px;
    border: unset;
    border-bottom: #0d3349 2px solid;
  }
  input::-webkit-input-placeholder{
    font-family: Cambria;
    font-size: 40px;
  }
  a{

  }
</style>
