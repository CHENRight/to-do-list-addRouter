<template>
  <div id="Main">
    <div>
      <div>
          <a href="/"  onClick="return confirm('确定返回?')">返回</a>
          <p>用户：{{ this.$store.state.name}}</p>
      </div>
      <div>
        <div>
          <router-link to="/list">to-do-list</router-link>
          <br />
          <router-link to="/other">hello world</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "Home",
    }
</script>

<style scoped>

</style>
