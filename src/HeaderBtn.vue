<template>
  <div class="d-flex">
    <div class="btn-group mx-auto flex-wrap">
      <button
        v-for="(item, index) in buttonList"
        :key="index"
        class="btn me-2 mt-2"
        :class="renderComponent === item.renderComponent ? 'btn-active' : index % 2 ? 'btn-outline-danger' : 'btn-danger'"
        @click="$emit('update:renderComponent', item.renderComponent)"
      >
        {{item.name}}
      </button>
    </div>
  </div>

  <component :is="renderComponent"></component>
</template>

<script>
export default {
  props: {
    renderComponent: String
  },
  data() {
    return {
      buttonList: [
        {
          name: 'Basic Lession',
          renderComponent: 'Lession',
        },
        {
          name: 'Exercise',
          renderComponent: 'Exercise',
        },
        {
          name: 'HandlingForm',
          renderComponent: 'HandlingForm',
        },
        {
          name: 'Derective',
          renderComponent: 'Derective',
        },
        {
          name: 'Mixin',
          renderComponent: 'Mixin',
        },
        {
          name: 'Transition',
          renderComponent: 'Transition',
        },
        {
          name: 'Vue-resource',
          renderComponent: 'VueResource',
        },
        {
          name: 'Vue-router',
          renderComponent: 'VueRouter',
        },
      ]
    }
  },
}
</script>

<style scoped>
  .btn-group .btn {
    display: block;
    max-width: 200px;
    font-size: 20px;
  }
  .btn-active {
    background: chartreuse;
    border: 1px solid chartreuse;
    color: black;
  }
</style>