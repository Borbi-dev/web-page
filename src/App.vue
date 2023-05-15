<template>
  <Navigation :content="nav" v-if="!isLoading"/>
  <router-view />
  <Footer :footer="footer" v-if="!isLoading"/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import $store from '@/store';
import Navigation from '@/components/Navigation/index.vue';
import Footer from '@/components/Footer/index.vue';

export default defineComponent({
  name: "App",
  data() {
    return {
      nav: {},
      main: {},
      footer: {},
      isLoading: true
    }
  },
  components: {
    Navigation,
    Footer
  },
  methods: {
    async fetch(link: String)
    {
      const response = await $store.dispatch({
      type: 'fetch',
      link: link
      });

      return response;
    }
  },
  async created() {
    this.nav = await this.fetch('/api/naviagtion')
    this.nav = this.nav.data.attributes
    this.footer = await this.fetch('/api/footer')
    this.footer = this.footer.data.attributes


    this.isLoading = false
  }
});
</script>
