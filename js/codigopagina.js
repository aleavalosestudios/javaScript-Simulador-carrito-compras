
// CONTENIDO HEAD
const head = document.querySelector('Head');
const title = document.querySelector('Title');

const meta = document.createElement('Meta');
const link = document.createElement('Link');
const link2 = document.createElement('Link');
const link3 = document.createElement('Link');


head.insertBefore(meta,title);
meta.setAttribute('http-equiv',"X-UA-Compatible");
meta.setAttribute('content',"ie=edge");


title.textContent = 'página con código DOM'

head.appendChild(link);
link.setAttribute('rel','stylesheet');
link.setAttribute('href','css/normalize.css');

head.appendChild(link2);
link2.setAttribute('rel','stylesheet');
link2.setAttribute('href','css/skeleton.css');

head.appendChild(link3);
link3.setAttribute('rel','stylesheet');
link3.setAttribute('href','css/custom.css');

//console.log(head)

//FIN CONTENIDO HEAD


//Contenido body
const body = document.querySelector('Body');

//Contenido header
const header = document.createElement('Header');
const script = document.querySelector('Script');

body.insertBefore(header,script);
header.setAttribute('id','header');
header.classList.add('header');

//CREACION CONTENEDOR PARA IMAGEN LOGO Y CARRITO
const div = document.createElement('Div')
header.appendChild(div);
div.classList.add("container")


const div2 = document.createElement('Div')
div.appendChild(div2);
div2.classList.add("row")

const div2_1 = document.createElement('Div')
div2.appendChild(div2_1);
div2_1.classList.add("four","columns");

//FOTO LOGO
const imglogo = document.createElement('img');
div2_1.appendChild(imglogo);
imglogo.setAttribute('src','img/logo.jpg');
imglogo.setAttribute('id','logo');

//CARRITO DE COMPRAS
const div2_2 = document.createElement('Div');
div2.appendChild(div2_2);
div2_2.classList.add('two','columns','u-pull-right');

const ul = document.createElement('Ul');
div2_2.appendChild(ul);

const li = document.createElement('Li');
ul.appendChild(li);
li.classList.add('submenu');

const imgCarrito = document.createElement('img');
li.appendChild(imgCarrito);
imgCarrito.setAttribute('src','img/cart.png');
imgCarrito.setAttribute('id','img-carrito');

const div2_2_1 = document.createElement('Div');
li.appendChild(div2_2_1)
div2_2_1.setAttribute('id','carrito');

//TABLA CARRITO DE COMPRAS

const tablaCarrito = document.createElement('table')
tablaCarrito.setAttribute('id','lista-carrito');
tablaCarrito.classList.add('u-full-width');

const tablaCarritoHead = document.createElement('thead');

const tr = document.createElement('tr');
const th1 = document.createElement('Th');
th1.textContent = 'Imagen';
const th2 = document.createElement('th')
th2.textContent = 'Nombre'
const th3 = document.createElement('th')
th3.textContent = 'Precio'
div2_2_1.appendChild(tablaCarrito)
th3.textContent = 'Precio'
const th4 = document.createElement('th')
th4.textContent = 'Cantidad'
const th5 = document.createElement('th')
th5.textContent = 'Eliminar'
const vaciarCarritoBtn = document.createElement('A')
vaciarCarritoBtn.setAttribute('href','#');
vaciarCarritoBtn.setAttribute('id','vaciar-carrito');
vaciarCarritoBtn.classList.add('button','u-full-width');
vaciarCarritoBtn.textContent = 'Vaciar Carrito';

const tablaCarritoBody = document.createElement('tbody');

tablaCarrito.appendChild(tablaCarritoHead)
    tablaCarritoHead.appendChild(tr)
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
        tr.appendChild(th4)
        tr.appendChild(th5)
tablaCarrito.appendChild(tablaCarritoBody)

div2_2_1.appendChild(vaciarCarritoBtn);
//FIN HEADER

//#################################PROBANDO OTRAS FORMAS DE ORDENAR

//IMAGEN POST HEADER
const divhero = document.createElement('DIV');
divhero.setAttribute('id','hero');

const divcontainer = document.createElement('div');
divcontainer.classList.add('container');

const divrow = document.createElement('div');
divrow.classList.add('row')

const divsix_columns = document.createElement('DIV');
divsix_columns.classList.add('six','columns');

const divContenido_hero =document.createElement('DIV');
divContenido_hero.classList.add('contenido-hero')

const h2AprendeAlgoNuevo = document.createElement('H2');
h2AprendeAlgoNuevo.textContent = 'Aprende algo nuevo';

const pTodosLosCursos = document.createElement('P');
pTodosLosCursos.textContent = 'Todos los cursos a $15';

const formbusqueda = document.createElement('FORM');
formbusqueda.setAttribute('action','#');
formbusqueda.setAttribute('id','busqueda');
formbusqueda.setAttribute('method','post');
formbusqueda.classList.add('formuario');

const inputbuscador = document.createElement('INPUT');
inputbuscador.classList.add('u-full-width');
inputbuscador.setAttribute('type','text');
inputbuscador.setAttribute('placeholder','¿Que te gustaria Aprender?');
inputbuscador.setAttribute('id','buscador');

const inputsubmit_buscador = document.createElement('INPUT');
inputsubmit_buscador.setAttribute('type','submit');
inputsubmit_buscador.setAttribute('id','submit-buscador');
inputsubmit_buscador.classList.add('submit-buscador');

//UNION IMAGEN POST HEADER

body.insertBefore(divhero,script);
    divhero.appendChild(divcontainer);
        divcontainer.appendChild(divrow);
            divrow.appendChild(divsix_columns);
                divsix_columns.appendChild(divContenido_hero)
                    divContenido_hero.appendChild(h2AprendeAlgoNuevo);
                    divContenido_hero.appendChild(pTodosLosCursos);
                    divContenido_hero.appendChild(formbusqueda);
                        formbusqueda.appendChild(inputbuscador);
                        formbusqueda.appendChild(inputsubmit_buscador);



//CREACION BARRA 

const divbarra = document.createElement('DIV');
divbarra.classList.add('barra');

const divcontainerbarra = document.createElement('DIV');
divcontainerbarra.classList.add('container');

const divrowbarra = document.createElement('DIV');
divrowbarra.classList.add('row');

const divfourcolumsiconoicono1 = document.createElement('DIV');
divfourcolumsiconoicono1.classList.add('four','columns','icono','icono1');

const p2000cursos = document.createElement('P');
const br = document.createElement('br');
const txthtml1 = `20.000 cursos en linea <br> Explora los temas mas recientes`
p2000cursos.innerHTML = txthtml1

const divfourcolumsiconoicono2 = document.createElement('DIV');
divfourcolumsiconoicono2.classList.add('four','columns','icono','icono2');

const pInstructores = document.createElement('P');
const txthtml2 = `Instructores Expertos <br> Aprende condistintos estilos`
pInstructores.innerHTML = txthtml2

const divfourcolumsiconoicono3 = document.createElement('DIV');
divfourcolumsiconoicono3.classList.add('four','columns','icono','icono3');

const pAcceso = document.createElement('P');
const txthtml3 = `Acceso de por vida <br> Aprende a tu ritmo`
pAcceso.innerHTML = txthtml3;

//UNION CREACION BARRA

body.insertBefore(divbarra,script);
    divbarra.appendChild(divcontainerbarra);
        divcontainerbarra.appendChild(divrowbarra);
            divrowbarra.appendChild(divfourcolumsiconoicono1)
                divfourcolumsiconoicono1.appendChild(p2000cursos);
            divrowbarra.appendChild(divfourcolumsiconoicono2);
                divfourcolumsiconoicono2.appendChild(pInstructores);        
            divrowbarra.appendChild(divfourcolumsiconoicono3);
                divfourcolumsiconoicono3.appendChild(pAcceso);


//FIN CREACION BARRA

//Seccion Lista curso

const divlistacursos = document.createElement('DIV');
divlistacursos.setAttribute('id','lista-cursos');
divlistacursos.classList.add('container');

const h1encabezadolistacurso = document.createElement('H1');
h1encabezadolistacurso.setAttribute('id','encabezado');
h1encabezadolistacurso.classList.add('encabezado');
h1encabezadolistacurso.textContent = 'Cursos En Línea';

const divrowlistacurso = document.createElement('DIV');
divrowlistacurso.classList.add('row');

const divrowlistacurso2 = document.createElement('DIV');
divrowlistacurso2.classList.add('row');

const divrowlistacurso3 = document.createElement('DIV');
divrowlistacurso3.classList.add('row');

const divrowlistacurso4 = document.createElement('DIV');
divrowlistacurso4.classList.add('row');


//union SeccionLista Curso

body.insertBefore(divlistacursos,script);
    divlistacursos.appendChild(h1encabezadolistacurso);
    divlistacursos.appendChild(divrowlistacurso);
        divrowlistacurso.appendChild(cardCursos("img/curso1.jpg","HTML5, CSS3, JavaScript para Principiantes","Juan Pedro","1"));
        divrowlistacurso.appendChild(cardCursos("img/curso2.jpg","Curso de Comida Vegetariana","Juan Pedro","2"));
        divrowlistacurso.appendChild(cardCursos("img/curso3.jpg","Guitarra para Principiantes","Juan Pedro","3"));
    divlistacursos.appendChild(divrowlistacurso2)
        divrowlistacurso2.appendChild(cardCursos("img/curso4.jpg","Huerto en tu casa","Juan Pedro","4"));
        divrowlistacurso2.appendChild(cardCursos("img/curso5.jpg","Decoracion con productos de tu hogar","Juan Pedro","5"));
        divrowlistacurso2.appendChild(cardCursos("img/curso1.jpg","Diseño web para principiantes","Juan Pedro","6"));
    divlistacursos.appendChild(divrowlistacurso3)
        divrowlistacurso3.appendChild(cardCursos("img/curso2.jpg","Comida Mexicana para principiantes","Juan Pedro","4"));
        divrowlistacurso3.appendChild(cardCursos("img/curso3.jpg","Estudio Musical en tu casa","Juan Pedro","5"));
        divrowlistacurso3.appendChild(cardCursos("img/curso4.jpg","Cocecha tus propias frutas y verduras","Juan Pedro","6"));
    divlistacursos.appendChild(divrowlistacurso4)
        divrowlistacurso4.appendChild(cardCursos("img/curso5.jpg","Prepara galletas caceras","Juan Pedro","4"));
        divrowlistacurso4.appendChild(cardCursos("img/curso1.jpg","JavaScript Moderno con ES6","Juan Pedro","5"));
        divrowlistacurso4.appendChild(cardCursos("img/curso2.jpg","100 Recetas de Comida Natural","Juan Pedro","6"));

//Crecion de cards con funcion

function cardCursos(dirImagen, infoCard, profesor, id){

    const divfourcolumlistacursos = document.createElement('DIV');
    divfourcolumlistacursos.classList.add('four','columns');

    const divcard = document.createElement('DIV');
    divcard.classList.add('card');

    const imgcard = document.createElement('IMG');
    imgcard.setAttribute('src',dirImagen);
    imgcard.classList.add('imagen-curso','u-full-width')

    const divinfocard = document.createElement('DIV');
    divinfocard.classList.add('info-card');

    const h4card = document.createElement('H4');
    h4card.textContent = infoCard;
    
    const pprofesor = document.createElement('P');
    pprofesor.textContent = profesor;

    const imgestrella = document.createElement('img');
    imgestrella.setAttribute('src','img/estrellas.png');

    const pPrecio = document.createElement('P');
    pPrecio.classList.add('precio')
    pPrecio.textContent = '200'

    const pSpan = document.createElement('P');
    pSpan.classList.add('u-pull-right')
    pSpan.textContent = 15

    const aCard = document.createElement('A');
    aCard.setAttribute('href','#');
    aCard.classList.add('u-full-width','button-primary','button','input','agregar-carrito')
    aCard.setAttribute('data-id',id);
    aCard.textContent = 'Agregar al carrito'

    divfourcolumlistacursos.appendChild(divcard)
        divcard.appendChild(imgcard);
        divcard.appendChild(divinfocard);
            divinfocard.appendChild(h4card);
            divinfocard.appendChild(pprofesor);
            divinfocard.appendChild(imgestrella);
            divinfocard.appendChild(pPrecio)
            pPrecio.appendChild(pSpan);
            divinfocard.appendChild(aCard);

    return divfourcolumlistacursos;
}
//FIN LISTA CURSOA

//CREACION FOOTER

const footer = document.createElement('footer');
footer.setAttribute('id','footer');
footer.classList.add('footer');

const divcontainerfooter = document.createElement('DIV');
divcontainerfooter.classList.add('container');

const divrowfooter = document.createElement('DIV');
divrowfooter.classList.add('row');

//const divfourcolumnsfooter = document.createElement('DIV');
//divfourcolumnsfooter.classList.add('four','columns');

const principal = [
    "Para tu Negocio",
    "Conviértete en Instructor",
    "Aplicaciones Móviles",
    "Soporte",
    "Temas"
];

const secundaria = [
    "Quienes Somos",
    "Empleo",
    "blog"
];

body.insertBefore(footer,script);
footer.appendChild(divcontainerfooter);
    divcontainerfooter.appendChild(divrowfooter);
        divrowfooter.appendChild(navfooter('principal',principal));
        divrowfooter.appendChild(navfooter('secundaria',secundaria));

function navfooter(id,enlaces){

    const divfourcolumnsfooter = document.createElement('DIV');
    divfourcolumnsfooter.classList.add('four','columns');  

    const nav = document.createElement('NAV');
    nav.setAttribute('id',id);
    nav.classList.add('menu');
    
    enlaces.forEach(frase => {
        const a = enlacesNav(frase);
        divfourcolumnsfooter.appendChild(nav)
        nav.appendChild(a)
    })

    return divfourcolumnsfooter;

}        

function enlacesNav(frase){

    const aNav = document.createElement('A');
    aNav.classList.add('enlace');
    aNav.setAttribute('href','#');
    aNav.textContent = frase;

    return aNav;
}




///////////////////////////////////////////////////////////// fin creacion pagina


let articulosCarrito = [];

cargarEventListeners()

function cargarEventListeners(){

   divlistacursos.addEventListener('click',agregarCursos);

   //div con id carrito
   div2_2_1.addEventListener('click',eliminarCurso);

   vaciarCarritoBtn.addEventListener('click',vaciarCarrito); 

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
        precio: cursoSeleccionado.querySelector('.u-pull-right').textContent,
        cantidad: 1,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id')
    }

    const existe = articulosCarrito.some(curso =>{
        return curso.id === infoCurso.id;
    });


    if(existe){
        //Creamos una copia de articulos carrito en una variable de nombre cursos.
        //para no alterar articulos carrito original, creamos una copia con map
        //(recordar que map crea una copia de un arreglo), si encuantra una curso
        //con el mismo id del curso que estamos agregando, modificara la cantidad
        //y retornara el curso cambiado agregandolo al arreglo cursos, si no,
        //devolvera el curso sin cambiar y lo agregara al arreglo cursos.
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });

        //Aqui se crea una copia de cursos y se reemplaza el contenido
        //de articulosCaarito
        articulosCarrito = [...cursos];

    //si no encuentra un curso con el mismo id de infocurso, se agregara
    //a articulos Carrito
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    carritoHTML();

}

function carritoHTML(){

    //limpiar el html antiguo para aparecer el nuevo
    limpiarHtml();
    //recorrer articulos carrito y crear html por cada
    //curso
    
    articulosCarrito.forEach(curso =>{
        
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const img = document.createElement('img');
        img.setAttribute('src',imagen);
        img.setAttribute('width','100');
        const btnEliminar = document.createElement('a');
        btnEliminar.setAttribute('href','#');
        btnEliminar.classList.add('borrar-curso');
        btnEliminar.setAttribute('data-id',id);
        btnEliminar.textContent = 'X';

        tablaCarritoBody.appendChild(row)
            row.appendChild(td1)
                td1.appendChild(img);
            row.appendChild(td2);
                td2.textContent = titulo;
            row.appendChild(td3);
                td3.textContent = precio;
            row.appendChild(td4);
                td4.textContent = cantidad;
            row.appendChild(td5);
                td5.appendChild(btnEliminar);
    });

    console.log(tablaCarrito)

}

function limpiarHtml(){
    while(tablaCarritoBody.firstChild){
        tablaCarritoBody.removeChild(tablaCarritoBody.firstChild);
    }
}

function eliminarCurso(evt){
    if(evt.target.classList.contains('borrar-curso')){
        const idCurso = evt.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== idCurso);
    }

    carritoHTML();
}

function vaciarCarrito(evt){
    if(evt.target.getAttribute('id') === "vaciar-carrito"){
        articulosCarrito = [];
        limpiarHtml();
    }
}