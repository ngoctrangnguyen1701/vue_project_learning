<template>
  <div 
    id="box-layout"
    :class="showBorderRow ? 'row show-border-row' : 'row'"
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
        @isDragging="showBorderRow = $event"
      />
    </div>
  </div>
</template>

<script>
//https://www.npmjs.com/package/sortablejs
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
      }
    },
    components: {
      TextItem,
    },
    methods: {
      changedListFunc(value) {
        console.log(value);
        this.$emit('changedList', value)
      }
    },
    mounted() {
      console.log('TextLayout mounted')
      let changedList = []
      let changedListFunc = this.changedListFunc
      console.log(changedListFunc);
      const el = document.getElementById('box-layout')
      const sortable = new Sortable(el, {
        animation: 350,
        onSort(e) {
          // console.log(e);
          const allTextItem = document.querySelectorAll('.text-content')
          console.log(allTextItem);
          changedList = [] 
          //trả về mảng rổng trước khi sử dụng vòng for, nếu không sẽ bị add dư phần tử
          for(let i = 0; i < allTextItem.length; i++) {
            changedList.push(allTextItem[i].textContent)
          }
          // console.log({changedList});
          changedListFunc(changedList)
        }
      })
    },
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