import chooseCity from './src/index.vue'

export default {
    install(app) {
        app.component('a-choose-city', chooseCity)
    }
}