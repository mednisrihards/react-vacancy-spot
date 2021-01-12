import moment from 'moment'

const vacancies = [
    {
        position: 'Metinātājs Zviedrijā',
        date: moment().format('DD MMMM, YYYY'),
        category: 'Metālapstrāde',
        link: '#',
        image: 'gauja.jpg',
        location: {
            longitude: 24.847008,
            latitude: 57.17625,
            country: 'Zviedrija'
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id vehicula velit, et ornare elit. Duis vel lacinia quam. Sed fermentum gravida enim, ut venenatis tellus convallis id. Mauris vel odio rhoncus, consectetur velit non, auctor dolor. Nam fringilla justo nec imperdiet bibendum. Etiam nisi ante, consectetur nec sollicitudin pharetra, imperdiet id enim. Sed non felis laoreet, venenatis nisl sed, tincidunt ante.',
        paidCar: null
    },
    {
        position: 'Metinātājs Zviedrijā',
        date: moment().format('DD MMMM, YYYY'),
        category: 'Metālapstrāde',
        link: '#',
        image: 'gauja.jpg',
        location: {
            longitude: 24.847008,
            latitude: 37.17625,
            country: 'Zviedrija'
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id vehicula velit, et ornare elit. Duis vel lacinia quam. Sed fermentum gravida enim, ut venenatis tellus convallis id. Mauris vel odio rhoncus, consectetur velit non, auctor dolor. Nam fringilla justo nec imperdiet bibendum. Etiam nisi ante, consectetur nec sollicitudin pharetra, imperdiet id enim. Sed non felis laoreet, venenatis nisl sed, tincidunt ante.',
        paidCar: "100"
    },
    {
        position: 'Metinātājs Zviedrijā',
        date: moment().format('DD MMMM, YYYY'),
        category: 'Metālapstrāde',
        link: '#',
        image: 'gauja.jpg',
        location: {
            longitude: 14.847008,
            latitude: 17.17625,
            country: 'Zviedrija'
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id vehicula velit, et ornare elit. Duis vel lacinia quam. Sed fermentum gravida enim, ut venenatis tellus convallis id. Mauris vel odio rhoncus, consectetur velit non, auctor dolor. Nam fringilla justo nec imperdiet bibendum. Etiam nisi ante, consectetur nec sollicitudin pharetra, imperdiet id enim. Sed non felis laoreet, venenatis nisl sed, tincidunt ante.',
        paidCar: null
    }
]

export default vacancies