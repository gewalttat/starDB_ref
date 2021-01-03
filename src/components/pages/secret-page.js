import React from 'react'
import {Redirect} from 'react-router-dom'
import './secret-page.css'

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div className='jumbotron text-center'>
                <h3>ТЕ, КТО КУРИТ ЧАХ, ВСЕГДА БУДУТ УПРАВЛЯТЬ ТЕМИ, КТО ЧИТАЕТ КНИГИ</h3>
            </div>
        )
    }
    return <Redirect to='/login'/>

}

export default SecretPage;