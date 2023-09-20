import chooseTime from './src/index.vue'

export default {
    install(app) {
        app.component('a-choose-time', chooseTime)
    }
}