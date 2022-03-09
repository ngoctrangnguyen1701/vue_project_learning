<template>
  <div class="mt-3">
    <p v-bgColor="'#1d34a8'">Derective background color</p>
    <!-- thay vì style trực tiếp, dùng cái gọi là directive(chỉ thị) trong Vue để style -->
    <p v-custom:backgroundColor="'green'">Derective custom with binding argument 'backgroundColor'</p>
    <p v-custom="'green'">Derective custom no binding any argument</p>
    <p v-custom:backgroundColor.delay="'red'">Derective custom with modifier</p>
    <button
      v-customBtn:style="{backgroundColor: 'skyblue', color: 'black', border: '1px solid red'}"
    >Derective button</button>
    <div v-local-bg>test</div>
  </div>
</template>

<script>
//reference: https://learnvue.co/2020/01/creating-your-first-vuejs-custom-directive/#defining-your-directive
export default {
  //tạo custom directive local
  directives: {
    'local-bg'(el, binding, vnode) {
      console.log(el);
      console.log(binding);
      console.log(vnode);

      // el.innnerText = 'test custom directive local' //--> cái này nó không chạy
      el.style.backgroundColor = 'yellow'
      el.style.color = 'black'
      vnode.el.innerText = 'test custom directive local'
    }
  },
}
</script>