import './page.css'

export default function Conciertos(){
    return(
        <section id="conciertos" style={{paddingTop: 50 + "px"}}>
            <div className="inside">
                <div className='conciertos-container'>
                    <h2 className='conciertos-title'>Esto es lo que se viene en este 2023</h2>
                    <ul className='conciertos-calendar'>
                        <li className='conciertos-item'><strong>24/06: </strong>Parroquia Corazón de Jesus de Villa Pueyrredon (20 hs)</li>

                        <li className='conciertos-item'><strong>12/08: </strong>Parroquia San Cayetano</li>

                        <li className='conciertos-item'><strong>19/08: </strong>Basílica San Nicolás de Bari</li>

                        <li className='conciertos-item'><strong>26/08: </strong>Parroquia Corazón de Jesus de Villa Pueyrredon</li>

                        <li className='conciertos-item'><strong>2/09: </strong>Concierto Homenaje a los integrantes del 9 de Cámara en la Basílica San Nicolás de Bari, 
                            con entrega del Premio Red Coral al Maestro Carlos Lopez Puccio por su trayectoria.
                        </li>
                        
                        {/* <li className='conciertos-item'><strong>30/09: </strong>Usina del Arte</li> */}
                        
                        <li className='conciertos-item'><strong>9/12: </strong>Usina del Arte</li>

                    </ul>
                </div>          
            </div>
        </section>
    )
}