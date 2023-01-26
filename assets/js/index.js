document.getElementById("formulario").addEventListener("submit",crear);

function crear(e){
    titulo = document.getElementById("titulo").value;
    descripcion = document.getElementById("descripcion").value;
    precio = document.getElementById("precio").value;

    let libro = {
        titulo,
        descripcion,
        precio
    }
    if(localStorage.getItem("Libros")=== null){
        let libros = []
        libros.push(libro)
        localStorage.setItem("Libros",JSON.stringify(libros))
    }else{
        let libros = JSON.parse(localStorage.getItem("Libros"))
        libros.push(libro)
        localStorage.setItem("Libros",JSON.stringify(libros))
    }
    document.getElementById("formulario").reset();
    console.log("Libro Guardado correctamente")
    e.preventDefault();
}