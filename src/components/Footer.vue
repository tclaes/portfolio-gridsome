<template>
  <div id="footer">
    <div></div>
    <div></div>
    <div class="copyright" v-html="copy">{{ copy }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      const year = new Date().getFullYear();

      return {
        copy: `&copy; ${year}`
      }
    }
  }
</script>

<style lang="scss" scoped>
#footer {
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  min-height: 30px;
  padding: 0 20px;
}

</style>