<template>
  <div class="row">
    <div
      class="col-md-6 col-lg-3 mt-3"
      v-for="(item, index) in textList" :key="index"
    >
      <TextItem
        :text="item" 
        @deleteItem="$emit('deleteItem', index)"
        @editItem="$emit('editItem', index)"
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
    components: {
      TextItem,
    }
  }
</script>