import form from './src/index.vue'

export default {
    install(app) {
        app.component('a-custom-form', form)
    }
}