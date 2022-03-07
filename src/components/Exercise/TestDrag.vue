<template>
  <h3 class="text-center my-3">Test drag/drop</h3>
  <div
    class="drop-zone"
    @drop="handleDrop($event, 1)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(1)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
      @dragend="endDrag($event,item)"
      @drop="changePosition($event, item)"
    >
      {{item.title}}
    </div>
  </div>
  <div
    class="drop-zone"
    @drop="handleDrop($event, 2)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(2)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
      @dragend="endDrag($event,item)"
      @drop="changePosition($event, item)"
    >
      {{item.title}}
    </div>
  </div>
</template>

<script>
// @dragenter.prevent
// @dragover.prevent
//2 lệnh này dùng để chặn default, cái không cho phép element được kéo thả
//reference: https://www.youtube.com/watch?v=-kZLD40d-tI

export default {
  data() {
    return {
      itemList: [
        {
          id: 0, 
          title: 'Item A',
          list: 1,
        },
        {
          id: 1, 
          title: 'Item B',
          list: 1,
        },
        {
          id: 2, 
          title: 'Item C',
          list: 2,
        },
      ]
    }
  },
  methods: {
    getList(value) {
      return this.itemList.filter(item => item.list === value)
    },
    startDrag(event, item) {
      // console.log(event)
      // console.log(item)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move' //hiệu ứng này để thông báo là sẽ move thay vì copy
      event.dataTransfer.setData('itemId', item.id)

      event.target.style.backgroundColor = 'white'
      event.target.style.border = '1px solid red'
    },
    endDrag(event, item) {
      event.target.style.backgroundColor = 'green'
      event.target.style.border = 'none'
    },
    handleDrop(event, list){
      console.log('handleDrop');
      // console.log(event);
      console.log(list, typeof list);
      const itemId = parseInt(event.dataTransfer.getData('itemId'))
      // console.log(itemId, typeof itemId);
      // const item = this.itemList.find(item => item.id === itemId)
      // console.log(item)
      // item.list === list
      const index = this.itemList.findIndex(item => item.id === itemId)
      console.log(index);
      this.itemList[index].list = list
    },
    changePosition(event, changeItem) {
      console.log('changePosition');
      // console.log(event);
      // console.log(changeItem); //item cái mà sẽ thay đổi vị trí với cái item được kéo vào
      const dragItemId = parseInt(event.dataTransfer.getData('itemId'))
      console.log(dragItemId);

      const dragItem = this.itemList.find(item => item.id === dragItemId)
      const indexDragItem = this.itemList.findIndex(item => item.id === dragItemId)
      const indexChangeItem = this.itemList.findIndex(item => item.id === changeItem.id)
      this.itemList[indexDragItem] = changeItem
      this.itemList[indexChangeItem] = dragItem
      //cái chỗ index mà item được kéo vào sẽ thay đổi giá trị là cái item được kéo vào
      //còn cái chỗ index của item kéo vào sẽ thay đổi thành cái item được cái item kéo vào
      //nói chung là giống như 2 cái sẽ hóan đổi giá trị cho nhau 
    }
  }
}
</script>

<style scoped>
  .drop-zone {
    background-color: orange;
    margin-top: 15px;
    padding: 10px;
    min-height: 40px;

    color: black;
  }
  .drag-el {
    background-color: green;
    margin-top: 15px;
    padding: 10px;
  }
</style>