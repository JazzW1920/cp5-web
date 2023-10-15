// Marcio

import {} from 'react'
import img from '../assets/img4.jpg'
import './sobre.css'

function Sobre (){

  return(
    <>
    <main className='sobre'>
      <h1>Sobre</h1>
      <img src={img} alt="" className='equipe'/>
      <ul className='nomes'>
          <li>Carlos Augusto Campos Ganzerli</li>
          <li>Jessica Witzler Costacurta</li>
          <li>Márcio Hitoshi Tahyra</li>
          <li>Giovanna Saori Arata</li>
          <li>Julia Leite Galvão</li>
      </ul>
    </main>
    </>
  )
}
export default Sobre