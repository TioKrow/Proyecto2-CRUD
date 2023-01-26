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
    leer();
    document.getElementById("formulario").reset();
    console.log("Libro Guardado correctamente")
    e.preventDefault();
}
function leer(){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i < libros.length; i++){
        let titulo = libros[i].titulo
        let descripcion = libros[i].descripcion
        let precio = libros[i].precio

        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${titulo}</td>
            <td>${descripcion}</td>
            <td>${precio}</td>
            <td><button onclick="eliminar()" class="btn btn-danger">Eliminar</td>
            <td><button onclick="editar('${titulo}')" class="btn btn-success">Editar</td>
        </tr>`
    }
}

function editar(nombre){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    for (let i=0; i<libros.length; i++){
        if(libros[i].titulo === titulo){
            document.getElementById("body").innerHTML = 
            `<div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Editar</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newtitulo" class="form-control" placeholder="${libros[i].titulo}">
                            </div>
                            <div class="form-group">
                                <textarea id="newdescripcion" class="form-control"
                                    placeholder="${libros[i].descripcion}"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="number" id="newprecio" class="form-control" placeholder="${libros[i].precio}">
                            </div>
                        </form>
                        <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                        <button class="btn btn-primary">Cancelar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <tr class="table-active">
                            <td>Larry the Bird</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </table>
            </div>
        </div>`


        }
    }
}
function actualizar(i){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    libros[i].titulo = document.getElementById("newtitulo").value;
    libros[i].descripcion = document.getElementById("newdescripcion").value;
    libros[i].precio = document.getElementById("newprecio").value;
    localStorage.setItem("Libros", JSON.stringify(libro));
}

leer()