<template>
  <video :class="style" ref="background">
    <source :src="url" :type="mimeType" />
  </video>
</template>

<script>
export default {
  name: "Background",
  data() {
    return {
      mimeTypes: ["mp4", "webm", "ogg"]
    };
  },
  props: {
    url: {
      required: true,
      type: String
    },
    mimeType: String,
    direction: {
      required: true,
      type: String
    }
  },
  mounted() {
    this.$refs.background.onloadstart = () => {
      console.log("开始加载这个视频");
    };
    this.$refs.background.onloadedmetadata = () => {
      console.log("开始加载视频元数据");
    };
    this.$refs.background.oncanplay = () => {
      console.log("这个视频可以播放了");
    };

    this.$refs.background.preload = "auto";
    this.$refs.background.volume = 0.5;
    this.$refs.background.loop = true;
    this.$refs.background.autoplay = true;
    this.$refs.background.load();

    this.timer = setInterval(() => {
      console.log("video readyState:", this.$refs.background.readyState);

      if (this.$refs.background.readyState != 0) {
        clearInterval(this.timer);
      } else {
        this.$refs.background.load();
      }
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  computed: {
    style() {
      return `background ${this.direction}`;
    }
  },
};
</script>

<style lang="scss" scoped>
.horizontal {
  width: 100%;
}
.vertical {
  height: 100%;
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>