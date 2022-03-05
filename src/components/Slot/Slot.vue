<template>
  <h1>Slot</h1>
  <Content>
    <p class="slot">This is HEADER</p>
    <p class="slot">This is BODY</p>
    <p class="slot">This is FOOTER</p>

    <template v-slot:header>
    <!-- <template #header> -->
    <!-- shorthand của v-slot -->
      <p class="slot">SLOT HEADER</p>
    </template>
    <template v-slot:footer>
      <p class="slot">SLOT FOOTER</p>
    </template>
  </Content>
</template>

<script>
import Content from './Content.vue'
export default {
  components: {
    Content,
  }
}
</script>

<style scoped>
  .slot{
    color: orange;
  }
</style>