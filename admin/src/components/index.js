import chooseArea from './chooseArea'
import chooseTime from './chooseTime'
import progress from './progress'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'

const components = [
    chooseArea,
    chooseTime,
    chooseCity,
    progress,
    form,
    modalForm,
    table,
]

export default {
    install(app) {
        components.map(item => {
            app.use(item)
        })
    }
}