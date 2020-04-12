<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="index">
      <Quote>
        <p>Full stack Javascript developer</p>
      </Quote>
    </div>
    <div class="test" id="about">
      test
    </div>
  </Layout>
</template>

<script>
  import Quote from '~/components/Quote';

export default {
  metaInfo: {
    title: '.tcla cv'
  },
  components: {
    Quote,
  }
}
</script>

<style>
  .index, .test {
    height: 100vh;
  }
.home-links a {
  margin-right: 1rem;
}
</style>
