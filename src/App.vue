<template>
  <div id="app">
    <router-view :key="key" />
    <a-button type="primary">这是一个按钮</a-button>
  </div>
</template>

<script>
export default {
  created() {},
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
