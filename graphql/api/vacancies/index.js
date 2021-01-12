const db = require('../../database/mysql')
const { errorHandler } = require('../utils')

module.exports = {
    getVacancy: async (id) => {
        let qry = db
            .select('*')
            .from('vacancies')
            .where({ vacancy_id: id })
            .catch(errorHandler)

            return qry.then((data) => {
                console.log(data)
                return data[0]
            }).catch(errorHandler)
    },

    getVacancies: async (type, country) => {
        let qry = db.select(
            'vacancies.vacancy_title',
            'vacancies.vacancy_description',
            'vacancies.vacancy_country',
            'vacancies.vacancy_car',
            'vacancies.vacancy_image',
            'vacancies.vacancy_category_id',
            'vacancies.vacancy_latitude',
            'vacancies.vacancy_longitude',
            'categories.category_title'
        )
        .from('vacancies')
        .leftJoin('categories', 'vacancies.vacancy_category_id', 'categories.category_id')

        qry = {
            recent: () => qry
                .orderBy('vacancy_created_at', 'desc')
                .limit(3),

            default: () => qry
        }[type || 'default']()

        return qry.then(data => {
            if (country) {
                return data.filter((vacancy) => 
                    vacancy.vacancy_country == country
                )
            } else {
                console.log(data)
                return data
            }
        }).catch(errorHandler)
    }
}