const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listacursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){

    listacursos.addEventListener('click',agregarCursos);

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {                      //evento con funcion anonima, es un codigo corto por eso no realizamos
        articulosCarrito = [];                                              //otra funcion. Se resetea el arreglo 

        limpiarhtml();                                                      //Se limpia el codigo HTML del contenedor Carrito
    })

}

function eliminarCurso(evt){
    if(evt.target.classList.contains('borrar-curso')){
        const cursoID = evt.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoID);
        carritoHTML();
    }
}


function agregarCursos(evt){
    evt.preventDefault();
    
    if(evt.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = evt.target.parentElement.parentElement;
        
        leerdatosCurso(cursoSeleccionado);
    }
}

function leerdatosCurso(cursoSeleccionado){

    const infoCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some( curso => {
        return infoCurso.id === curso.id
    });

    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if (infoCurso.id === curso.id){
                curso.cantidad++;
                return curso
            }else{
                return curso
            }
        });
        articulosCarrito = [ ...cursos ];
    }else{
        articulosCarrito = [...articulosCarrito,infoCurso]
    }

    carritoHTML();
}

function carritoHTML(){

    limpiarhtml();

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');

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

        contenedorCarrito.appendChild(row);
    });    
}


function limpiarhtml(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}