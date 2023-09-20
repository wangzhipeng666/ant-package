import chooseArea from './chooseArea'
import chooseTime from './chooseTime'

const components = [
    chooseArea,
    chooseTime
]

export default {
    install(app) {
        components.map(item => {
            app.use(item)
        })
    }
}