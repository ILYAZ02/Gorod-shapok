import React, { useState } from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  let [cartOpen,setCartOpen]=useState(false)
 
  return (
    <div className={s.menu}>
      <NavLink to='/'>
        <img src={logo} alt="" />
      </NavLink>

      <div className={s.comp}>
        <NavLink to='/girl'>
          ЖЕНСКИЕ
        </NavLink>
        <NavLink to='/man'>
          МУЖСКИЕ
        </NavLink>
        <NavLink to='/baby'>
          ДЕТСКИЕ
        </NavLink>
        <NavLink>
          АКСЕССУАРЫ
        </NavLink>
        <NavLink>
          РАСПРОДАЖА
        </NavLink>
        <NavLink>
          ОПТ
        </NavLink>
        <div className={s.korz}>
      
        <FaShoppingCart onDoubleClick={()=>setCartOpen(cartOpen=!cartOpen)} className={s.korzina} />
        {cartOpen &&(
            <div className={s.kor}>
              <h1>Корзина пустая!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates consequatur quod ipsam, dicta veniam hic perspiciatis dignissimos, nulla harum cumque, provident accusantium! Amet delectus at sequi est eaque fuga impedit hic possimus incidunt, reiciendis, expedita quaerat veritatis molestias. Dolorem repudiandae aliquid harum ab nemo beatae id nobis illo reiciendis animi, ea, saepe recusandae facilis hic enim inventore ratione! Id voluptates doloribus earum nihil ullam velit consequatur, neque nobis minima ipsa. Incidunt nisi eaque totam autem, vero recusandae rem quo nulla ducimus nihil minima maiores saepe consectetur deserunt eum aut quam architecto alias iusto consequuntur nesciunt magnam iure corporis id? Incidunt voluptate maxime quis nobis nesciunt unde officia. Quas molestiae corrupti aperiam quo dolorum, autem ex vero atque rem explicabo fugiat eaque, animi aliquid? Doloremque nostrum laborum a reiciendis voluptate fuga recusandae sint obcaecati magnam ab aperiam nemo exercitationem consequatur repellendus unde rem aliquid asperiores, molestias fugiat possimus aspernatur. Accusamus adipisci architecto aperiam nostrum reiciendis nobis reprehenderit, doloribus et? Ipsa dicta dolores recusandae perferendis animi similique ducimus quod modi? Facilis voluptate corporis minima ratione ipsam delectus expedita vero tenetur aut neque, sapiente explicabo fugiat repudiandae nisi consequuntur perferendis minus nobis. Omnis praesentium nostrum delectus optio accusamus, alias quae a fugiat quaerat dolore reprehenderit aliquid quidem exercitationem maxime commodi tempora magni error tempore rerum sed eaque facilis iste, voluptates doloremque? Iusto, eveniet nemo facere pariatur provident dolore ex. Possimus dignissimos minus rem tempore cumque incidunt earum nam. Repellendus sequi odio iure similique optio saepe aliquam recusandae, asperiores consectetur illum itaque, animi voluptatibus ex culpa! Aliquam, velit aperiam odit tempore quidem vitae quae incidunt ipsa sed sequi, ea perspiciatis architecto sit, dolores dolorem? Pariatur ex eaque recusandae? Nam officiis voluptatibus in expedita non ex ipsam? Perspiciatis error libero nulla iure minima. Cum facere, nemo, vitae eveniet beatae architecto est iste sit eos impedit soluta possimus repudiandae omnis, vero quod id cumque perspiciatis atque expedita animi tempore. Quas officiis illum explicabo ipsam architecto! Accusantium quod assumenda facere accusamus velit in, minima similique. Harum earum rerum dicta cum facere repudiandae nulla, eius aspernatur cupiditate voluptatem, eum voluptatum, officia maxime officiis hic voluptas vel. Tempore commodi deserunt et, voluptatum at ex aliquam earum odio recusandae, possimus soluta aspernatur voluptas. Eius id, cumque nesciunt velit possimus tempora quod saepe inventore nostrum minus. Sunt, placeat expedita deserunt dolores soluta minus harum tempore reprehenderit sint quis consequatur sequi voluptates distinctio quia? Deserunt vel aspernatur quos similique magni corporis eius nam quisquam ipsum. Sit, nisi? Incidunt, nesciunt doloremque voluptate placeat voluptas culpa nemo nam autem odit dolorem omnis quas quis quasi porro quos dicta totam deserunt. Amet ipsum ipsam esse fugit optio, placeat similique blanditiis quia veritatis temporibus, incidunt mollitia consequuntur labore aperiam sit, dolore ducimus doloremque minus ex repellendus! Voluptatibus similique fugiat expedita consequatur corrupti, beatae tenetur soluta cumque. Consequuntur quos ullam excepturi, perspiciatis praesentium cumque numquam id optio harum aliquam molestiae officiis ea doloribus culpa corporis in libero est similique ab possimus enim, quae illo. Quasi minima optio expedita quod, modi adipisci ut voluptatibus vitae nobis voluptas! Ipsam aspernatur ab modi deserunt repellat earum, odit commodi esse fugit possimus consectetur quos exercitationem ad iure expedita deleniti ex eligendi libero animi? Esse nostrum at possimus dolorem, illum, illo optio maxime magni iste laudantium iure non consequuntur culpa labore cum! Facilis, velit deleniti. Totam ullam molestias deleniti eos corrupti eveniet fugit distinctio repellat. Ipsam quia animi odio distinctio iure eum molestiae, accusamus, id ullam, pariatur nulla deserunt atque corrupti! Totam magni delectus explicabo tempore, est eius, excepturi ea labore error repellat rem! Doloremque sed consequatur tenetur, exercitationem praesentium laboriosam doloribus explicabo dolor repudiandae, veritatis reprehenderit beatae tempora minus nesciunt nihil eius saepe quam harum debitis laborum, eligendi expedita vero. Quia cupiditate porro facilis, vitae iste amet enim rem atque, culpa beatae illo repellendus praesentium commodi delectus exercitationem nesciunt quasi veritatis ratione explicabo impedit illum maiores. Fugit eveniet similique velit nesciunt earum, corrupti, quaerat error, quam esse soluta quidem. Doloribus eligendi quis fugit nulla quasi quod deserunt saepe vero, nemo facilis obcaecati eum atque numquam, in accusamus ea quisquam earum qui velit, animi necessitatibus rerum sunt? Veritatis pariatur minima tempora. Autem sapiente molestias dicta dolores animi ab, facere magnam sequi eius deserunt tempore voluptatibus fuga neque ullam illum nihil debitis nam incidunt quod, fugiat maxime quisquam aspernatur officia adipisci. Necessitatibus earum provident vel adipisci in. Fugiat cupiditate similique in quod qui ratione iusto harum culpa! Quam accusantium beatae explicabo dignissimos eveniet corrupti illo consequuntur repellendus culpa reiciendis harum neque laboriosam pariatur, voluptas nulla blanditiis autem nisi a saepe. Tempora similique ipsam quasi, voluptate dolorum ad eaque eveniet totam enim, cumque dolore! Quisquam aliquid vitae minima ipsam laudantium numquam inventore ex maiores dignissimos architecto incidunt nihil, earum illum neque soluta harum esse facilis deserunt blanditiis quia, possimus at. Vitae nisi laboriosam optio ipsum veniam labore quo tempore, earum iste, ipsam exercitationem illo natus esse obcaecati ullam doloribus, repellendus aspernatur magnam perspiciatis ab. Voluptatum iusto tempora sed repellat itaque quas? Asperiores voluptatum repellat modi. Excepturi, nihil quas numquam doloremque nobis distinctio vel nemo eaque consectetur delectus amet fugiat exercitationem ad quibusdam fugit ab, odio eveniet blanditiis aut, voluptas minima incidunt sit! Quos sapiente libero quam eius temporibus, porro nesciunt, et ipsam adipisci repudiandae hic. Id, possimus? Non tempora, vitae veniam commodi, voluptatum porro nostrum libero exercitationem sequi neque dolorem nesciunt officiis possimus at, nulla eum earum fugiat repudiandae temporibus. Deleniti id modi temporibus delectus ducimus impedit, quasi soluta eum cum qui. Maxime doloribus ab quae accusamus nisi fuga soluta ratione eum exercitationem praesentium vel dolorum enim, dolore consequuntur officiis est, earum fugit quod? Sit, repudiandae. Nobis repellendus molestias quas perspiciatis ratione obcaecati voluptates animi, quod accusamus tempore amet porro voluptatibus quisquam iusto rerum quasi qui, fugit itaque corporis sed corrupti ullam? Quasi mollitia quo reiciendis error repellat excepturi! Nemo iste quo nihil minus. Quisquam, cumque perspiciatis! Doloribus quod similique ad debitis voluptatibus ullam tempora inventore. Optio veniam aliquam totam tenetur dignissimos natus expedita necessitatibus, possimus consequuntur cum! Reprehenderit quae incidunt nisi architecto blanditiis a perspiciatis quia, laborum, consequatur alias eos magni neque?
              </h1>
             </div>
        )}
          
        
        </div>
      </div>
     
    </div>
  )
}

export default Header