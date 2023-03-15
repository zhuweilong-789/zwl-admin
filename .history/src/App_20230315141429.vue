<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  created() {
  },

  computed: {
    key(){
      return this.$route.path
    }
  }
}
</script>