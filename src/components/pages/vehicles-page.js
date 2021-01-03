import React from 'react'
import { VehicleList } from '../sw-components/item-lists'
import { withRouter } from 'react-router-dom'

//функция получающая хистори из роутера
const VehiclesPage = ({ history }) => {
    return (
        //возвращает компонент список
        <VehicleList
        //по клику пушит пользователя на транспорт/айди
            onItemSelected={
                (itemId) => {
                    history.push(itemId);
                }
            } />
    )
}

export default withRouter(VehiclesPage)