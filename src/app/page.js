import './page.css'
import Image from 'next/image'
import camerata1 from "./camerata1.png"
import camerata2 from "./camerata2.png"
import camerata3 from "./camerata3.png"
import camerata4 from "./camerata4.png"
import director1 from "./director1.jpeg"
import director2 from "./director2.jpeg"
import 'normalize.css'
import Link from 'next/link'

const src = "https://www.youtube.com/embed/vx3XV1im3Wk";

const Video = () => {
  return (
    <iframe
      width="100%"
      height="715"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
      allow="autoplay"
      style={{'display': 'flex'}}
    />
  );
};


export default function Home() {
  return (
    <section>
      <section id='main-banner' className='section'>
        <div className="inside">
          <div style={{'display': 'flex', 'justifyContent': 'center'}}>
            <div className='title-container'>
              <h1 className='main-title'>Camerata Vocalis Buenos Aires</h1>
              <h2 className='main-subtitle'>La vida hecha canto</h2>
            </div>
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
              <Video/>
            </div>

            <div className='about-subcontainer'>
              <h2 className='about-title'>El Maestro Jorge Eduardo Neme</h2>
              <div className='nopadding-container'>
                <div className="about-flex">
                  <p className='about-text-side'>
                    El Maestro Jorge Eduardo Neme es un destacado músico argentino con una amplia 
                    trayectoria en la dirección coral. Comenzó su carrera en Santiago del Estero 
                    como miembro del Coro de Cámara de la UNSE bajo la dirección del Maestro Franklin 
                    Ponce en 1979. Posteriormente, fundó en 1980 el Coro de la UCSE, el cual dirigió 
                    de manera ininterrumpida hasta 1989, recibiendo la guía y mentoría del Maestro Ponce.
                    En 1984, obtuvo el reconocimiento al ganar un concurso para fundar y dirigir el 
                    Coro Municipal de Santiago del Estero. Luego, en 1989, se trasladó a la 
                    Ciudad Autónoma de Buenos Aires (CABA) y comenzó a dirigir varios coros en la 
                    capital argentina.
                    Para ampliar su formación y habilidades, ingresó al Conservatorio Manuel de Falla en 1991, 
                    donde en 1994 obtuvo el título de Profesor Artístico de música con especialización 
                    en Dirección Coral. En 1997, se graduó nuevamente con el título de Profesor Superior 
                    de música con especialización en Dirección Coral, obteniendo la medalla de oro accediendo 
                    al concurso por su promedio mayor de 9.
                  </p>
                  <Image className="about-img" src={director2} alt="Jorge Neme"/>
                </div>
                <p className='about-text-side'>
                  El Maestro Neme ha llevado su arte a diversos escenarios en la ciudad de Buenos Aires, 
                  provincia de Buenos Aires, el interior del país y también a nivel internacional. 
                  Entre sus numerosas presentaciones destacadas, se incluyen lugares emblemáticos como 
                  el Teatro Colón, la Catedral de Buenos Aires, la Biblioteca Nacional y la Aula Magna 
                  de la Facultad de Derecho. Además, ha dirigido en distintas Basílicas, Iglesias, parroquias 
                  y templos de diversas religiones, así como en teatros importantes como el 
                  Teatro Independencia de Mendoza, el Teatro San Martín de Córdoba, el Teatro Juan de 
                  Vera en Corrientes y el Teatro Auditorium Centro Provincial de Mar del Plata.
                  La trayectoria del Maestro Neme está marcada por su dedicación, excelencia artística y 
                  amplia experiencia en la dirección de coros, dejando un legado musical significativo en Argentina.
                </p>
                <div className='nopadding-container'>
                  <Image className="about-img-big" src={director1} alt="Jorge Neme en un dia de ensayo"/>
                  <span className="img-subtext">
                    Jorge Neme junto a los ex integrantes de Nueve de Cámara, conjunto vocal dirigido por el 
                    Dir. Carlos López Puccio, durante el homenaje realizado el 02/09/23.
                  </span>
                </div>
              </div>
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
            <h2 className='repertorio-subtitle'>¿Querés ver más de Camerata?</h2>
            <span className='repertorio-subtitle'>
              Podés conocer más del Maestro Jorge Neme y su trabajo haciendo click 
              <Link className="link" target="_blank"  href="https://www.youtube.com/@cameratavocalisbuenosaires"> en este enlace</Link>
            </span>
          </div>
        </div>
      </section>
    </section>
  )
}
