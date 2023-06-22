import Link from 'next/link'
import './page.css'

export default function Repertorio(){
    return(
        <section id="repertorio" style={{paddingTop: 50 + "px"}}>
            <div className="inside">
                <div className="repertorio-container">            
                    <div className='repertorio-lists'>
                        <h1 className='repertorio-title'>Repertorio para el ciclo de conciertos 2023</h1>

                        <h2 className='repertorio-subtitle' style={{textDecoration: 'underline'}}>Renacimiento Español</h2>
                        <ul className='repertorio-lists'>
                            <li className='repertorio-item'>La mi Sola - Juan Ponce (1480-1521) </li>
                            <li className='repertorio-item'>Por unos Puertos - Antonio de Ribera (s. XVI)</li>
                            <li className='repertorio-item'>Mas Vale Trocar - Juan del ENCINA (1469-1530)</li>
                            <li className='repertorio-item'>De los Álamos - Juan Vásquez (c.1500-c.1560)</li>
                            <li className='repertorio-item'>Mayoral… Dile que - Pedro Juan de Sanabria</li>
                            <li className='repertorio-item'>Huyd, O Ciegos amadores - Francisco Guerrero</li>
                            <li className='repertorio-item'>Que  Farem del pobre Joan - Mateo Flecha</li>
                            <li className='repertorio-item'>Teresica Hermana - Mateo Flecha</li>
                        </ul>

                        <h2 className='repertorio-subtitle' style={{textDecoration: 'underline'}}>RENACIMIENTOS INGLÉS</h2>
                        <ul className='repertorio-lists'>
                            <li className='repertorio-item'>Come Again - John Dowland</li>
                            <li className='repertorio-item'>Adieu Sweet Amarillis - John Wilbye</li>
                            <li className='repertorio-item'>About the Maypole - Thomas Morley</li>
                        </ul>

                        <h2 className='repertorio-subtitle' style={{textDecoration: 'underline'}}>RENACIMIENTO FRANCÉS</h2>
                        <ul className='repertorio-lists'>
                            <li className='repertorio-item'>Il est bel et Bon - Pierre Passereau</li>
                            <li className='repertorio-item'>Ho le Vilain - Pierre Certon</li>
                            <li className='repertorio-item'>Au Joly Jeu - Clément Janequin</li>
                            <li className='repertorio-item'>Les chant des oiseaux - Clément Janequin</li>
                        </ul>
                    </div>

                    <h2 className='repertorio-subtitle'>¿Querés ver más de nosotros?</h2>
                    <span className='repertorio-subtitle'>Podés conocer más del Maestro Jorge Neme y su trabajo haciendo click <Link class="link" target="_blank"  href="https://www.youtube.com/@joredne">en este enlace</Link></span>
                    
                </div>
                
            </div>
        </section>
    )
}