<template>
    <VideoElement :url="videoUrl"/>
    <Content :content="content" v-bind:key="content.id" v-for="content in content.Content"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import $store from '@/store';
import { IMain } from '@/models/main';
import VideoElement from "./VideoElement.vue";
import Content from "./Content.vue";

export default defineComponent({
  name: "MainComponent",
  components: {
    VideoElement,
    Content
  },
  data() {
    return {
        videoUrl: '',
        isLoading: true
    }
  },
  props: {
    content: {
        type: Object as PropType<IMain>,
        required: true,
    }
  },    
  created() {
    this.videoUrl = $store.state.url + this.content.TrailerVideo.data?.attributes.url
  }
});
</script>
