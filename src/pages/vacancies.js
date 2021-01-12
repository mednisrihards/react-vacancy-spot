import React, { useState, useEffect } from 'react'
import VacancyItem from '../components/vacancy-item'
import ReactMapGL, { Popup, FlyToInterpolator } from 'react-map-gl';
import locations from '../assets/mock/locations'
import { DeckGL } from 'deck.gl'
import { ScatterplotLayer } from '@deck.gl/layers';
import { useQuery } from '@apollo/react-hooks'
import { GET_VACANCIES_QUERY } from '../queries/vacancies'

function Vacancies() {

    const { data, error } = useQuery(GET_VACANCIES_QUERY)

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '50vh',
        longitude: data?.vacancies[0].vacancy_longitude,
        latitude: data?.vacancies[0].vacancy_latitude,
        zoom: 6,
        pitch: 10,
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator()
    })

    // const [selectedPlace, setselectedPlace] = useState(null)

    const layers = [
        new ScatterplotLayer({
            id: 'scatterplot-layer',
            data: data?.vacancies,
            getRadius: 50000,
            radiusMaxPixels: 10,
            getPosition: d => [d.vacancy_longitude, d.vacancy_latitude],
            getFillColor: [255,99,71],
            pickable: true,
            onHover: info => setHoverInfo(info)
        })
    ];

    const [hoverInfo, setHoverInfo] = useState({});

    if (error) {
        console.log(error)
        return <h1 className='error'>Something went wrong</h1>
    }

    return (
        <main className="places">
            <section className="map">
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    // mapboxApiAccessToken={'pk.eyJ1IjoibWVkbmlzcmloYXJkcyIsImEiOiJja2poY3NpcjIxMGVvMzdudmoxYTI1dHdmIn0.s83KGiLyWZfrsIED18J2tA'}
                    // mapStyle={'mapbox://styles/mapbox/streets-v9'}
                    onViewportChange={viewport => setViewport(viewport)}
                >
                    <DeckGL viewState={viewport} layers={layers}>
                        {hoverInfo.object && (
                            <div className='tooltip overlay' style={{ backgroundImage: `url("${ require(`../assets/images/${ hoverInfo.object.vacancy_image }`).default}")`, position: 'absolute', zIndex: 1, pointerEvents: 'none', left: hoverInfo.x, top: hoverInfo.y}}>
                                <p className='title'>{ hoverInfo.object.vacancy_title }</p>
                            </div>
                        )}
                    </DeckGL>
                    <div className="location-btns">
                        {locations.map((location, index) => (
                            <button key={index} className='location-btn' onClick={() => (
                                viewport.latitude !== location.latitude && (
                                    setViewport({...viewport, longitude: location.longitude, latitude: location.latitude, zoom: location.zoom})
                                )
                            )}>{location.title}</button>
                        ))}
                    </div>
                </ReactMapGL>
            </section>
            <section className="list container">
                {data?.vacancies.map((vacancy, index) => (
                    <VacancyItem vacancy={vacancy} key={index}/>
                ))}
            </section>
        </main>
    )
}

export default Vacancies
