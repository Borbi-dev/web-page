<template>
    <section>
        <h2> {{ section.Title }}</h2>
        <p> {{ section.Description }}</p>
    </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFooterSection } from '@/models/footer';

export default defineComponent({
  name: "FooterSection",
  props: {
    section: {
      type: Object as PropType<IFooterSection>,
      required: true,
    },
  },
  created()
  {
  }
});
</script>