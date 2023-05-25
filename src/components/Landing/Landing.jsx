import style from "./Landing.module.css";
import Dev from "../../assets/devcoffelineal.png";
import Planning from "../../assets/devplaninglineal.png";
import Team from "../../assets/devteamlineal.png";
import Contact from "../../assets/devmobile.png"
import Coffe from "../../assets/codecoffe.png"
import Edgar from "../../assets/edgar.png"
import Diana from "../../assets/diana.png"

// PORQUE NOSOTROS
import fast from "../../assets/fast.png"
import approved64 from "../../assets/approved64.png"
import responsive from "../../assets/responsive.png"
import rising from "../../assets/rising.png"
import technology from "../../assets/technology.png"
import customerservice from "../../assets/customer-service.png"

// SERVICIOS

import landingpage from "../../assets/landing-page.png"
import onlineshop from "../../assets/online-shop.png"
import responsivelineal from "../../assets/responsivelineal.png"
import support from "../../assets/support.png"

import bait from "../../assets/bait.png"

const Landing = () => {
  return (
    <>
      {/* <div className={style.publicidad}>
      <img className={style.publiIMG} src={Dev}/>
      <div style={{display:"flex", alignItems:"end"}}>
        <img style={{height:"80px"}}src={Coffe}></img>
        <div>
      <p className={style.publiprincipal}>Tu lo imaginas</p>
      <p className={style.publisecundario}>Nosotros lo desarrollamos</p>
      </div>
      </div>
      <p className={style.publidesc}>El ganador obtendrá una página web sencilla para promocionar su marca personal o emprendimiento</p>
      <div className={style.footerPubli}>
      <div>
      <div className={style.redessociales}>
      <img  className={style.iconnn}src="https://static.vecteezy.com/system/resources/previews/016/716/448/non_2x/instagram-icon-free-png.png"></img>
      <p className={style.nameRed}>@codeandcoffe_</p>
      </div>
      <div className={style.redessociales}>
      <img className={style.iconnn2} src="https://static.vecteezy.com/system/resources/previews/015/337/689/non_2x/web-icon-web-sign-free-png.png"></img>
      <p className={style.nameRed}>www.codeandcoffe.tech</p>
      </div>
      <p className={style.terms}>*Aplican terminos y condiciones</p>
      </div>
      </div>
      </div> */}
      <div className={style.view1}>
        <img className={style.developer} src={Dev}></img>
        <div className={style.textoWelcome}>
          <div className={style.logoContainer}>
          <img className={style.logo} src={Coffe}></img>
          {/* <h1 className={style.logoName}>Code & Coffee</h1> */}
          </div>
          <div className={style.paracentrar}>
          <h2 className={style.eslogan}>Tu lo imaginas</h2>
          <b className={style.action}>Nosotros lo desarrollamos</b>
          </div>
          <div className={style.buttons}>
          <a href="#servicios" style={{textDecoration:"none"}}>
            <button className={style.buttonAction}>Consultar servicios</button>
          </a>
            <button className={style.button}>Nuestro trabajo</button>
          </div>
        </div>
      </div>
      <div className={style.view2}>
        <div className={style.textContainer}>
        <div>
        <h2 className={style.titleSection}>¿Quienes somos?</h2>
        <h3 className={style.descSection}>
        <b style={{fontWeight:"600"}}>Code and Coffee</b> es tu aliado en el mundo digital. Creamos soluciones personalizadas para impulsar tu presencia en línea. Desde páginas web atractivas hasta tiendas en línea de alto rendimiento, te ayudamos a convertir tus ideas en realidad. Nuestro enfoque se basa en la innovación, calidad y satisfacción del cliente. Únete a nosotros y descubre el poder de lo digital.
        </h3>
        </div>
        <img className={style.devTeam} src={Team} />
        </div>
        <div className={style.reviews}>
        <a className={style.noLink} target="_blank" href="https://www.linkedin.com/in/edgarrios412/">
          <div className={style.review}>
            <div className={style.teamDesc}>
              <p className={style.teamName}>Edgar Vilchez</p>
              <p className={style.teamRole}>Desarrollador Web</p>
            </div>
          <img className={style.teamUser} src={Edgar}></img>
          </div>
          </a>
          <a className={style.noLink} target="_blank" href="https://www.linkedin.com/in/diana-vargas-71276aa3/">
            <div className={style.review}>
          <div className={style.teamDesc}>
              <p className={style.teamName}>Diana Vargas</p>
              <p className={style.teamRole}>Product Owner</p>
            </div>
            <img className={style.teamUser} src={Diana}></img>
          </div>
          </a>
          <a className={style.noLink} target="_blank" href="https://bait-one.vercel.app/">
            <div style={{backgroundImage:`url(${bait})`}} className={style.review2}>
            <p className={style.ultimoProyecto}>ULTIMO PROYECTO</p>
          </div></a>
        </div>
      </div>
      <div className={style.view3} id="prueba">
        <h2 className={style.titleSection}>¿Por qué nosotros?</h2>
          <div className={style.benefits}>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src={fast}></img>
            <div>
            <h3 className={style.benefitName}>Rápido desarrollo</h3>
            <h4 className={style.benefitSubtitle}>Los más rapidos del mercado</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Utilizamos metodologías ágiles para acelerar el proceso y ofrecerte una solución lo más rápido posible.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src={approved64}></img>
            <div>
            <h3 className={style.benefitName}>Garantia</h3>
            <h4 className={style.benefitSubtitle}>Protegemos tu dinero</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Usamos tecnologías que permiten que el desarrollo sea confiable y este siempre disponible para tus clientes y para ti.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src={responsive}></img>
            <div>
            <h3 className={style.benefitName}>Diseño responsivo</h3>
            <h4 className={style.benefitSubtitle}>Se adapta a todo dispositivo</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Todas nuestras aplicaciones están diseñadas para que puedan visualizar en cualquier dispositivo.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src={rising}></img>
            <div>
            <h3 className={style.benefitName}>Evolución continua</h3>
            <h4 className={style.benefitSubtitle}>Con potencial de expandirse</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Hacemos aplicaciones escalables que te permitan agregar funcionalidades para ti y tus clientes.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src={technology}></img>
            <div>
            <h3 className={style.benefitName}>Tecnologias</h3>
            <h4 className={style.benefitSubtitle}>Las mas novedosas</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Nuestro equipo está en constante aprendizaje para estar a la vanguardia de todas tecnologías para el desarrollo de tu app.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src={customerservice}></img>
            <div>
            <h3 className={style.benefitName}>Soporte</h3>
            <h4 className={style.benefitSubtitle}>Tú eres nuestra prioridad</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Tenemos a tu disposición un equipo que te brindará las soluciones acorde a tus necesidades</p>
            </div>
          </div>
      </div>
      <div className={style.view4} id="servicios">
        <div className={style.servicesContainer}>
          <div className={style.services}>
            <div className={style.serviceDetail}>
            <img className={style.iconService} src={landingpage}></img>
              <p className={style.nameService}>Landing Page</p>
              <p className={style.descService}>La opción perfecta para atraer usuarios a tu negocio</p>
              </div>
            <div className={style.serviceDetail}>
            <img className={style.iconService} src={onlineshop}></img>
            <p className={style.nameService}>Tienda en linea</p>
            <p className={style.descService}>¿Necesitas una tienda en linea? Nosotros la hacemos por ti</p>
              </div>
            <div className={style.serviceDetail}>
            <img className={style.iconService} src={responsivelineal}></img>
            <p className={style.nameService}>Diseño responsive</p>
            <p className={style.descService}>¿Tienes una web pero no se ve bien en dispositivos moviles?</p>
              </div>
            <div className={style.serviceDetail}>
              <img className={style.iconService} src={support}></img>
              <p className={style.nameService}>Mantenimiento y soporte tecnico</p>
              <p className={style.descService}>Para un funcionamiento impecable.</p>
              </div>
          </div>
          <div className={style.descriptionServices}>
          <h2 className={style.titleServices}>Nuestros servicios</h2>
          <h4 className={style.subtitleServices}>Estos son solo algunos ejemplos de los servicios que ofrecemos. Podemos adaptarnos a tus necesidades específicas y ofrecer soluciones personalizadas para alcanzar tus objetivos en línea.</h4>
          <button className={style.buttonContact}>Empecemos a trabajar</button>
          <div className={style.statsContainer}>
          <div className={style.stats}>
            <p className={style.number}>+10</p>
            <p className={style.text}>Clientes</p>
          </div>
          <div className={style.stats}>
            <p className={style.number}>+20</p>
            <p className={style.text}>Proyectos</p>
          </div>
          <div className={style.stats}>
            <p className={style.number}>+50</p>
            <p className={style.text}>Ventas</p>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className={style.view2}>
        {/* <h2 className={style.titleSection}>Contactanos</h2> */}
        <img className={style.bannerContact} src={Contact}></img>
        <h3 className={style.titleContact}>¡Comunicate con nosotros y empecemos a trabajar!</h3>
        <a style={{textDecoration:"none"}} target="_blank" href="https://wa.me/message/XIQJNGRQG35XE1"><button className={style.btnContact}>Contacto</button></a>
      </div>
    </>
  );
};

export default Landing;
