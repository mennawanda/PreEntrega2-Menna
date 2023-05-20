//Segunda PreEntrega
//Venta de cursos de cocina
//Creo mi objeto de cursos a vender
const cursos = [
    {
        id: 01,
        nombre: "Nivel Uno - Cocinando vegetales",
        precio: 4500,
        categoria: "Online",
    },
    {
        id: 02,
        nombre: "Nivel Dos - Quesos de legumbres",
        precio: 6000,
        categoria: "Online",
    },
    {
        id: 03,
        nombre: "Nivel Tres - Seitán a la parrilla",
        precio: 7000,
        categoria: "Presencial",
    },
    {
        id: 04,
        nombre: "Nivel Cuatro - Pastas sin huevo",
        precio: 7200,
        categoria: "Presencial",
    },
    {
        id: 05,
        nombre: "Nivel Cinco - Perfeccionamiento",
        precio: 8000,
        categoria: "Presencial",
    },
];

//Le muestro los cursos disponibles al usuario
function mostrarCursos(){
    alert("Lista de cursos disponibles:");
    cursos.forEach(function (curso){
        alert(
            "ID: " + curso.id + "\n" + 
            "Nombre del curso: " + curso.nombre + "\n" +
            "Precio: " + curso.precio + "\n" +
            "Categoria: " + curso.categoria + "\n"
       );
    });
}

//Filtro los cursos por categoria
function filtrarCategoria(){
    const categoria = prompt("Ingrese la categoría de cursos que desea filtrar:");

    const cursosFiltrados = cursos.filter(function (curso){
        return curso.categoria.toLowerCase() === categoria.toLowerCase();
    });

    //Corroboro que el usuario haya ingresado algo y le muestro los cursos dentro de la categoria elegida
    if (cursosFiltrados.length > 0){
        alert("Cursos encontrados con la categoría " + categoria + ":");
        cursosFiltrados.forEach(function (curso){
            alert(
                "ID: " + curso.id + "\n" + 
                "Nombre del curso: " + curso.nombre + "\n" +
                "Precio: " + curso.precio + "\n" 
            );
        });
    } else{
        alert("No se encontraron cursos con la categoría " + categoria + ".");
    }
    
}

//Funcion donde el usuario elige un curso
function elegirCurso(){
    var eleccionUsuario = parseInt(prompt("Ingrese el ID del curso que desea comprar:"));
    //aca se corta
    var cursoElegido = cursos.find(function (curso) {
        return curso.id === eleccionUsuario;
    });

    if(cursoElegido){
        alert(
            "Curso seleccionado:"+ "\n" +
            "ID: " + cursoElegido.id + "\n" + 
            "Nombre del curso: " + cursoElegido.nombre + "\n" +
            "Precio: " + cursoElegido.precio + "\n" +
            "Categoria: " + cursoElegido.categoria + "\n"
        );

        const cuotas = parseInt(prompt(
            "Medios de pago:" + "\n" +
            "En 1 cuota con un 10% de descuento." + "\n" +
            "En 3 cuotas sin interés." + "\n" +
            "En 6 cuotas con un 20% de interés." + "\n" +
            "Ingrese en cuántas cuotas le gustaría abonar el curso:"
        ));

        var precioTotal;

        if(cuotas === 1){
            precioTotal = cursoElegido.precio * 0.9;
            alert("Total a pagar en 1 cuota con descuento del 10%: $" + precioTotal); //Descuento del 10%
        } else if (cuotas === 3) {
            precioTotal = cursoElegido.precio; // Sin intereses
            alert("Total a pagar en 3 cuotas sin intereses: $" + precioTotal + 
            "\n Monto de cada cuota: $" + precioTotal/3);
        } else if (cuotas === 6) {
            precioTotal = cursoElegido.precio * 1.20; // Aplicar interés del 20%
            alert("Total a pagar en 6 cuotas con interés del 20%: $" + precioTotal + 
            "\n Monto de cada cuota: $" + precioTotal/6);
        } else {
            alert("La cantidad de cuotas ingresada no es válida.");
            return;
        }
    
    }
}

//Llamo a las funciones
mostrarCursos();
filtrarCategoria();
elegirCurso();