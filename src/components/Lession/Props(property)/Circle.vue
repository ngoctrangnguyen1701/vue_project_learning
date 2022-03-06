<template>
  <div
    :class="isTurn ? 'circle run-turn' : 'circle run-turn stop'"
    :style="speed ? `animation-duration: ${speed}` : ''"
  ></div>
</template>

<script>
export default {
  // props: ['isTurn'],
  props: {
    isTurn: {
      type: Boolean, //--> giá trị prop 'isTurn' nhận được phải là Boolean
      required: true, //--> bắt buộc phải có prop này nếu không Vue sẽ báo lỗi
    },
    speed: {
      type: String,
      default: '1s' //nếu không truyền vào cái gì hết , nó sẽ lấy mặc định là '1s'
    }
  }
}
</script>

<style scoped>
  .circle{
    width: 150px;
    height: 150px;
    border-radius: 50%;

    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(pink, pink), linear-gradient(orange, orange),
                      linear-gradient(pink, pink), linear-gradient(orange, orange);
  }
  .run-turn{
    animation: run-turn 3s linear infinite;
    /* animation-play-state: running; */
  }
  .stop{
    animation-play-state: paused;
  }

  @keyframes run-turn {
    100%{transform: rotate(360deg);}
  }
</style>