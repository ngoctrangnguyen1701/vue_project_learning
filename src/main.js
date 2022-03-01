import {createApp} from 'vue'
import App from './App.vue'
import Contract from './components/Contract.vue'

const app = createApp(App)
app.component('contract-component', Contract) //--> create global state that can use without import
app.mount('#app')
// app.component('contract-component', Contract)
//**component should be used before app is mounted, để sau sẽ bị báo lỗi và không render ra được

//reference: https://www.youtube.com/watch?v=QXCIw4SkDzA&t=398s