import chooseArea from './chooseArea'
import chooseTime from './chooseTime'
import progress from './progress'
import chooseCity from './chooseCity'

const components = [
    chooseArea,
    chooseTime,
    chooseCity,
    progress,
]

export default {
    install(app) {
        components.map(item => {
            app.use(item)
        })
    }
}