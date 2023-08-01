import './page.css'

export default function Conciertos(){
    return(
        <section id="conciertos" style={{paddingTop: 50 + "px"}}>
            <div className="inside">
                <div className='conciertos-container'>
                    <h2 className='conciertos-title'>Esto es lo que se viene en este 2023</h2>
                    <ul className='conciertos-calendar'>
                        {/* <li className='conciertos-item'><strong>24/06: </strong>Parroquia Corazón de Jesus de Villa Pueyrredon (20 hs)</li> */}

                        <li className='conciertos-item'><strong>12/08: </strong> 
                            <div className="conciertos-item-container">
                                <span>Parroquia San Cayetano</span>
                                <span className="conciertos-subitem">Vidal 1745, CABA - 20.30 hs</span>
                            </div>
                        </li>

                        <li className='conciertos-item'><strong>19/08: </strong>
                            <div className="conciertos-item-container">
                                <span>Basílica San Nicolás de Bari</span>
                                <span className="conciertos-subitem">Santa Fe 1352, CABA - 17 hs</span>
                            </div>
                        </li>

                        <li className='conciertos-item'><strong>26/08: </strong>
                            <div className="conciertos-item-container">
                                <span>Parroquia Corazón de Jesus de Villa Pueyrredon</span>
                                <span className="conciertos-subitem">Av. General Paz 5370, CABA - 20 hs</span>
                            </div>
                        </li>

                        <li className='conciertos-item'><strong>02/09: </strong>
                            <div className="conciertos-item-container">
                                <span>Concierto Homenaje a los integrantes del 9 de Cámara en la Basílica San Nicolás de Bari, 
                                con entrega del Premio Red Coral al Maestro Carlos Lopez Puccio por su trayectoria.</span>
                                <span className="conciertos-subitem">Av. Sta. Fe 1352, CABA - 20 hs</span>
                            </div>
                        </li>
                        
                        {/* <li className='conciertos-item'><strong>30/09: </strong>Usina del Arte</li> */}
                        
                        <li className='conciertos-item'><strong>09/12: </strong>
                            <div className="conciertos-item-container">
                                <span>Usina del Arte</span>
                                <span className="conciertos-subitem">Agustín R. Caffarena 1, CABA - Horario a confirmar</span>
                            </div>
                        </li>

                    </ul>
                </div>          
            </div>
        </section>
    )
}