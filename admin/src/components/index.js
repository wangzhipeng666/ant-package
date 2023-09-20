import chooseArea from './chooseArea'
import chooseTime from './chooseTime'
import progress from './progress'

const components = [
    chooseArea,
    chooseTime,
    progress
]

export default {
    install(app) {
        components.map(item => {
            app.use(item)
        })
    }
}