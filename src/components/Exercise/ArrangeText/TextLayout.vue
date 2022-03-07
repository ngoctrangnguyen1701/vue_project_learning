<template>
  <!-- <div :class="isMoveItem ? 'row border-row' : 'row'"> -->
  <div 
    id="box-text"
    :class="showBorderRow ? 'row show-border-row' : 'row'"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      class="col-md-6 col-lg-3 mt-3"
      v-for="(item, index) in textList" :key="index" :item="item"
    >
      <TextItem
        :text="item"
        :index="index"
        @deleteItem="$emit('deleteItem', index)"
        @editItem="$emit('editItem', index)"
        @isWannaMoveItem="$emit('isWannaMoveItem', $event)"
        @changePosition="$emit('changePosition', $event)"
      />
    </div>
  </div>
</template>

<script>
//https://www.npmjs.com/package/sortablejs
        // @isPrepareMoveItem="isPrepareMoveItem($event)"
  import Sortable from 'sortablejs';
  import TextItem from './TextItem.vue'

  let test = ''
  export default {
    props: {
      textList: Array,
      default: []
    },
    data() {
      return {
        showBorderRow: false,
        // changedList: []
      }
    },
    methods: {
      isPrepareMoveItem(value) {
        console.log(value)
        this.showBorderRow = value
        // this.isMoveItem = value
        this.$emit('isPrepareMoveItem', value) //phát sự kiện ra bên ngoài cho thằng cha biết
        // return value
      },
      changePosition(value) {
        console.log(value);
      }
    },
    components: {
      TextItem,
    },
    methods: {
      changedListFunc(value) {
        console.log(value);
        this.$emit('changedList', this.changedList)
      }
    },
    mounted() {
      console.log('TextLayout mounted')
      let changedList = []
      // let x = 'test'
      let changedListFunc = this.changedListFunc
      console.log(changedListFunc);
      const el = document.getElementById('box-text')
      const sortable = new Sortable(el, {
        animation: 350,
        // setData(dataTransfer, dragEl) {
        //   dataTransfer.setData('dragIndex', dragEl.key)
        //   dataTransfer.setData('dragItem', dragEl.item)
        // }
        onSort(e) {
          // console.log(e);
          // const children = e.target.children
          const allTextItem = document.querySelectorAll('.text-content')
          console.log(allTextItem);
          // const changedList = []
          changedList = []
          for(let i = 0; i < allTextItem.length; i++) {
            // changedList[i] = allTextItem[i].textContent
            changedList.push(allTextItem[i].textContent)
          }
          // console.log({changedList});
          changedListFunc(changedList)
          // test = changedList
          // this.$emit('changedList', changedList)
          // console.log({x});
          // changedListFunc(changedList)
        }
      })
      // console.log(sortable);
      // // const children = sortable.target.children
      // const allTextItem = document.querySelectorAll('.text-content')
      // console.log(allTextItem);
      // const changedList = []
      // for(let i = 0; i < allTextItem.length; i++) {
      //   // changedList[i] = allTextItem[i].textContent
      //   changedList.push(allTextItem[i].textContent)
      // }
      // console.log({changedList});
      // this.$emit('changedList', changedList)
      // changedListFunc(changedList)
      // console.log({changedList});
    },
    watch: {
      // changedListFunc(value) {
      //   console.log(value);
      //   this.$emit('changedList', this.changedList)
      // }
    }
  }
</script>

<style scoped>
  .row {
    padding-bottom: 15px;
    margin-top: 15px;
    transition: .3s;
  }

  .show-border-row{
    border: 1px solid red;
    transition: .3s;
  }
</style>