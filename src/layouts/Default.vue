<template>
  <div>
    <div class="gradient">
    </div>
    <Spinner :isLoading="dataLoaded" />
     <Navigation />
    <div class="layout">
      <slot />
    </div>
    <Footer />
  </div>

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Navigation from "~/components/Navigation";
  import Spinner from "~/components/Spinner";
  import Footer from "~/components/Footer";

  export default {
    components: {
      Navigation, 
      Spinner,
      Footer,
    },
    data() {
      return {
        dataLoaded: true 
        }
    },
    mounted() {
      setTimeout(() => this.dataLoaded = false, 2000);
    }
  }
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  margin:0;
  padding:0;
  line-height: 1.5;
  scroll-behavior: smooth;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.gradient {
  background-image:
          radial-gradient(circle at 79% 12%, rgba(252, 252, 252,0.04) 0%, rgba(252, 252, 252,0.04) 50%,rgba(116, 116, 116,0.04) 50%, rgba(116, 116, 116,0.04) 100%),
          radial-gradient(circle at 98% 39%, rgba(136, 136, 136,0.04) 0%, rgba(136, 136, 136,0.04) 50%,rgba(34, 34, 34,0.04) 50%, rgba(34, 34, 34,0.04) 100%),
          radial-gradient(circle at 83% 49%, rgba(234, 234, 234,0.04) 0%, rgba(234, 234, 234,0.04) 50%,rgba(56, 56, 56,0.04) 50%, rgba(56, 56, 56,0.04) 100%),
          linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
</style>
