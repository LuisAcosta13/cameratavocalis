"use client";

import Link from 'next/link'
import './page.css'

export default function Repertorio(){

    function toggleMenu(id) {
        const menu = document.getElementById(id)
        
        //const otherMenus = document.querySelectorAll('.text:not(#'+id+')')

        // otherMenus.forEach(menu => {
        //   menu.classList.remove('display')
        // });

        menu.classList.toggle('display')
    }

    return(
        <section id="repertorio" style={{paddingTop: 50 + "px"}}>
            <div className="inside">
                <div className="repertorio-container">            
                    <div className='repertorio-lists'>
                        <h1 className='repertorio-title'>Repertorio para el homenaje al conjunto vocal Nueve de Cámara</h1>
                        <span className="repertorio-undertitle">¡Hacé click en cada obra para conocer más!</span>

                        <h2 className='repertorio-subtitle' style={{textDecoration: 'underline'}}>Renacimiento Español</h2>
                        <ul className='repertorio-lists'>
                            <li className='repertorio-item' onClick={() => toggleMenu('1')}>
                                La mi Sola - Juan Ponce (1480-1521)
                                <div id="1" className='text'>
                                    Inspirada en la obra “Cárcel de Amor” y escrita por Diego de San Pedro (1437-1498?aprox.), 
                                    narra la historia de Loreano, hijo del Duque Guersio y de la Duquesa Coleria, que se enamora de Laureola, 
                                    hija del Rey Gaulo, quien apresa a Loreano en la cárcel de Amor por intentar estar con su hija. 
                                    Finalmente, el rey convence a Laureola de que Loreano no es buen partido y este, en vez de enfadarse, la comprende, 
                                    ya que la ama realmente, a pesar de la decisión de la dama.    
                                </div> 
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('2')}>
                                Por unos Puertos - Antonio de Ribera (s. XVI)
                                <div id='2' className='text'>
                                    Inspirado en un romance de Juan del Encina, narra la desdicha de un caballero 
                                    que ha enloquecido a causa de un desengaño amoroso. El hombre despechado deja su villa 
                                    y lleva una vida semisalvaje y solitaria en lo más áspero y cerrado de Sierra Morena.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('3')}>
                                Mas Vale Trocar - Juan del ENCINA (1469-1530)

                                <div id='3' className='text'>
                                    Esta obra forma parte del llamado Cancionero de Palacio (1474-1516), 
                                    alojado en la Biblioteca del Palacio Real de Madrid, reúne más de cuatrocientas composiciones 
                                    de diversos autores y de variada temática (religiosa, caballeresca, amorosa). 
                                    La polifonía de la obra  es totalmente vertical, todas las voces cantan la letra al mismo tiempo, 
                                    es lo que entendemos como textura homofónica, aquí cobra su sentido, si tenemos en cuenta que el compositor, 
                                    lo que quiere, es destacar el texto, en una época en la que se exaltan los valores humanos de la razón, 
                                    el amor y la belleza.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('4')}>
                                De los Álamos - Juan Vásquez (c.1500-c.1560)

                                <div id='4' className='text'>
                                    Villancico (1) basado en una melodía popular renacentista. 
                                    La composición se desarrolla con un contrapunto de gran agilidad, 
                                    que alude constantemente al tema principal, el encuentro de dos amantes, 
                                    a la sombra de los alamos. (1)Villancico: Originalmente era una canción profana, 
                                    de origen popular y temática variada. Era cantado por los 'villanos', habitantes de las villas, 
                                    de ahí el nombre de villancico. Posteriormente quedó asociado a lo religioso
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('5')}>
                                Mayoral… Dile que - Pedro Juan de Sanabria

                                <div id='5' className='text'>
                                    Villancico a tres voces de temática pastoril, relata la historia de un pastor principal o Mayoral, 
                                    que  por estar profundamente dormido, no atiende los reclamos de un tal Pedro Guirao.
                                </div>    
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('6')}>
                                Huyd Huyd, O Ciegos Amadores - Francisco Guerrero

                                <div id='6' className='text'>
                                    Esta obra es un madrigal polifónico popular, escrito en castellano, 
                                    advierte sobre las vicisitudes del amor, las voces van entrando de una en una. 
                                    La melodía es sencilla y de un estilo casi sacro.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('7')}>
                                Que  Farem del pobre Joan - Mateo Flecha

                                <div id='7' className='text'>
                                    Escrita en idioma catalán, narra la desventura de un hombre, Joan, 
                                    que ha sido abandonado por su mujer, y desesperado la busca por el vecindario, 
                                    desconsolado, retorna a su casa para consolar a sus hijos, que lloran la ausencia de su madre. 
                                    La canción termina con un fuerte reproche a la conducta de la mujer.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('8')}>
                                Teresica Hermana - Mateo Flecha

                                <div id='8' className='text'>
                                    Este villancico hace alusión a la propuesta de alguien que pretende a Teresica, 
                                    con la intención de compartir una aventura amorosa. En respuesta, Teresica muestra su temor por el riesgo de un embarazo. 
                                    El final no parece ser muy optimista para ese encuentro nocturno de la pretendida, y ahora sorprendida Teresica.
                                </div>
                            </li>
                        </ul>

                        <h2 className='repertorio-subtitle' style={{textDecoration: 'underline'}}>RENACIMIENTO INGLÉS</h2>
                        <ul className='repertorio-lists'>
                            <li className='repertorio-item' onClick={() => toggleMenu('9')}>
                                Come Again - John Dowland

                                <div id='9' className='text'>
                                    Las canciones de John Dowland están asociadas con la melancolía Británica de esa época, 
                                    por influencia de la poesía del italiano  Petrarca (1304-1374), y que tratan en general, 
                                    a las quejas del amante no correspondido. Esta canción, cuyo título hace referencia al primer verso, 
                                    fue compuesta en 1597 y revisada en 1617, y concebida para ser cantada y acompañada por Laúd, posteriormente, 
                                    comenzó a ser interpretada como madrigal por un grupo vocal.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('10')}>
                                Adieu Sweet Amarillis - John Wilbye

                                <div id='10' className='text'>
                                    Amaryllis, era una ninfa de la antigua Grecia. El personaje al que se refiere este madrigal, 
                                    parece ser la protagonista del poema pastoral "Il Pastor Fido" (El Pastor fiel), 
                                    de Gian Battista Guarini (1538-1612). En un momento de la obra, Amarillys es condenada a ser sacrificada a los dioses, 
                                    y Mirtilo se ofrece en su lugar. Ese momento de despedida de los amantes, con un repetido contrapunto de adioses, 
                                    es al que hace referencia el madrigal de Willbye.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('11')}>
                                About the Maypole - Thomas Morley

                                <div id='11' className='text'>
                                    La danza del árbol de mayo es un ritual de primavera que se celebra hace mucho tiempo en Europa. 
                                    Por lo general, se celebra el 1 de mayo , la costumbre popular se realiza danzando y cantando alrededor de un poste, 
                                    adornado con flores y cintas para simbolizar un árbol, con la esperanza de obtener una gran cosecha.
                                </div>
                            </li>
                        </ul>

                        <h2 className='repertorio-subtitle' style={{textDecoration: 'underline'}}>RENACIMIENTO FRANCÉS</h2>
                        <ul className='repertorio-lists'>
                            <li className='repertorio-item' onClick={() => toggleMenu('12')}>
                                Il est bel et Bon - Pierre Passereau
                            
                                <div id='12' className='text'>
                                    Esta chanson está escrita a cuatro voces, que son rápidas, rítmicas y ligeras. 
                                    Un recurso muy requerido en el Renacimiento es la onomatopeya, y en este caso, 
                                    también recurre a la homorritmia (todas las voces cantan al mismo ritmo), sobre todo en los finales de frase.
                                    La obra está compuesta como un estribillo que se repite entre dos coplas. 
                                    Los dos se repiten en contrapunto entre las cuatro voces, una tras otra. 
                                    Acaba con una onomatopeya del cloqueo de las gallinas.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('13')}>
                                Ho le Vilain - Pierre Certon

                                <div id='13' className='text'>
                                    Certon, fue un compositor del Renacimiento que influyó  en el desarrollo tardío de la canción francesa. 
                                    En esta obra refleja la manifestación de los pueblerinos de aprehender al villano que se está escapando. 
                                    Con una mezcla hábil de variaciones homofónicas y polifónicas, cambiando el número, y registro de las voces, 
                                    que cantan en cualquier tiempo, manteniendo una ligereza, y un elemento rítmico, propio de la lengua francesa.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('14')}>
                                Au Joly Jeu - Clément Janequin

                                <div id='14' className='text'>
                                    Esta es una  obra de carácter descriptivo del compositor francés, en este caso se refiere a los vaivenes del baile 
                                    y con sonoridades bastantes sugestivas a los juegos en pareja.
                                </div>
                            </li>
                            <li className='repertorio-item' onClick={() => toggleMenu('15')}>
                                Les chant des oiseaux - Clément Janequin
                                
                                <div id='15' className='text'>
                                    Este celebre compositor, fue un maestro de la canción polifónica. 
                                    Le Chant des oyseaux, está escrito a 4 voces a cappella y es un testimonio de simplicidad adquirida 
                                    por la polifonía y también de la música descriptiva. El principal recurso utilizado, 
                                    es el de la imitación onomatopéyica de distintos cantos de pájaros;  
                                    la reanudación de pequeños fragmentos, voz por voz. Con respecto a estructura total de la obra, 
                                    está dividida en 4 secciones y en cada sección imita a distintas aves, 
                                    como por ejemplo en la segunda sección es nombrado e imitado el jilguero de París.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <h2 className='repertorio-subtitle'>¿Querés ver más de Camerata?</h2>
                    <span className='repertorio-subtitle'>Podés conocer más del Maestro Jorge Neme y su trabajo haciendo click <Link className="link" target="_blank"  href="https://www.youtube.com/@cameratavocalisbuenosaires">en este enlace</Link></span>
                    
                </div>
                
            </div>
        </section>
    )
}