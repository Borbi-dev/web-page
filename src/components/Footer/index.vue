<template>
    <footer>
        <FooterSection :section="section" v-bind:key="section.id" v-for="section in footer.FooterElements"/>
    </footer>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineComponent } from "vue";
import FooterSection from './FooterSection.vue';

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
        isLoading: true,
    }
  },    
  props: {
    footer: {},
  },
  components: {
    FooterSection
  },
});
</script>
