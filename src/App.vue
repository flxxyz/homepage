<template>
  <div id="app">
    <Block
      v-for="(item, index) in blocks"
      :key="index"
      :t="item.type"
      :nofollow="item.nofollow"
      :href="item.href"
      :text="item.text"
      :direction="direction"
    />
    <Background :url="url" :mimeType="mimeType" :direction="direction" />
  </div>
</template>

<script>
import Block from "./components/Block";
import Background from "./components/Background";

export default {
  name: "app",
  data() {
    return {
      blocks: [
        {
          type: "",
          href: "https://flxxyz.com",
          text: "🌈 彩虹海是我哒"
        },
        {
          type: "link",
          href: "https://blog.flxxyz.com",
          text: "🏠 Blog"
        },
        {
          type: "link",
          href: "https://websocket.buger.dev/",
          text: "👻 Websocket"
        },
        {
          type: "link",
          href: "https://api.flxxyz.com",
          text: "👀 API"
        },
        {
          type: "",
          text: "未完待续"
        },
        {
          type: "",
          text: "未完待续"
        },
        {
          type: "",
          text: "未完待续"
        },
        {
          type: "like",
          text: "Do You Like Me?"
        },
      ],
      direction: "vertical",
      url: "https://static.flxxyz.com/video/Forever-Friends.webm"
    };
  },
  created() {
    this.resize();
    window.addEventListener("resize", this.resize, false);
    console.log(
      "%cflxxyz.com",
      "text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em"
    );
    console.log("%c图片来源:", "color:red", "DAOKO - Forever Friends");
    console.log("%c视频来源:", "color:red", "https://youtu.be/SKZWU-mj8No");
  },
  methods: {
    resize() {
      //保持16：9
      this.direction =
        window.innerWidth / window.innerHeight > 16 / 9
          ? "horizontal"
          : "vertical";
    }
  },
  computed: {
    mimeType() {
      let mimeType = this.url.slice(
        this.url.lastIndexOf(".") + 1,
        this.url.length
      );
      return `video/${mimeType}`;
    }
  },
  components: {
    Block,
    Background
  }
};
</script>

<style lang="scss">
@import "./assets/layout.scss";
</style>
