<template>
  <button @click="stopClock">Stop clock</button>
  <button @click="playClock">Play clock</button>
</template>

<script>
export default {
  methods: {
    stopClock(){
      this.eventBus.emit('stopClock')
    },
    playClock(){
      this.eventBus.emit('playClock')
    },
  },
}
</script>

<style scoped>
  button{
    margin-left: 15px;
  }
</style>