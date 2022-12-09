import React from 'react'
import { useState } from 'react'
import s from '../Tovar/Tovar.module.scss'
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
import plusI from '../../img/tplus.svg'
import plused from '../../img/plus.svg'
const Tovar = ({ item }) => {
  const [like, setLike] = useState(false)
  const [plus, setPlus] = useState(false)
  
  
  function anClick() {
    setLike(!like)

  } 

  function amClick() {
    setPlus(!plus)
  }

  return (
    <div>
      <div className={s.content}>
        <div> <img src={item.image} alt="" /></div>
        <div> <h2>{item.price}</h2></div>
        <div> <h5>{item.name}</h5></div>
        <div className={s.like} >
          <img
            style={{ width: '35px' }}
            onClick={anClick}
            src={like ? likedImg : likeImg}
            alt="like" />
        </div>
        <div className={s.plus}>
        <img
            style={{ width: '35px' }}
            onClick={amClick}
            src={plus ? plused : plusI}
            alt="plus" />
        </div>
      </div>
    </div>
  )
}

export default Tovar
