const fs = require('fs')
const path = require('path')
const VacancyService = require('../../api/vacancies')
const UserService = require('../../api/users')
const { errorHandler } = require('../../api/utils')

const getVacancies = cb =>
    async (parent, args, ctx, info) => {
        const vacancies = await cb(args, parent)
            .catch(errorHandler)

        if(!vacancies.length) return []
        return vacancies
    }

module.exports = {
    resolvers: {
        Query: {
            getVacancies: getVacancies(
                async ({type}) => await VacancyService.getVacancies(type)
            ),
            getVacanciesByCountry: getVacancies(
                async ({country}) => await VacancyService.getVacancies('default', country)
            ),
            getVacancy: async (parent, {id}) => {
                const vacancy = await VacancyService.getVacancy(id)
                return vacancy
            },
            getUser: async (parent, {email}) => {
                const user = await UserService.getUser(email)
                return user
            }
        }
    },
    schema: fs.readFileSync(
        path.resolve(
            __dirname,
            './posts-schema.graphql'
        )
    ).toString()
}