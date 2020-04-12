<template>
    <fixed-header>
        <header class="header">
            <strong>
                <g-link to="/" class="logo">
                    <g-image src="~/assets/tcla.svg" />
                </g-link>
            </strong>
            <nav class="nav">
                <g-link class="nav__link" to="/">Home</g-link>
                <a class="nav__link" href="#about">About</a>
            </nav>
        </header>
    </fixed-header>
</template>

<script>
  import FixedHeader from 'vue-fixed-header';

  export default {
    metaInfo: {
      title: 'About us'
    },
    components: {
        FixedHeader
    }
  }
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        height: 80px;
    }

    .nav__link {
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 20px;
        text-decoration: none;
    }

    .nav__link:hover {
        color: #FF0101;
    }

    .vue-fixed-header--isFixed {
        background: rgba(255, 255, 255, 1);
        padding: 0 20px;
        position: fixed;
        left: 0;
        top: 0;
        width: calc(100vw - 40px);
    }

    .vue-fixed-header--isFixed img {
        width: 70px;
    }
</style>
