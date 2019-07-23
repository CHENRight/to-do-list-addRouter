<template>
    <div id="Main">
        <div>
            <input type="text" placeholder="enter your name" v-model="inputName"/>
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

</style>
