<template>
  <div id="app">
    <router-view :key=""></router-view>
  </div>
</template>

<script>
export default {
  created() {
  },
  computed: {
    key(){
      return {}
    }
  }
}
</script>