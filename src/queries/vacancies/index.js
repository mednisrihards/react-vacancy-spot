import gql from 'graphql-tag'

export const GET_VACANCIES_QUERY = gql`
    query getVacancies {
        vacancies: getVacancies {
            vacancy_title
            vacancy_description
            vacancy_country
            vacancy_car
            vacancy_image
            vacancy_latitude
            vacancy_longitude
        }
    }
`