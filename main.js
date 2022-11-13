import { config } from "dotenv";
config();
const API_URL = process.env.API_URL;

window.onload = function () {
  const cargarProductos = document.querySelector("#div-productos");

  fetch(`${API_URL}/productos`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));

  const mostrarProductos = (productos) => {
    let productos_bs = "";
    for (let i = 0; i < productos.length; i++) {
      productos_bs += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <div class="product-image">
            <img
              class="pic-1"
              src="${productos[i].url_image}"
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
      cargarProductos.innerHTML = `${productos_bs}`;
    }

    const cargarCategorias = document.querySelector("#cargarCategoria");
    fetch(`${API_URL}/categorias`)
      .then((res) => res.json())
      .then((categorias) => mostrarCategorias(categorias));

    const mostrarCategorias = (categorias) => {
      let categorias_bs = "";
      for (let i = 0; i < categorias.length; i++) {
        categorias_bs += `<option value="${categorias[i].id}">
      ${categorias[i].name}
      </option>`;
      }
      cargarCategorias.innerHTML = `<option selected disabled>Categorias</option>${categorias_bs}`;
    };
  };
};
function cargarProduct_category() {
  const cargarProductos = document.querySelector("#div-productos");
  var idCat = document.getElementById("cargarCategoria").value;
  fetch(`${API_URL}/categorias/${idCat}`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));

  const mostrarProductos = (productos) => {
    let productos_bs = "";
    for (let i = 0; i < productos.length; i++) {
      productos_bs += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <div class="product-image">
            <img
              class="pic-1"
              src="${productos[i].url_image}"
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
      cargarProductos.innerHTML = `${productos_bs}`;
    }
  };
}

function findProductos() {
  const cargarProductos = document.querySelector("#div-productos");
  const findName = document.getElementById("buscar_bar").value;
  fetch(`${API_URL}/productos/${findName}`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));
  clearName = document.getElementById("buscar_bar").value = "";
  const mostrarProductos = (productos) => {
    let productos_bs = "";
    for (let i = 0; i < productos.length; i++) {
      productos_bs += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <div class="product-image">
            <img
              class="pic-1"
              src="${productos[i].url_image}"
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
      cargarProductos.innerHTML = `${productos_bs}`;
    }
  };
}
