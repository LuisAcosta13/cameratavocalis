import './page.css'

export default function Conciertos(){
    return(
        <section id="conciertos" style={{paddingTop: 50 + "px"}}>
            <div className="inside">
                <div className='conciertos-container'>
                    <h2 className='conciertos-title'>Esto es lo que se viene en este 2023</h2>
                    <ul className='conciertos-calendar'>
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