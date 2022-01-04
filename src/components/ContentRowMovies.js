import React, { Component } from 'react'
import SmallCard from './SmallCard';


export default class ContentRowMovies extends Component {
    constructor() {
        super()
        this.state = {
            movies: {
                color: "primary",
                titulo: "Movies in Data Base",
                valor: "",
                icono: "fas fa-film",
            },
            awards: {
                color: "success",
                titulo: "Total awards",
                valor: "",
                icono: "fas fa-award",
            },
            actors: {
                color: "warning",
                titulo: "Actors quantity",
                valor: "",
                icono: "fas fa-user",
            }
        }
    }

    async apiCall(url, handler) {
        try {
            let response = await fetch(url);
            let result = await response.json();
            console.log(result.data)
            handler(result)
        } catch (error) {
            console.error(error)
        }
    }

    getTotalMovies = (info) => {
        this.setState({
            movies: {
                ...this.state.movies,
                valor: info.data
            }
        })
    }
    getTotalAwards = (info) => {
        this.setState({
            awards: {
                ...this.state.awards,
                valor: info.data
            }
        })
    }
    getTotalActors = (info) => {
        this.setState({
            actors: {
                ...this.state.actors,
                valor: info.data
            }
        })
    }

    async componentDidMount() {
        await this.apiCall('http://localhost:3001/api/movies/total', this.getTotalMovies);
        await this.apiCall('http://localhost:3001/api/movies/awards', this.getTotalAwards);
        await this.apiCall('http://localhost:3001/api/movies/actors', this.getTotalActors);
    }

    render() {
        return (
            <>
                {/*<!-- Content Row -->*/}
                <div className="row">
                    <SmallCard  {...this.state.movies} />
                    <SmallCard  {...this.state.awards} />
                    <SmallCard  {...this.state.actors} />

                </div>
            </>
        )
    }
}


// 24.32 clase 99