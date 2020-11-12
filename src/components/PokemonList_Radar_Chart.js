import React from 'react'
import typeColors from './typeColors'
import { Radar } from 'react-chartjs'
import { Button } from 'react-bootstrap'

export default function PokemonList({ pokemon, modalShow }) {
  const label = pokemon.stats.map((info) => {
    let pokeLabel = info.stat.name
    return `${pokeLabel.charAt(0).toUpperCase()}${pokeLabel.slice(1)}`
  })

  const data = pokemon.stats.map((info) => {
    return info.base_stat
  })

  let charData= {
    labels: label,
    datasets: [{
      data: data,
      fillColor: "rgba(255,99,132,0.2)",
      strokeColor: "rgba(255,99,132,1)",
      pointColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)"
    }]
  }

    return (
        <div className="card rounded border-info shadow">
            <div className="card-img-top text-center">
              
                <img src={pokemon.sprites.front_default} alt="pokemon-front" />
                <h4 className="card-title text-center mx-auto text-capitalize">
                    {pokemon.name}
                </h4>

                <div className="Card__types">
                    {
                        pokemon.types.map(type => {
                            return (
                                <div className="Card__type rounded-pill" style={{ backgroundColor: typeColors[type.type.name] }}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr className="mx-5 my-2 bg-info"/>
            <div className="card-body bg-info pt-2 text-capitalize">
                <table className="table table-borderless table-sm p-0 m-0 text-white">
                  <tbody>
                  <tr>
                    <th scope="row" width="25%">Weight</th>
                    <td>{pokemon.weight}</td>
                  </tr>
                  <tr>
                    <th scope="row">Height</th>
                    <td>{pokemon.height}</td>
                  </tr>
                  <tr>
                    <th scope="row">Ability</th>
                    <td>
                      {
                        pokemon.abilities.map((abilities, i) => {
                          return (
                            `${(i!==0) ? ',' : ''} ${abilities.ability.name}`
                          )
                        })
                      }
                    </td>
                  </tr>
                  </tbody>
                </table>
                <Button variant="outline-dark" onClick={modalShow}>Dark</Button>

                <h4>Base Stats</h4>
                <div className="col-md-12 bg-light m-0 p-0">
                <Radar data={charData} width="250" height="250"/>
                </div>
            </div>
        </div>
    );
}