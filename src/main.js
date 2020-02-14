// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
    apiKey: "AIzaSyBgTwekqIF85nOZ1Szx36BQQSUd8MH2y-M",
    authDomain: "task-manager-firevue.firebaseapp.com",
    databaseURL: "https://task-manager-firevue.firebaseio.com",
    projectId: "task-manager-firevue",
    storageBucket: "task-manager-firevue.appspot.com",
    messagingSenderId: "757996794725",
    appId: "1:757996794725:web:e3a4d0c9b636222ff6a78c",
    measurementId: "G-N955SRF5DL"
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
