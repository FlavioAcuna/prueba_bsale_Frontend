//Ruta conexión  API
const API_URL = "https://pruebabsalebackend-production.up.railway.app";
//cargar datos después de la carga del documento
window.onload = function () {
  //selector donde se cargaran los productos encontrados
  const cargarProductos = document.querySelector("#div-productos");
  //conexión API
  fetch(`${API_URL}/productos`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));
  //cargar productos
  const mostrarProductos = (productos) => {
    //definir variable vacía  donde se creara el template
    let productos_bs = "";
    //recorrer los elementos encontrados
    for (let i = 0; i < productos.length; i++) {
      //validación que cada elemento tenga una imagen
      const img =
        productos[i].url_image === "" || productos[i].url_image === null
          ? "../img/no_disponible.jpeg"
          : productos[i].url_image;
      //Template o estructura que tendrán los productos entregados
      productos_bs += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <div class="product-image">
            <img
              class="pic-1"
              src="${img}"
            />
        </div>
  
        <div class="card-body">
           <h6 class="card-title text-center">${productos[i].name}</h6>
          <div class="card-text d-flex justify-content-around">$${productos[i].price}
          <button type="button" class="btn btn-secondary mr-4 rounded-circle">
                <i class="bi bi-basket"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
    `;
      //cargar template en el elemento seleccionado
      cargarProductos.innerHTML = `${productos_bs}`;
    }
    //selector donde se cargaran las categorias encontrados
    const cargarCategorias = document.querySelector("#cargarCategoria");
    //conexión API
    fetch(`${API_URL}/categorias`)
      .then((res) => res.json())
      .then((categorias) => mostrarCategorias(categorias));
    //cargar categorias
    const mostrarCategorias = (categorias) => {
      //definir variable vacía  donde se creara el template
      let categorias_bs = "";
      //recorrer los elementos encontrados
      for (let i = 0; i < categorias.length; i++) {
        categorias_bs += `<option value="${categorias[i].id}">
      ${categorias[i].name}
      </option>`;
      }
      //cargar template en el elemento seleccionado
      cargarCategorias.innerHTML = `<option selected disabled>Categorias</option>${categorias_bs}`;
    };
  };
};
//Función para filtrar por categorias
function cargarProduct_category() {
  //selector donde se cargaran los productos filtrados por categoria
  const cargarProductos = document.querySelector("#div-productos");
  //obtener value del elemento seleccionado por el usuario
  var idCat = document.getElementById("cargarCategoria").value;
  //conexión API
  fetch(`${API_URL}/categorias/${idCat}`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));
  //cargar productos
  const mostrarProductos = (productos) => {
    //definir variable vacía  donde se creara el template
    let productos_bs = "";
    //recorrer los elementos encontrados
    for (let i = 0; i < productos.length; i++) {
      //validación que cada elemento tenga una imagen
      const img =
        productos[i].url_image === "" || productos[i].url_image === null
          ? "../img/no_disponible.jpeg"
          : productos[i].url_image;
      //Template o estructura que tendrán los productos entregados
      productos_bs += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <div class="product-image">
            <img
              class="pic-1"
              src="${img}"
            />
        </div>
        <div class="card-body">
           <h6 class="card-title text-center">${productos[i].name}</h6>
           <div class="card-text d-flex justify-content-around">$${productos[i].price}
           <button type="button" class="btn btn-secondary mr-4 rounded-circle">
                 <i class="bi bi-basket"></i>
               </button>
           </div>
        </div>
      </div>
    </div>
    `;
      //cargar template en el elemento seleccionado
      cargarProductos.innerHTML = `${productos_bs}`;
    }
  };
}
//Función buscar productos
function findProductos() {
  //selector donde se cargaran los productos encontrados
  const cargarProductos = document.querySelector("#div-productos");
  //Obtener value de la barra de búsqueda
  const findName = document.getElementById("buscar_bar").value;
  //conexión API
  fetch(`${API_URL}/productos/${findName}`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));
  //eliminar datos de la barra de búsqueda
  clearName = document.getElementById("buscar_bar").value = "";
  //cargar productos
  const mostrarProductos = (productos) => {
    //definir variable vacía  donde se creara el template
    let productos_bs = "";
    //recorrer los elementos encontrados
    for (let i = 0; i < productos.length; i++) {
      //validación que cada elemento tenga una imagen
      const img =
        productos[i].url_image === "" || productos[i].url_image === null
          ? "../img/no_disponible.jpeg"
          : productos[i].url_image;
      //Template o estructura que tendrán los productos entregados
      productos_bs += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <div class="product-image">
            <img
              class="pic-1"
              src="${img}"
            />
        </div>
        <div class="card-body">
           <h6 class="card-title text-center">${productos[i].name}</h6>
           <div class="card-text d-flex justify-content-around">$${productos[i].price}
           <button type="button" class="btn btn-secondary mr-4 rounded-circle">
                 <i class="bi bi-basket"></i>
               </button>
           </div>
        </div>
      </div>
    </div>
    `;
      //cargar template en el elemento seleccionado
      cargarProductos.innerHTML = `${productos_bs}`;
    }
  };
}
