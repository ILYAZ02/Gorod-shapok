import React from 'react'
import s from './Contact.module.scss'
import lok from '../../img/adres.png'
import chasy from '../../img/308937.svg'
import tel from '../../img/atel.png'
import { motion } from 'framer-motion'
const Contact = () => {
  const texAnimation = {
    hidden: {
      x: -100,
      opacity: 1,

    },
    visible: custom => ({
      x: -0,
      opacity: 2,
      transition: { delay: custom * 0.2 },
    })
  }
  // const textAnimation ={
  //   hidden: {
  //     x:- 100,
  //     opacity:0,
  //   },
  //   visible: custom => ({
  //     x:- 0,
  //     opacity:1,
  //     transition:{delay: custom * 0.1},
  //   })
  // }
  return (

    <motion.div
      initial="hidden"
      whilenView="visible"
      className={s.ontact}>
      <div className={s.naw}> Наш магазин на карте </div>
      <div className={s.kontact}>
        <div className={s.contact}>
          <div>
            <motion.img variants={texAnimation} custom={0} src={lok} alt="" width={200} />
          </div>
          <div>
            <motion.h2 variants={texAnimation} custom={1}>Адрес</motion.h2>
            <motion.p variants={texAnimation} custom={2} >Москва, м. Домодедовская, ул. <br />
              Генерала Белова 43, корп. 2</motion.p>
          </div>
        </div>

        <div className={s.contact}>
          <motion.img variants={texAnimation} custom={0} src={chasy} alt="" width={160} />
          <div className={s.chas}>
            <motion.h2 variants={texAnimation} custom={1}>Часы работы</motion.h2>
            <motion.p variants={texAnimation} custom={2}>ежедневно<br />
              с 10 до 20 часов</motion.p>
          </div>
        </div>

        <div className={s.contact}>
          <motion.img variants={texAnimation} custom={0} src={tel} alt="" width={170} />
          <div>
            <motion.h2 variants={texAnimation} custom={1}>Телефон</motion.h2>
            <motion.p variants={texAnimation} custom={2}>+7 (495) 799-41-99 <br />
              +7 (909) 973-99-66  </motion.p>
          </div>
        </div>



      </div>


    </motion.div>
  )
}

export default Contact

