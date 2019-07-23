<template>
  <div id="Main">
    <div>
      <div>
          <a href="/"  onClick="return confirm('确定返回?')">返回</a>
          <p>用户：{{ this.$store.state.name}}</p>
      </div>
      <div>
        <div>
          <a href="/list">to-do-list</a>
          <br />
          <a href="/other">hello world</a>
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
