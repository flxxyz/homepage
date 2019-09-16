<template>
  <div :class="direction">
    <a v-if="link" class="link" ref="link" :href="href" target="_blank">{{text}}</a>
    <div v-else class="nb">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "block",
  data() {
    return {};
  },
  props: {
    link: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    },
    text: {
      required: true,
      type: String,
    },
    nofollow: {
      type: Boolean,
      default: false
    },
    direction: {
      required: true,
      type: String,
    }
  },
  mounted() {
    if (this.nofollow) {
      this.$refs.link.setAttribute("rel", "external nofollow");
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../assets/color.scss";

.horizontal {
  flex: 0 0 25%;
  height: 50%;

  .link,
  .nb {
    margin-top: 50%;
  }
}
.vertical {
  flex: 0 0 50%;
  height: 25%;
  .link,
  .nb {
    margin-top: 25%;
  }
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

  &:hover {
    background-color: $主题色;
    color: $字体辅助色;
    transition: all 0.6s;
  }

  .link,
  .nb {
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}
</style>