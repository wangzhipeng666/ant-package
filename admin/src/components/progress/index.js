import progress from './src/index.vue'

export default {
    install(app) {
        app.component('a-custom-progress', progress)
    }
}