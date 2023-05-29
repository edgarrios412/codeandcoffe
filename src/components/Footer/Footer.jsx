import style from './Footer.module.css'
import {FaTiktok, FaLinkedin} from "react-icons/fa" 
import {RiInstagramFill} from "react-icons/ri" 

const Footer = () => {
  return(
    <footer className={style.footer}>
        <ul className={style.ul}>
            <li className={style.liDerechos}>Todos los derechos reservados</li>
            <li className={style.liLogo}>Code & Coffee</li>
            <li className={style.liRedes}>
                <li className={style.liIcon}><RiInstagramFill/></li>
                <li className={style.liIcon}><FaTiktok/></li>
                <li className={style.liIcon}><FaLinkedin/></li>
            </li>
        </ul>
    </footer>
  )
};

export default Footer