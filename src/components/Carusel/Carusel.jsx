import React from 'react'
import a from '../../img/carusel.jpg'
import b from '../../img/carusel2.jpg'
import c from '../../img/carusel3.jpg'
import s from './Carusel.module.scss'
import fon from '../../img/fon.png'
const Carusel = () => {
  return (
    <div className={s.aa}>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={a} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={b} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
  <img src={fon} alt="" width={1710}/>
</div>





    </div>
  )
}

export default Carusel