import chooseArea from './chooseArea'

const components = [
    chooseArea
]

export default {
    install(app) {
        components.map(item => {
            app.use(item)
        })
    }
}