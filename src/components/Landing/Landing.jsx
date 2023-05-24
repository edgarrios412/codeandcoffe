import style from "./Landing.module.css";
import Dev from "../../assets/devcoffelineal.png";
import Planning from "../../assets/devplaninglineal.png";
import Team from "../../assets/devteamlineal.png";
import Contact from "../../assets/devmobile.png"
import Coffe from "../../assets/codecoffe.png"


const Landing = () => {
  return (
    <>
      <div className={style.view1}>
        <img className={style.developer} src={Dev}></img>
        <div>
          <div className={style.logoContainer}>
          <img className={style.logo} src={Coffe}></img>
          {/* <h1 className={style.logoName}>Code & Coffee</h1> */}
          </div>
          <h2 className={style.eslogan}>Tu lo imaginas</h2>
          <b className={style.action}>Nosotros lo desarrollamos</b>
          <div className={style.buttons}>
          <a href="#prueba" style={{textDecoration:"none"}}><button className={style.buttonAction}>Consultar servicios</button></a>
            <button className={style.button}>Nuestro trabajo</button>
          </div>
        </div>
      </div>
      <div className={style.view2}>
        <div className={style.textContainer}>
        <div>
        <h2 className={style.titleSection}>¿Quienes somos?</h2>
        <h3 className={style.descSection}>
        <b style={{fontWeight:"600"}}>Code and Coffe</b> es tu aliado en el mundo digital. Creamos soluciones personalizadas para impulsar tu presencia en línea. Desde páginas web atractivas hasta tiendas en línea de alto rendimiento, te ayudamos a convertir tus ideas en realidad. Nuestro enfoque se basa en la innovación, calidad y satisfacción del cliente. Únete a nosotros y descubre el poder de lo digital.
        </h3>
        </div>
        <img className={style.devTeam} src={Team} />
        </div>
        <div className={style.reviews}>
          <div className={style.review}></div>
          <div className={style.review}></div>
          <div className={style.review}></div>
        </div>
      </div>
      <div className={style.view3} id="prueba">
        <h2 className={style.titleSection}>¿Por qué nosotros?</h2>
          <div className={style.benefits}>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/fast.png"></img>
            <div>
            <h3 className={style.benefitName}>Rápido desarrollo</h3>
            <h4 className={style.benefitSubtitle}>Tendrás tu web en una semana</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Utilizamos metodologías ágiles para acelerar el proceso y ofrecerte una solución lo más rápido posible.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/approved64.png"></img>
            <div>
            <h3 className={style.benefitName}>Garantia</h3>
            <h4 className={style.benefitSubtitle}>Para que confies en nosotros</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Usamos tecnologías que permiten que el desarrollo sea confiable y este siempre disponible para tus clientes y para ti.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/responsive.png"></img>
            <div>
            <h3 className={style.benefitName}>Diseño responsive</h3>
            <h4 className={style.benefitSubtitle}>Se adapta a todo dispositivo</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Todas nuestras aplicaciones están diseñadas para que puedan visualizar en cualquier dispositivo.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/rising.png"></img>
            <div>
            <h3 className={style.benefitName}>Evolución continua</h3>
            <h4 className={style.benefitSubtitle}>Con potencial de expandirse</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Hacemos aplicaciones escalables que te permitan agregar funcionalidades para ti y tus clientes.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/technology.png"></img>
            <div>
            <h3 className={style.benefitName}>Tecnologias</h3>
            <h4 className={style.benefitSubtitle}>Las mas novedosas</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Nuestro equipo está en constante aprendizaje para estar a la vanguardia de todas tecnologías para el desarrollo de tu app.</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/customer-service.png"></img>
            <div>
            <h3 className={style.benefitName}>Soporte</h3>
            <h4 className={style.benefitSubtitle}>Tú eres nuestra prioridad</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Tenemos a tu disposición un equipo que te brindará las soluciones acorde a tus necesidades</p>
            </div>
          </div>
      </div>
      <div className={style.view4}>
        {/* <div className={style.statsContainer}>
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
            <p className={style.text}>Clientes</p>
          </div>
        </div> */}
        <div className={style.servicesContainer}>
          <div className={style.services}>
            <div className={style.serviceDetail}>
            <img className={style.iconService} src="src/assets/landing-page.png"></img>
              Landing Page</div>
            <div className={style.serviceDetail}>
            <img className={style.iconService} src="src/assets/online-shop.png"></img>
              Tienda en linea</div>
            <div className={style.serviceDetail}>
            <img className={style.iconService} src="src/assets/responsivelineal.png"></img>
              Diseño responsive</div>
            <div className={style.serviceDetail}>
              <img className={style.iconService} src="src/assets/support.png"></img>
              Mantenimiento y soporte tecnico</div>
          </div>
          <div className={style.descriptionServices}>
          <h2 className={style.titleServices}>Nuestros servicios</h2>
          <h4 className={style.subtitleServices}>Estos son solo algunos ejemplos de los servicios que ofrecemos. Podemos adaptarnos a tus necesidades específicas y ofrecer soluciones personalizadas para alcanzar tus objetivos en línea.</h4>
          <button className={style.buttonContact}>Quiero hablar con un asesor</button>
          </div>
        </div>
      </div>
      <div className={style.view2}>
        {/* <h2 className={style.titleSection}>Contactanos</h2> */}
        <img className={style.bannerContact} src={Contact}></img>
        <h3 className={style.titleContact}>¡Habla con nuestra asesora y empecemos a trabajar!</h3>
        <a style={{textDecoration:"none"}} target="_blank" href="https://wa.me/message/XIQJNGRQG35XE1"><button className={style.btnContact}>Contacto</button></a>
      </div>
    </>
  );
};

export default Landing;
