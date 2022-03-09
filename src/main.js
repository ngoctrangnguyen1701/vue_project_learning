import {createApp} from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import Contract from './components/Lession/Contract.vue'

export const eventBus = mitt()

const app = createApp(App)
app.config.globalProperties.eventBus = eventBus
//cách sử dụng event bus trong vuejs 3
//reference: https://stackoverflow.com/questions/63471824/vue-js-3-event-bus
//            https://shouts.dev/articles/data-pass-between-components-using-eventbus-in-vue3
app.component('contract-component', Contract) //--> create global state that can use without import

//------------------DERECTIVE (CHỈ THỊ)------------------
//reference: https://learnvue.co/2020/01/creating-your-first-vuejs-custom-directive/#defining-your-directive
app.directive('bgColor', (el, binding, vnode) => {
  // console.log(el) //--> el ở đây chính là cái element mà sử dụng 'v-highlight'
  // console.log(binding); //--> object chứa các giá trị tham số để tùy biến
  // console.log(vnode); //--> đọc ra là cái node trong DOM(chứa các sự kiện)
  
  // el.style.backgroundColor = '#1d34a8'
  el.style.backgroundColor = binding.value
})
app.directive('custom', (el, binding) => {
  // console.log(el)
  // console.log(binding);

  let delay = 0
  if(binding.modifiers.delay){
    //nếu có modifier 'deplay', thì sẽ deplay 3s
    delay = 3000
  }
  setTimeout(() => {
    if(binding.arg === 'backgroundColor'){
      el.style.backgroundColor = binding.value
    }
    else{
      el.style.color = binding.value
    }
  }, delay)
})

app.directive('customBtn', (el, binding) => {
  console.log(el)
  console.log(binding);
  if(binding.arg === 'style') {
    for(let key in binding.value) {
      el.style[key] = binding.value[key]
    }
  }
})

app.mount('#app')
// app.component('contract-component', Contract)
//**component should be used before app is mounted, để sau sẽ bị báo lỗi và không render ra được
//reference: https://www.youtube.com/watch?v=QXCIw4SkDzA&t=398s
