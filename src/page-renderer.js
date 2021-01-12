import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)
        return React.createElement(() => <h1 className='error'>Whoops, nothing here ... 404</h1>)
    }
}
export default function PageRenderer() {
    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)
}
