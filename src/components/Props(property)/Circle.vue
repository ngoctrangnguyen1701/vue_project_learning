<template>
  <div :class="isTurn ? 'circle run-turn' : 'circle run-turn stop' "></div>
</template>

<script>
export default {
  props: ['isTurn'],
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