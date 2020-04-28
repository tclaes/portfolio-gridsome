<template>
  <fixed-header>
    <header class="header">
      <div class="navigation">
        <nav class="nav">
          <div class="logo">
            <strong>
              <g-link to="/" class="logo">
                <g-image src="~/assets/images/tcla.svg" />
              </g-link>
            </strong>
          </div>
          <div class="nav-links">
            <g-link class="nav__link" to="/">Home</g-link>
            <span v-for="links in $static.links.edges" :key="links.node.id">
              <a class="nav__link" href="#about">{{ links.node.text }}</a>
            </span>
          </div>
        </nav>
      </div>
    </header>
  </fixed-header>
</template>

<static-query>
query {
  links: allMenuItems {
    edges {
      node {
        id, 
        text
      }
    }
  }
}
</static-query>

<script>
import FixedHeader from 'vue-fixed-header';
const sendQuery = require('../../functions/utils/send-query');

const query = `
  query{
    allNavItems{
      data{
        text
      }
    }
  }
`;

export default {
  components: {
    FixedHeader,
  }, 
  async created() {
    // const { data } = await sendQuery(query)
    // console.log(data.allNavItems.data);
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.logo {
  width: 70px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: calc(100vw - 40px);
}

.nav__link {
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 20px;
  text-decoration: none;
}

.nav__link:hover {
  color: #ff0101;
}

.vue-fixed-header--isFixed {
  background: rgba(255, 255, 255, 1);
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
