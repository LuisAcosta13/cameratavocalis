import './page.css'
import Image from 'next/image'
import camerata1 from "./camerata1.png"
import camerata2 from "./camerata2.png"
import camerata3 from "./camerata3.png"
import camerata4 from "./camerata4.png"
import 'normalize.css'

export default function Home() {
  return (
    <section>
      <section id='main-banner' className='section'>
        <div className="inside">
          <div className='title-container'>
            <h1 className='main-title'>Camerata Vocalis Buenos Aires</h1>
            <h2 className='main-subtitle'>La vida hecha canto</h2>
          </div>
        </div>
      </section>

      <section id='main-about' className='section'>
        <div className='inside'>
          <div className='main-about'>
            <h2 className='about-title'>Sobre el coro</h2>
            <div className='about-container'>
              
              <p className='about-text'>
                Camerata Vocalis Buenos Aires es un coro fundado en octubre de 1989 
                por padres de alumnos del Instituto Nuestra Señora de Lujan de Villa Pueyrredon 
                en CABA, bajo la dirección del Maestro Jorge Eduardo Neme, quien continúa 
                liderándolo en la actualidad. Con el tiempo, se sumaron egresados del 
                Instituto que se habían formado en el coro del mismo, vecinos y 
                varias personas interesadas en el canto coral.
              </p>
              <Image className="about-img-big" src={camerata1} alt="camerata"/>
            </div>
            
            <div className='about-subcontainer'>
              <h2 className='about-title'>Un poco de historia...</h2>

              <div>
                <span className='text-img-container'>
                  <p className='about-subtext'>
                    A lo largo de sus 34 años de existencia, Camerata Vocalis Buenos Aires 
                    ha realizado numerosos conciertos en la Ciudad de Buenos Aires y en el AMBA, 
                    presentándose en reconocidos escenarios como la Catedral de Buenos Aires, 
                    templos de la ciudad, Teatro Colón, Biblioteca Nacional y 
                    el Teatro General San Martín, así como en diferentes centros culturales. 
                    Además, ha participado en diversos encuentros corales.
                  </p>
                  <Image src={camerata4} alt="camerata" className='about-img'/>
                </span>

                <span className='text-img-container'>
                  <Image src={camerata2} alt="camerata" className='about-img'/>
                  <p className='about-subtext'>
                    El coro ha llevado su música a distintas ciudades del interior del país, 
                    como Mar del Plata, Villa Gesell, Santa Rosa, Villa General Belgrano y 
                    Santiago del Estero, en giras que han contribuido a difundir su arte vocal. 
                    Su repertorio abarca un amplio espectro, desde los inicios del Renacimiento 
                    hasta la actualidad, incluyendo obras clásicas, populares y folklóricas 
                    tanto argentinas como universales.
                  </p>
                </span>

                <span className='text-img-container'>
                  <p className='about-subtext'>
                    Camerata Vocalis Buenos Aires ha sido una fuente de inspiración 
                    para vocaciones musicales, generando excelentes músicos a lo largo de su 
                    trayectoria. Con más de 1.000 actuaciones en su historial, 
                    el coro ha dejado una huella significativa en la escena musical, 
                    llevando su arte a diversos públicos y contribuyendo al 
                    enriquecimiento cultural de la comunidad.
                  </p>
                  <Image src={camerata3} alt="camerata" className='about-img'/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
