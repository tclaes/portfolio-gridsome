<template>
  <Layout>
    <div class="index">
      <Quote>
        <p>Full stack Javascript developer</p>
      </Quote>
    </div>
  </Layout>
</template>

<script>
import Quote from '~/components/Quote';
import axios from 'axios';

export default {
  metaInfo: {
    title: '.tcla cv',
  },
  components: {
    Quote,
  }
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  align-items: center;
  height: calc(100vh - 110px);
}

.home-links a {
  margin-right: 1rem;
}
</style>
