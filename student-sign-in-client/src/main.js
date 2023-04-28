import { createApp } from 'vue'
import App from './App.vue'
// import the js file for student services
import StudentService from "@/services/StudentService";

// Rearranging app for features
// createApp(App).mount('#app')

// create the vueapp object
let app = createApp(App)

// configure the vue global properties to include where student services is
app.config.globalProperties.$student_api = StudentService

app.mount('#app')
