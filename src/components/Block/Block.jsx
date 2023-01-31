import React from 'react'
import Carousel from '../Carusel/Carusel'
import s from './Block.module.scss'
import Contact from '../Contact/Contact'
import Tovar from '../Tovar/Tovar'
import Search from '../Search/Search'
import Map from '../Map/Map'
import { useState } from 'react'
const Block = ({ con }) => {
  const [value, setValue] = useState('')
  const allData = con.filter(item => item.name.toLowerCase().includes(value))
  return (
    <div >
      <Carousel />
      <Search setValue={setValue} value={value}  />
      <div className={s.com}>
        {
          allData.map(item => (
            <Tovar item={item} key={item.id}/>
          ))
        }
      </div>
      <Contact />
<Map/>
    </div>
  )
}

export default Block