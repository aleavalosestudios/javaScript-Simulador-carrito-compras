const carrito = document.querySelector('#carrito');                         //Seleccion de etiqueta <div id="carrito">
const contenedorCarrito = document.querySelector('#lista-carrito tbody');   //Seleccion de cuerpo de la tabla en Carrito // <tbody></tbody>
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');         //Seleccion Boton basiar carrito <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
const listaCursos = document.querySelector('#lista-cursos');                //Seleccion de Seccion de cursos a seleccionar

let articulosCarrito = []; //Este Arreglo almacenara objetos, cuyos atributos son los datos de los cursos, que se seleccionen para agregar al carrito

cargarEventListeners();

function cargarEventListeners() {                                           //Esta Funcion detectara el evento click del mouse en cualquier lugar
    //Cuando se agrega un curso presionando Agregar al Carrito              //de la etiqueta con id = #lista-cursos, guardando la informacion del
    listaCursos.addEventListener('click',agregarCursos);                    //lugar donde se realizo el click.

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {                      //evento con funcion anonima, es un codigo corto por eso no realizamos
        articulosCarrito = [];                                              //otra funcion. Se resetea el arreglo 

        limpiarHtml();                                                      //Se limpia el codigo HTML del contenedor Carrito
    })

}


//Funciones

//Eliminar
function eliminarCurso(evt){
    if(evt.target.classList.contains('borrar-curso')){
        const cursoID = evt.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoID);
        carritoHTML();
    }
}


//agregar carrito
function agregarCursos(evt) {
    evt.preventDefault();
    if( evt.target.classList.contains('agregar-carrito')){                //se condiciona a que el lugar donde demos click contenga la clase 'agregar-carrito'
        const cursoSeleccionado = evt.target.parentElement.parentElement; /*parentElement, nos ubica en la etiqueta padre del objeto que seleccionamos
                                                                            el padre de cada Curso, en la seccion de curso, es .card y como
                                                                            cada boton esta al final de cada card, debemos develvernos hacia atras
                                                                            Esto nos permitira guardar todo el codigo html 
                                                                            en la variable cursoSeleccionado*/
        leerdatosCurso(cursoSeleccionado);
    }
}

/*leer el contenido del html al que le dimos click
 y extraer la informacion del curso
*/

function leerdatosCurso(cursoSeleccionado){             /*Esta funcion recive el curso seleccionado en donde podremos extraer los atributos */
    
    //Crear un objeto con el contenido del curso actual
    const infoCurso ={
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisar si existe el elemento en el carrito
    const existe = articulosCarrito.some(curso =>{                  //some pertmite buscar y encontrar un elemento
        return curso.id === infoCurso.id                            //dentro del arreglo con una funcion
    });

    if(existe){
        //actualizamos cantidad
        const cursos = articulosCarrito.map( curso => {             //map permite crear un nuevo arreglo y modificar lo que necesitemos
            if(curso.id === infoCurso.id){                          //otros usos de map es que permite crear atributos nuevos a un objeto
                curso.cantidad++                                    //dentro del arreglo sin modificar el objeto original
                return curso; //retorna el objeto actualizado
            }else{
                return curso; //retorna el objeto sin actualizar
            }
        });

        articulosCarrito = [...cursos]                              //se almacenan los cursos segun la condicion anterior

    }else{
        //agregamos el curso carrito
        //Agrega elementos a carrito
        articulosCarrito = [...articulosCarrito , infoCurso]; //En este codigo usamos una copia del arreglo articulosCarrito, ya que asi nos aseguramos
                                                             //de no perder informacion e ingresamos el curso en dode se hizo click
    }
 
    carritoHTML()                                           //Se debe crear el codigo HTML para el contenedor carrito 

    console.log(articulosCarrito)
}

//Muestra el Carrito de compras en el html

function carritoHTML(){

    //limpiar el html                           
    limpiarHtml();                             /*se debe limpiar el codigo html creado en el foreach de articulosCarrito, ya que al agregar
                                                un nuevo elemento repitira la informacion anterior mas la nueva, 
                                                y solo queremos que se muestre una sola vez
                                                */
    //recorre el carrito y genera HTML
    articulosCarrito.forEach( curso =>{

        //const {imagen,titulo,precio, cantidad, id} = curso;       //se puede desestructurar y eliminar curso.imagen
                                                                    // y dejar solo imagen
        
        const row = document.createElement('tr');                   //createElemente('tr') nos permite crear un elemento table row
                                                                    //innerHTML nos permite codificar html dentro de la etiqueta tr,
                                                                    //En este caso codificamos valore de cada celda de la tabla contenedorcarrito 
        row.innerHTML = `                                           
            <td>
                <img src = "${curso.imagen}" width = "100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
            
            <td>
                <a href = "#" class = "borrar-curso" data-id = "${curso.id}"> X </a>
            </td>

        `;

        //Agregar el HTML del carrito en el tbody del carrito
        contenedorCarrito.appendChild(row)

    })
}

function limpiarHtml(){

    // //Forma lenta
    // contenedorCarrito.innerHTML = ''

                                                                            //const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    while(contenedorCarrito.firstChild){                                    //Mientras exista un hijo en el tbody de contenedor carrito
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)         //Se elimina el HTML ubicado en la primera posicion del contenedor
    }                                                                       //carrito
}                                                                                                                                                    
    