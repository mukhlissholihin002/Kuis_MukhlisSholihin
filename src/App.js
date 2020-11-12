import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonModal from './components/PokemonInfo'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'
  const [currentPageUrl, setCurrentPageUrl] = useState(initialURL)
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(currentPageUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [currentPageUrl])

  async function next() {
    setLoading(true);
    setCurrentPageUrl(nextUrl)
  }

  async function prev() {
    setLoading(true);
    setCurrentPageUrl(prevUrl)
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

 function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
  }

  async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
  }

  function showMyModal(pokemon) {
    console.log(pokemon.species.url)
    new Promise((resolve, reject) => {
      fetch(pokemon.url).then(res => res.json())
      .then(data => {
          setModalShow(true)
          resolve(data)
          console.log(data)
      })
      .catch(ex => {
        console.log('error: ', ex)
      })
    }); 
  }

  return (
    <>
      <Navbar />
      <div>
        {loading ? <h1 className="text-center">Loading...</h1> : (
          <>
            <div className="container mb-0">
              <div className="d-flex bd-highlight mb-3">
                <div className="p-2 bd-highlight text-info">
                  <h1>Pokemon List</h1>
                </div>
                <div className="ml-auto p-2 bd-highlight">
                  <Pagination 
                    prev={prevUrl ? prev : null}
                    next={nextUrl ? next : null}
                  />
                </div>
              </div>
            </div>
            
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <PokemonList key={pokemon.name} pokemon={pokemon} modalShow={showMyModal(pokemon)} />
              })}
            </div>
              
            <div className="container mb-0">
              <div className="d-flex bd-highlight mb-3">
                <div className="ml-auto p-2 bd-highlight">
                  <Pagination 
                    prev={prevUrl ? prev : null}
                    next={nextUrl ? next : null}
                  />
                </div>
              </div>
            </div>

            <PokemonModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </>
        )}
      </div>
    </>
  );
}

export default App;