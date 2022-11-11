window.onload = function () {
  const API_URL = "http://localhost:4000";

  const cargarProductos = document.querySelector("#div-productos");

  fetch(`${API_URL}/productos`)
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos));

  const mostrarProductos = (productos) => {
    let productos_bs = "";
    for (let i = 0; i < productos.length; i++) {
      productos_bs += `<div class="col-md-3 col-sm-6 mb-5">
      <div class="product-grid">
        <div class="product-image">
            <img
              class="pic-1"
              src="${productos[i].url_image}"
            />
          <span class="product-new-label">Oferta</span>
          <span class="product-discount-label">${productos[i].discount}%</span>
        </div>
  
        <div class="product-content">
          <h3 class="title">${productos[i].name}</h3>
          <div class="price">$${productos[i].price}</div>
          <a class="add-to-cart" href="">Añadir al carro</a>
        </div>
      </div>
    </div>
    `;
      cargarProductos.innerHTML = `${productos_bs}`;
    }

    const cargarCategorias = document.querySelector("#dropdown_Categoria");
    fetch(`${API_URL}/categorias`)
      .then((res) => res.json())
      .then((categorias) => mostrarCategorias(categorias));

    const mostrarCategorias = (categorias) => {
      let categorias_bs = "";
      for (let i = 0; i < categorias.length; i++) {
        categorias_bs += `<li>
      <a class="dropdown-item"  href="#">${categorias[i].name}</a> 
      </li>`;
      }
      cargarCategorias.innerHTML = `${categorias_bs}`;
    };
  };
};

