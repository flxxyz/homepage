<template>
  <div :class="style">
    <a v-if="t === 'link'" class="link" ref="link" :href="href" target="_blank">{{text}}</a>
    <Like v-else-if="t === 'like'" :text="text" :direction="direction" />
    <div v-else class="nb">{{text}}</div>
  </div>
</template>

<script>
import Like from "./Like";

export default {
  name: "block",
  data() {
    return {};
  },
  props: {
    t: {
      required: true,
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    text: {
      required: true,
      type: String
    },
    nofollow: {
      type: Boolean,
      default: false
    },
    direction: {
      required: true,
      type: String
    }
  },
  mounted() {
    if (this.nofollow) {
      this.$refs.link.setAttribute("rel", "external nofollow");
    }
  },
  computed: {
    style() {
      return `block ${this.direction}`;
    }
  },
  components: {
    Like
  }
};
</script>

<style scoped lang='scss'>
@import "../assets/color.scss";

.horizontal {
  flex: 0 0 25%;
  height: 50%;
}
.vertical {
  flex: 0 0 50%;
  height: 25%;
}
.block {
  box-sizing: border-box;
  background-color: $主题辅助色;
  text-align: center;
  color: $字体色;
  border: $字体色 solid 1px;
  position: relative;
  font-size: 1.8em;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9999;

  &:hover {
    background-color: $主题色;
    color: $字体辅助色;
    transition: all 0.6s;
  }

  .link,
  .nb {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>