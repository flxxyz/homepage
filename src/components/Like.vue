<template>
  <div class="like" v-on:click="addLike">
    <p>{{text}}</p>
    <div>{{counter}}</div>
  </div>
</template>

<script>
export default {
  name: "Like",
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  watch: {
    result(newVal, oldVal) {
      this.requestId = requestAnimationFrame(this.up);
      return newVal;
    }
  },
  data() {
    return {
      time: 5, //持续的秒数
      counter: 0, //操作的计数器
      result: 0, //计数器的结果
      startValue: 0, //计数器的初始值
      startTime: 0, //帧开始时间
      useEasing: true, //是否使用缓冲动画
      frame: 0, //当前帧的值
      requestId: null //当前帧数
    };
  },
  mounted() {
    this.getLike()
    this.requestId = requestAnimationFrame(this.up);
  },
  methods: {
    //帧操作
    up(timestamp) {
      if (!this.startTime) {
        this.startTime = timestamp;
      }
      let progress = timestamp - this.startTime;
      let frame = 0;

      if (this.startValue > this.result) {
        if (this.useEasing) {
          this.frame =
            this.startValue -
            this.easing(progress, 0, this.startValue - this.result);
        } else {
          this.frame =
            this.startValue -
            this.general(progress, this.startValue - this.result);
        }
        this.frame = this.frame < this.result ? this.result : this.frame;
      } else {
        if (this.useEasing) {
          this.frame = this.easing(progress, 0, this.result - this.startValue);
        } else {
          this.frame =
            this.startValue +
            this.general(progress, this.result - this.startValue);
        }
        this.frame = this.frame > this.result ? this.result : this.frame;
      }

      this.counter = Math.round(this.frame);

      if (progress < this.duration) {
        this.requestId = requestAnimationFrame(this.up);
      }
    },
    //缓冲动画
    easing(t, b, c) {
      return (
        (c * (-Math.pow(2, (-10 * t) / this.duration) + 1) * 1024) / 1023 + b
      );
    },
    //一般动画
    general(t, c) {
      return c * (t / this.duration);
    },
    getLike() {
        console.log(this.result = 99999)
    },
    addLike() {
      console.log((this.result += 1));
    }
  },
  computed: {
    duration() {
      return Number(this.time) * 1000;
    }
  }
};
</script>

<style lang="scss" scoped>
.like {
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>