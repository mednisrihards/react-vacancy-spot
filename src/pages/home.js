import React from 'react'
import VacancyGrid from '../components/common/vacancy-grid'

import { useQuery } from '@apollo/react-hooks'
import { GET_VACANCIES_QUERY } from '../queries/vacancies'

function Home() {
    const { data, error } = useQuery(GET_VACANCIES_QUERY)

    if (error) {
        console.log(error)
        return <h1 className='error'>Something went wrong</h1>
    }

    return (
            <section className='container'>
                <div className="row">
                <h1>Jaunākās vakances</h1>
                    <VacancyGrid vacancies={ data?.vacancies }/>
                </div>
            </section>
    )
}

export default Home
