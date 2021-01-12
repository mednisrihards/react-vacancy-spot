import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Spring } from 'react-spring/renderprops'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Vacancies',
        path: '/vacancies'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

function Navigation({loggedIn}) {
    const [menuActive, setMenuActive] = useState(false)
    const [itemKey, setItemKey] = useState(0)

    function useForceUpdate(){
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }

    return (
        <Spring
            from={{opacity: 0, marginTop: -500}}
            to={{opacity: 1, marginTop: 0}}
            config={{duration: 1000}}
        >
            {props => (
                <div style={props}>
                    <nav className={'site-navigation'}>
                        <span className='navigation-title'>Vacancies spot</span>
                        <div className={`navigation-content ${menuActive && 'active'}`}>
                            <ul>
                                { navLinks.map((link, index) => (
                                    <li key={index}><Link className={`${index===itemKey ? "btnActive" : ""}`} to={link.path} onClick={() => {setMenuActive(!menuActive); setItemKey(index);}}>{link.title}</Link></li>
                                )) }
                            </ul>
                            {loggedIn === 'true' ?
                                <>
                                    <Link to='/profile' className='navigation-user-name' onClick={() => setMenuActive(!menuActive)}>Rihards Mednis</Link>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} size={40} />
                                </>
                            :
                                <span className="navigation-user-name">Not logged in</span>
                            }
                            </div>
                        <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)} />
                    </nav>
                </div>
            )}
        </Spring>
        
    )
}

export default Navigation
