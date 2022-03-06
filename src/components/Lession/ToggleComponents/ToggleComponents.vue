<template>
  <h1>Toggle Components</h1>
  <button class="btn" @click="renderComponent = 'Home'">Home</button>
  <button class="btn" @click="renderComponent = 'About'">About</button>
  <button class="btn" @click="renderComponent = 'Contact'">Contact</button>

  <!-- RENDER COMPONENT -->
  <!-- <component :is="renderComponent"/> -->
  <!-- sử dụng thẻ <component> binding thuộc tính 'is' để truyền vào biến 'renderComponent'
  khi nó trùng tên với component nào component đó sẽ được render ra-->
  <!-- <keep-alive>
    <component :is="renderComponent"/>
  </keep-alive> -->
  <!-- thẻ <keep-alive> trong Vue dùng để giữ lại component, nên giữ thuộc tính của component vẫn giữ nguyên
  khi nó không được render ra DOM-->
  <component :is="renderComponent !== 'Contact' && renderComponent"/>
  <keep-alive>
    <component :is="renderComponent === 'Contact' && renderComponent"/>
  </keep-alive>
  <!-- chỉ giữ keep alive cho component 'Contact' -->
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

export default {
  data(){
    return {
      renderComponent: 'Home'
    }
  },
  components: {
    Home,
    About,
    Contact,
  },
}
</script>

<style scoped>
  .btn{
    padding: 5px 10px;
    border: 1px solid skyblue;
    border-radius: 5px;
    background: blue;
    margin-right: 5px;

    color: white;
  }
  .btn:hover{
    background: skyblue;
    color: black;
  }
</style>