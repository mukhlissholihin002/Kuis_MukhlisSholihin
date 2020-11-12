import React from 'react'
import typeColors from './typeColors'
import { Button, ProgressBar } from 'react-bootstrap'

export default function PokemonList({ pokemon, modalShow }) {

    return (
        <div className="card rounded border-info shadow">
          <div className="container row mb-2">
            <div className="card-img-top text-center col-md-6 col-sm-12">
              
                <img src={pokemon.sprites.front_default} alt="pokemon-front" />
                <h4 className="card-title text-center mx-auto text-capitalize">
                    {pokemon.name}
                </h4>

                <div className="Card__types ml-3">
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
                
                <hr className="mx-2 mt-2 bg-info"/>
                
                <div className="text-left">
                  <p className="font-weight-bold mt-1">Weight</p>
                  <p className="pl-3">{pokemon.weight}</p>
                  <p className="font-weight-bold">Height</p>
                  <p className="pl-3">{pokemon.height}</p>
                  
                </div>
          
            </div>
            <div className="col-md-6 mt-3 col-sm-12 text-capitalize">
                { 
                  pokemon.stats.map((info, i) => {
                    return (
                      <div className="container row m-0 p-0 mb-2">
                        <div className="col-md-12 col-sm-12 p-0">
                        <b>
                          {info.stat.name}
                        </b>
                        </div>
                        <div className="col-md-12 col-sm-12 p-0 m-0">
                          <ProgressBar
                            variant={(i%2==1)? 'info' : 'success'}
                            now={info.base_stat}
                            label={`${info.base_stat}`}
                            max="255"
                          />
                        </div>
                      </div>
                    )
                  })
                }        
            </div>
              
            <div className="col-md-12">
            <p className="font-weight-bold">Ability</p>
                  <p className="pl-3">
                    {
                      pokemon.abilities.map((abilities, i) => {
                        return (
                          `${(i!==0) ? ',' : ''} ${abilities.ability.name}`
                        )
                      })
                    }
                  </p>
            </div>  
          </div>

          <div className="card-body bg-info pt-2 text-capitalize">
          </div>

        </div>
    );
}