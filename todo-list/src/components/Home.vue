<template>
  <div id="Main">
    <div>
      <div>
          <a href="/"  onClick="return confirm('确定返回?')">返回</a>
          <p>用户：{{ this.$store.state.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Main from './Main'
    export default {
      name: "Home",
      data(){
        return {

        }
      },
      methods: {

      },
      components:{
        Main,
      },
      props:{

      }
    }
</script>

<style scoped>

</style>
