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
          {/* <h1 className={style.logoName}>Code and Coffe</h1> */}
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
            <h4 className={style.benefitSubtitle}>Para que te confies</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Somos expertos en el desarollo, te garantizamos tu página en menos de una semana</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/approved64.png"></img>
            <div>
            <h3 className={style.benefitName}>Garantia</h3>
            <h4 className={style.benefitSubtitle}>Para que te confies</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Somos expertos en el desarollo, te garantizamos tu página en menos de una semana</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/responsive.png"></img>
            <div>
            <h3 className={style.benefitName}>Diseño responsive</h3>
            <h4 className={style.benefitSubtitle}>Para todo dispositivo</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Somos expertos en el desarollo, te garantizamos tu página en menos de una semana</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/rising.png"></img>
            <div>
            <h3 className={style.benefitName}>Evolución continua</h3>
            <h4 className={style.benefitSubtitle}>Para que te confies</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Somos expertos en el desarollo, te garantizamos tu página en menos de una semana</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/technology.png"></img>
            <div>
            <h3 className={style.benefitName}>Tecnologias</h3>
            <h4 className={style.benefitSubtitle}>Para que te confies</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Somos expertos en el desarollo, te garantizamos tu página en menos de una semana</p>
            </div>
            <div className={style.benefitContainer}>
              <div className={style.benefitHeader}>
            <img className={style.benefitImg} src="src/assets/attention.png"></img>
            <div>
            <h3 className={style.benefitName}>Atención</h3>
            <h4 className={style.benefitSubtitle}>Para que te confies</h4>
            </div>
            </div>
            <p className={style.benefitDesc}>Somos expertos en el desarollo, te garantizamos tu página en menos de una semana</p>
            </div>
          </div>
      </div>

      <div className={style.view4}>
        <h2 className={style.titleSection}>Nuestros servicios</h2>
        {/* <div className={style.planesContainer}>
          <div className={style.planBasic}>
            <h3 className={style.titlePlan}>Basico</h3>
            <h4 className={style.pricePlan}>99$</h4>
            <ul className={style.ul}>
            <li className={style.li}>Diseño básico con plantillas</li>
            <li className={style.li}>Pocas páginas integradas</li>
            <li className={style.li}>SEO básico y compatible con dispositivos móviles</li>
            <li className={style.li}>Formulario de contacto básico</li>
            <li className={style.li}>Configuración de alojamiento y dominio</li>
            <li className={style.li}>Soporte técnico limitado</li>
            </ul>
          </div>
          <div className={style.planAdvanced}>
          <h3 className={style.titlePlan}>Avanzado</h3>
            <h4 className={style.pricePlan}>149$</h4>
            <ul className={style.ul}>
            <li className={style.liAdvanced}>Diseño avanzado y personalizado</li>
            <li className={style.liAdvanced}>Mayor número de páginas y secciones</li>
            <li className={style.liAdvanced}>Funcionalidad y características especiales</li>
            <li className={style.liAdvanced}>SEO en todas las páginas</li>
            <li className={style.liAdvanced}>Integración de CMS</li>
            <li className={style.liAdvanced}>Configuración de alojamiento y dominio</li>
            <li className={style.liAdvanced}>Soporte técnico extendido</li>
            </ul>
          </div>
          <div className={style.planPro}>
          <h3 className={style.titlePlan}>Profesional</h3>
            <h4 className={style.pricePlan}>249$</h4>
            <ul className={style.ul}>
            <li className={style.li}>Diseño exclusivo</li>
            <li className={style.li}>Experiencia de usuario excepcional</li>
            <li className={style.li}>Número ilimitado de páginas y secciones</li>
            <li className={style.li}>Características y soluciones a medida</li>
            <li className={style.li}>Configuración de alojamiento y dominio</li>
            <li className={style.li}>Soporte técnico prioritario</li>
            </ul>
          </div>
        </div> */}
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
