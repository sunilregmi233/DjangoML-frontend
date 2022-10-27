import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

import router from './router'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'


import './assets/main.css'


const app = createApp(App)
app.use(createVuestic())
app.use(createPinia())
app.use(router)
app.use(createVuesticEssential({ components: { VaButton } }));
app.mount('#app')
