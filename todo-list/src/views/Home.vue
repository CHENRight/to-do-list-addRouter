<template>
  <div id="Main">
    <div class="divAll">
      <div>
          <router-link to="/">返回</router-link>
          <p>用户：{{ this.$store.state.name}}</p>
      </div>
      <div>
        <div>
          <router-link to="/list">to-do-list</router-link>
          <br />
          <router-link to="/other">My message</router-link>
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
      beforeRouteLeave: (to, from, next) => {
        const answer = window.confirm('Do you really want to leave?');
        if (answer) {
          next()
        } else {
          next(false)
        }
      },
    }
</script>

<style scoped>

</style>
