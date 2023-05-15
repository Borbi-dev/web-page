<template>
    <header>
        <img :src="logoImgUrl"/>
        <h1>{{ content.Name }}</h1>

        <nav>
            <NavLink :content="navLink" v-bind:key="navLink.id" v-for="navLink in content.NavLink"/>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import $store from '@/store';
import { INavigation } from "@/models/navigation";
import NavLink from './NavLink.vue';

export default defineComponent({
  name: "NavigationComponent",
  data() {
    return {
        logoImgUrl: '',
    }
  },    
  props: {
    content: {
      type: Object as PropType<INavigation>,
      required: true,
    },
  },
  components: {
    NavLink
  },
  created() {
    this.logoImgUrl = $store.state.url + this.content.Logo.data.attributes.url
  }
});
</script>
