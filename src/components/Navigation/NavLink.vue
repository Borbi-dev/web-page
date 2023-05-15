<template>
    <router-link :to="content.route">{{ content.name }}</router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NavLink } from "@/models/navigation";

export default defineComponent({
  name: "NavLinkComponent",
  props: {
    content: {
      type: Object as PropType<NavLink>,
      required: true,
    },
  },
  created() {
    
  }
});
</script>
