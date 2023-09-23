import modalForm from './src/index.vue'

export default {
    install(app) {
        app.component('a-modal-form', modalForm)
    }
}