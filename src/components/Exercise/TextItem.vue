
<template>
  <div 
    class="box-text"
    draggable="true"
  >
    <span>{{text}}</span>
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
// @mousedown="$emit('isPrepareMoveItem', true)"
//     @mouseup="$emit('isPrepareMoveItem', false)"
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
    },
    methods: {
      handleDragStart(e) {
        console.log(handleDragStart);
        // e.dataTransfer.setData("Text", event.target.id)
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