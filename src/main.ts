import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import("preline/dist/index.js");
import VueFeather from 'vue-feather';

createApp(App).component(VueFeather.name ?? 'VueFeather', VueFeather).mount('#app')
