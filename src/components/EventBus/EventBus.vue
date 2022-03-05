<template>
  <h1>Event bus</h1>
  <div style="width: 100%; margin-top: 15px; display: flex; align-items: center">
    <Clock/>
    <ControlsClock/>
  </div>
</template>

<script>
import Clock from './Clock.vue'
import ControlsClock from './ControlsClock.vue'

export default {
  components: {
    Clock,
    ControlsClock,
  }
}
</script>