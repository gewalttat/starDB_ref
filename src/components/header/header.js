import React from 'react'
import './header.css'
import  {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header d-flex'>
            <h1><Link to='/'>Star DB</Link></h1>
            <ul className ='d-flex'>
                <li><Link to='/people/'>People</Link></li>
                <li><Link to='/planets/'>Planet</Link></li>
                <li><Link to='/vehicles/'>Vehicle</Link></li>
                <li><Link to='/login/'>Login</Link></li>
                <li><Link to='/secret-page/'>Secret</Link></li>
            </ul>
        </div>
    )
}

export default Header;