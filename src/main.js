import {createApp} from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import Contract from './components/Contract.vue'

export const eventBus = mitt()

const app = createApp(App)
app.config.globalProperties.eventBus = eventBus
//cách sử dụng event bus trong vuejs 3
//reference: https://stackoverflow.com/questions/63471824/vue-js-3-event-bus
//            https://shouts.dev/articles/data-pass-between-components-using-eventbus-in-vue3
app.component('contract-component', Contract) //--> create global state that can use without import
app.mount('#app')
// app.component('contract-component', Contract)
//**component should be used before app is mounted, để sau sẽ bị báo lỗi và không render ra được
//reference: https://www.youtube.com/watch?v=QXCIw4SkDzA&t=398s
