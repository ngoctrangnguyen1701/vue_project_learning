<template>
  <!-- <div :class="isMoveItem ? 'row border-row' : 'row'"> -->
  <div :class="isMoveItem ? 'row border-row' : 'row'">
    <div
      class="col-md-6 col-lg-3 mt-3"
      v-for="(item, index) in textList" :key="index"
    >
      <TextItem
        :text="item" 
        @deleteItem="$emit('deleteItem', index)"
        @editItem="$emit('editItem', index)"
        @isPrepareMoveItem="isPrepareMoveItem($event)"
      />
    </div>
  </div>
</template>

<script>
  import TextItem from './TextItem.vue'

  export default {
    props: {
      textList: Array,
      default: []
    },
    data() {
      return {
        isMoveItem: false
      }
    },
    methods: {
      isPrepareMoveItem(value) {
        console.log(value)
        this.isMoveItem = value
        this.$emit('isPrepareMoveItem', value) //phát sự kiện ra bên ngoài cho thằng cha biết
        return value
      },
      changePosition(value) {
        console.log(value);
      }
    },
    components: {
      TextItem,
    },
  }
</script>

<style scoped>
  .row {
    padding-bottom: 15px;
    margin-top: 15px;
    transition: .3s;
  }

  .border-row{
    border: 1px solid red;
    transition: .3s;
  }
</style>