<template>
    <p>{{ content.ContentText }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import $store from '@/store';
import { IContent } from "@/models/main";

export default defineComponent({
  name: "ContentComponent",
  props: {
    content: {
        type: Object as PropType<IContent>,
        required: true,
    }
  }
});
</script>