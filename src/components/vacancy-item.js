import React from 'react'
// import { Link } from 'react-router-dom'

function VacancyItem({ vacancy }) {
    return (
        <div className='vacancy-item'>
            <figure>
                {/* <Link to={vacancy.link}> */}
                    <img className='post-grid-img' src={require(`../assets/images/${ vacancy.vacancy_image }`).default} alt="vacancyImg"/>
                {/* </Link> */}
            </figure>
            <div className="details">
                {/* <Link to={vacancy.link}> */}
                    <h1>{vacancy.vacancy_title}</h1>
                {/* </Link> */}
                <p className="description">{vacancy.vacancy_description}</p>
                <div className="lower-details">
                    <div>
                        <p className="country">Valsts: {vacancy.vacancy_country}</p>
                        <p className="paid-car">Transporta apmaksa: {vacancy.vacancy_car ? vacancy.vacancy_car : 'Nav'}</p>
                    </div>
                    <div className="vacancy-btns">
                        <button>Pieteikties</button>
                        {/* <Link to={vacancy.link}> */}
                            <button>Apskatīt</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VacancyItem
