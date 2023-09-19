import chooseArea from './src/index.vue'

export default {
    install(app) {
        app.component('a-choose-area', chooseArea)
    }
}