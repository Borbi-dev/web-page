<template>
  <Main :content="homePage" v-if="!isLoading"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import $store from '@/store';
import Main from '@/components/Home/index.vue';
import { IMain } from "@/models/main";

export default defineComponent({
  name: "HomeView",
  components: {
    Main
  },
  data() {
    return {
      isLoading: true,
      homePage: {} as IMain
    }
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
    let content = await this.fetch('/api/home-page')
    this.homePage = content.data.attributes
    
    this.isLoading = false;
  }
});
</script>
