<template>
    <div id="Main">
        <div>
            <input type="text" placeholder="enter your name"/>
            <a href="#" @click="pushRouter">Start Using</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods: {
            pushRouter(){
              this.$router.push('/home')
            }
        }
    }

</script>

<style scoped>

</style>
