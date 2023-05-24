import style from './Nav.module.css'
import logo from "../../assets/codecoffelogo.png" 

const Nav = () => {
  return(
    <nav className={style.nav}>
      <div className={style.logoContainer}>
      <img className={style.logo} src={logo}/>
      <h4 className={style.nameLogo}>Code and Coffe</h4>
      </div>
      <button className={style.buttonCotizar}>Cotizar</button>
    </nav>
  )
};

export default Nav