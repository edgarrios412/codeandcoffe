import style from './Nav.module.css'
import logo from "../../assets/codecoffelogo.png" 

const Nav = () => {
  return(
    <nav className={style.nav}>
      <a className={style.noLink} href="#inicio">
      <div className={style.logoContainer}>
      <img className={style.logo} src={logo}/>
      <h4 className={style.nameLogo}>Code & Coffee</h4>
      </div>
      </a>
      <a className={style.noLink} href="#cotizar"><button className={style.buttonCotizar}>Cotizar</button></a>
    </nav>
  )
};

export default Nav