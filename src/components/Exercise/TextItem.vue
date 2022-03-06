<template>
  <div class="box-text">
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
  export default {
    props: {
      text: {
        type: String,
        required: true,
      }
    } 
  }
</script>

<style scoped>
  .box-text{
    border: 1px solid skyblue;
    border-radius: 5px;
    padding: 5px 10px;

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