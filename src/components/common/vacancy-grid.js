import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'

function VacancyGrid({ vacancies }) {
    const [pageSize, setPageSize] = useState(3)
    const [current, setCurrent] = useState(1)

    const paginatedVacancies = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize
        return vacancies?.slice(firstIndex, lastIndex)
    }, [current, pageSize, vacancies])

    return (
        <section className="grid-pagination-container container">
            <section className="post-grid section">
                {paginatedVacancies?.map((vacancy, index) => (
                    <div className="post-container" key={index}>
                        <figure>
                            {/* <Link to={vacancy.link}> */}
                                <img className='post-grid-img' src={require(`../../assets/images/${ vacancy.vacancy_image }`).default} alt="vacancyImg"/>
                            {/* </Link> */}
                        </figure>
                        <div className="post-title">{vacancy.vacancy_title}</div>
                        {/* <span className='author-date'>Pievienots: {vacancy.date}</span> */}
                        <div className="post-description">{vacancy.vacancy_description}</div>
                        {/* <Link className='post-link' to={vacancy.link}>Read more...</Link> */}
                    </div>
                ))}
            </section>
            <Pagination
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
                total={vacancies?.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>

    )
}

export default VacancyGrid
