<template>
  <div :class="style" ref="like">
    <div class="like-vote">
      <p>{{content}}</p>
      <div>♥{{counter}}</div>
    </div>
  </div>
</template>

<script>
import http from "../http";

export default {
  name: "Like",
  props: {
    text: {
      type: String,
      default: ""
    },
    direction: {
      required: true,
      type: String
    }
  },
  watch: {
    result(newVal) {
      this.requestId = requestAnimationFrame(this.up);
      return newVal;
    }
  },
  data() {
    return {
      time: 5, //持续的秒数
      updateTime: 10, //getLike更新持续的秒数
      counter: 0, //操作的计数器
      result: 0, //计数器的结果
      startValue: 0, //计数器的初始值
      startTime: 0, //帧开始时间
      frame: 0, //当前帧的值
      requestId: null, //当前帧数
      content: this.text, //text展示副本
      lastClickTime: 0 //加心最后点击时间
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs.like.addEventListener("click", this.addLike, false); //数字滚动前无法点击
    }, this.duration);
    this.getLike();
    this.requestId = requestAnimationFrame(this.up);
  },
  methods: {
    //帧操作
    up(timestamp) {
      if (!this.startTime) {
        this.startTime = timestamp;
      }
      let progress = timestamp - this.startTime;

      if (this.startValue > this.result) {
        //从小到大
        this.frame =
          this.startValue -
          this.easing(progress, 0, this.startValue - this.result);

        //保证当前帧的值不超过结果
        this.frame = this.frame < this.result ? this.result : this.frame;
      } else {
        this.frame = this.easing(progress, 0, this.result - this.startValue);
        this.frame = this.frame > this.result ? this.result : this.frame;
      }

      this.frame = Math.round(this.frame);
      this.counter = this.startValue + this.frame;

      if (progress < this.duration) {
        this.requestId = requestAnimationFrame(this.up);
      }
    },
    //更新帧
    update(newVal) {
      newVal = Number(newVal);
      if (newVal === this.frame) return;
      cancelAnimationFrame(this.requestId);
      this.startTime = 0;
      this.startValue = this.counter;
      this.result = newVal;
      this.requestId = requestAnimationFrame(this.up);
    },
    //缓冲动画
    easing(t, b, c) {
      return (
        (c * (-Math.pow(2, (-10 * t) / this.duration) + 1) * 1024) / 1023 + b
      );
    },
    async getLike() {
      let result = await http.getLike("5e54eeacff028300082a8d02");

      try {
        result = JSON.parse(result);
        if (result.hasOwnProperty("count")) {
          this.update(result.count);
        }
      } catch (err) {
        console.error(err);
      }

      //定时触发更新
      setTimeout(this.getLike, this.updateDuration);
    },
    addLike() {
      //控制点击间隔的文字
      let currClickTime = new Date().getTime();
      let flag = currClickTime - this.lastClickTime > 300;
      this.lastClickTime = new Date().getTime();
      if (flag) {
        this.content = "爱你哟(´▽`ʃ♡ƪ)";
      } else {
        this.content = "∑( 口 ||要坏掉了";
      }

      http.addLike("5e54eeacff028300082a8d02");
      this.update(this.counter += 1);
    }
  },
  computed: {
    duration() {
      return Number(this.time) * 1000;
    },
    updateDuration() {
      return Number(this.updateTime) * 1000;
    },
    style() {
      return "like";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/color.scss";

.like {
  width: 100%;
  height: 100%;
  font-weight: bold;

  &:hover {
    background-color: $LIKE主题色;
    transition: all 0.6s;

    p,
    div {
      color: $字体色;
    }
  }

  .like-vote {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    cursor: pointer;
    color: $LIKE主题色;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      position: absolute;
      left: 50%;
    }
  }
}
</style>