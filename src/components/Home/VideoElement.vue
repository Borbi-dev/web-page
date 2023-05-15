<template>
    <video width="320" height="240" controls>
        <source :src="url" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoComponent",
  props: {
    url: String
  },
});
</script>