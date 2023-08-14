import imagen1 from './Imagenes/Monitor.jpg';
import imagen2 from './Imagenes/Mouse.jpg';
import imagen3 from './Imagenes/mother.jpg';
import imagen4 from './Imagenes/Teclado.jpg';
import imagen5 from './Imagenes/Luz Led.jpg';
import imagen6 from './Imagenes/bateria.jpg';
import imagen7 from './Imagenes/auriculares.jpg';
import imagen8 from './Imagenes/fuente.jpg';
import imagen9 from './Imagenes/procesador.jpg';
import imagen10 from './Imagenes/ram.jpg';

const productos = [
    {id: 1, nombre:"Monitor", descripcion: "Monitor de 32 pulgadas resolución de 1920 x 1080", precio: "$30200", imagen:imagen1},
    {id: 2, nombre:"Mouse", descripcion:"El mouse gamer Xtrike Me GM-216 es ideal para aquellos que buscan una experiencia de juego cómoda y eficiente, ya que cuenta con un cable de 1.5 metros de largo que te permitirá moverte libremente mientras juegas. Además, su rueda de desplazamiento te facilitará la navegación por tus menús y opciones de juego.", precio: "$3000", imagen:imagen2},
    {id: 3, nombre:"Placa Madre",descripcion:"La estética ordenada de la Strix B760-A no fue una distracción al diseñar la entrega de energía y los arreglos térmicos de esta placa base. Obtendrás una experiencia de juego completa y algo más con esta bestia.", precio: "$75000", imagen:imagen3},
    {id: 4, nombre:"Teclado", descripcion:"Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.", precio: "$3000", imagen:imagen4},
    {id: 5, nombre:"Luz Led",descripcion:"Lámpara de luz LED de protección ocular inteligente para quienes trabajan y estudian con una computadora portátil. Ilumina el teclado y zonas cercanas a la Notebook en un ángulo de 45°.", precio: "$2500", imagen:imagen5},
    {id: 6, nombre:"Bateria",descripcion: "Bateria Para HP JC04 JC03 TPN-C130 15-BS000", precio: "$6000", imagen:imagen6},
    {id: 7, nombre:"Auriculares",descripcion:"Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.", precio: "$16000", imagen:imagen7},
    {id: 8, nombre:"Fuente", descripcion:"Con la fuente de alimentación Sentey HBP700-GS podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes.", precio: "$10000", imagen:imagen8},
    {id: 9, nombre:"Procesador",descripcion:"En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.", precio: "$55000", imagen:imagen9},
    {id: 10, nombre:"Ram", descripcion:"Con su tecnología DDR4, mejorará el desempeño de tu equipo, ya que opera en 3 y 4 canales, generando mayor fluidez y velocidad en la transferencia de datos. ¡Optimizá al máximo el rendimiento de tu ordenador!",precio: "$15000", imagen:imagen10},
];

export default productos;