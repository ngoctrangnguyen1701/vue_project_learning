<template>
  <div 
    class="box-text"
    draggable="true"
    @mouseenter="$emit('isWannaMoveItem', true)"
    @mouseout="$emit('isWannaMoveItem', false)"
    @dragstart="$emit('isDragging', true)"
    @dragend="$emit('isDragging', false)"
  >
    <span class="text-content">{{text}}</span>
    <div
      class="delete"
      @click="$emit('deleteItem')"
    >X</div>
    <div
      class="edit"
      @click="$emit('editItem')"
    >edit</div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      }
    },
  }
</script>

<style scoped>
  @import './style/TextItemStyle'
</style>