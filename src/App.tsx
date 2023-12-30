import {type fact} from './types/api'
import './styles/app.css'
import { useState, useEffect } from 'react'

function App() {

  const [fact, setFact] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [search, setSearch] = useState(true)

  const buscar = () => {
    setSearch(true)
  }

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data: fact) => {
        setFact(data.fact)
        setUrlImage(`https://cataas.com/cat/says/${data.fact.split(' ', 1)}`)
        setSearch(false)
      })
  }, [search])

  return (
    <>
      <section>
        <h3>{fact}</h3>
        <img src={urlImage} alt={`A cat with text ${fact}`} />
        <button onClick={buscar}>Otra foto</button>
      </section>
    </>
  )
}

export default App
