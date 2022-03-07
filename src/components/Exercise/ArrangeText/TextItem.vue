<template>
  <div 
    class="box-text"
    draggable="true"
    @mouseenter="$emit('isWannaMoveItem', true)"
    @mouseout="$emit('isWannaMoveItem', false)"
    @mousedown="$emit('isPrepareMoveItem', true)"
    @mouseup="$emit('isPrepareMoveItem', false)"
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
    // @dragstart="handleDragStart($event, index, text)"
    // @drop="handleDrop($event, index, text)"
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
    methods: {
      handleDragStart(event, dragIndex, dragItem) {
        // console.log(event)
        console.log(dragIndex);
        // event.dataTransfer.dropEffect = 'move'
        // event.dataTransfer.effectAllowed = 'move' //hiệu ứng này để thông báo là sẽ move thay vì copy
        event.dataTransfer.setData('dragIndex', dragIndex)
        event.dataTransfer.setData('dragItem', dragItem)
      },
      handleDrop(event, dropIndex, dropItem) {
        // console.log(event)
        console.log({dropIndex, dropItem})
        //thay đổi vị trí giữa item drap với vị trí item drop
        const dragIndex = parseInt(event.dataTransfer.getData('dragIndex'))
        const dragItem = event.dataTransfer.getData('dragItem')
        console.log({dragIndex, dragItem})
        this.$emit('changePosition', {dragIndex, dragItem, dropIndex, dropItem})
      }
    } 
  }
  //https://learnvue.co/2020/01/how-to-add-drag-and-drop-to-your-vuejs-project/#setting-up-our-project
</script>

<style scoped>
  .box-text{
    border: 1px solid skyblue;
    border-radius: 5px;
    padding: 5px 10px;

    cursor: all-scroll;
    position: relative;

    transition: .3s;
  }

  .box-text:hover{
    color: black;
    background: pink;
    border-color: pink;
    transition: .3s;
  }

  span{
    font-family: 'Caveat', cursive;
    font-size: 30px;
  }

  .delete{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: grey;

    font-size: 10px;
    font-weight: bold;
    line-height: 15px;
    text-align: center;

    cursor: pointer;

    position: absolute;
    top: 2px;
    right: 2px;

    transition: .3s;
  }

  .delete:hover, .edit:hover{
    opacity: .7;
    transition: .3s;
  }

  .edit{
    width: 30px;
    height: 15px;
    border-radius: 2px;
    background: grey;

    font-size: 10px;
    font-weight: bold;
    line-height: 15px;
    text-align: center;

    cursor: pointer;

    position: absolute;
    top: 2px;
    right: 20px;

    transition: .3s;
  }

</style>