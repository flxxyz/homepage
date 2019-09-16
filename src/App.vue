<template>
  <div id="app">
    <Block
      v-for="(item, index) in blocks"
      :key="index"
      :link="item.link"
      :href="item.href"
      :text="item.text"
      :direction="blockDirection"
    />
    <Background :url="url" :mimeType="mimeType" :direction="backgroundDirection" />
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
          link: false,
          href: "https://flxxyz.com",
          text: "🌈彩虹海是我哒"
        },
        {
          link: true,
          href: "https://blog.flxxyz.com",
          text: "🏠BLOG"
        },
        {
          link: true,
          href: "http://google.com",
          text: "👻GOOGLE"
        },
        {
          link: true,
          href: "http://baidu.com",
          text: "🤮BAIDU"
        },
        {
          link: false,
          text: "未完待续"
        },
        {
          link: false,
          text: "未完待续"
        },
        {
          link: false,
          text: "未完待续"
        },
        {
          link: false,
          text: "未完待续"
        }
      ],
      direction: "vertical",
      url: "/Forever-Friends.webm"
    };
  },
  created() {
    this.resize();
    window.addEventListener("resize", this.resize, false);
    // console.log(
    //   "%c",
    //   "padding:50px;line-height:93px;background:url('https://static.flxxyz.com/img/2333.gif') no-repeat;"
    // );
    console.log(
      "%cflxxyz.com",
      "text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em"
    );
    console.log("%c图片来源:", "color:red", "Megalo Box");
    console.log("%c声音来源:", "color:red", "https://youtu.be/7ryzRsoJ8gY");
  },
  methods: {
    resize() {
      console.log("屏幕变动");
      this.direction =
        (window.innerWidth / 16) > (window.innerHeight / 9) ? "horizontal" : "vertical";
    }
  },
  computed: {
    blockDirection() {
      return `block ${this.direction}`;
    },
    backgroundDirection() {
      return `background ${this.direction}`;
    },
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
