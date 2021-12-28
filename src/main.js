import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import "./assets/css/index.css";

new Vue({
    router,
    el: '#app',
    render: h => h(App)
  })