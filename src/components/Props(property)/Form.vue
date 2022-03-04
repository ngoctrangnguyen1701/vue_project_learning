<template>
  <form style="flex-grow: 1; margin-left: 15px">
    <label>Speed up</label>
    <select @change="changeValue">
      <option value="3s">1x</option>
      <option value="1.5s">2x</option>
      <option value="0.5s">3x</option>
    </select>
  </form>
</template>

<script>
export default {
  data() {
    return {
      speed: 0
    }
  },
  methods: {
    changeValue(e){
      console.log(e.target.value);
      this.speed = e.target.value;
      this.$emit('changeSpeed', this.speed) 
      //phát ra sự kiện 'changeSpeed' kèm với tham số là 'this.speed'
    }
  },
}
</script>