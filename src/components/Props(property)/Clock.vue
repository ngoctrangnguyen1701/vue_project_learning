<template>
  <div class="clock">{{timeString}}</div>
</template>

<script>
let a = ''
export default {
  data() {
    return {
      isStop: false,
      timeString: ''
    }
  },
  methods: {
    runClock(){
      a = setInterval(() => {
        const now = new Date();
        const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`
        const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`
        const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`
        this.timeString = `${hours}:${minutes}:${seconds}`
      }, 100)
    },
    stopClock(){
      clearInterval(a)
    },
    playClock(){
      this.runClock()
    }
  },
  created(){
    this.runClock()

    this.eventBus.on('stopClock', () =>{
      console.log('stopClock');
      this.stopClock()
    })

    this.eventBus.on('playClock', () =>{
      console.log('playClock');
      this.playClock()
    })
  },
}
</script>

<style scoped>
  .clock{
    font-size: 30px;
    text-align: center;

    width: 200px;
    border: 1px solid green;
  }
</style>