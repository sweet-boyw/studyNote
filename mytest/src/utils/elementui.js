import {createApp} from 'vue'
import App from '../App.vue'
import {Container} from 'element-plus'
// import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(Container)

