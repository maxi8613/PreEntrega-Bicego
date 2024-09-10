const header = document.getElementById("header");
header.innerHTML = `<nav>
<div class="logo">
        <img class= "logo2" src="./img/mateandes.jpg" alt="MateAndes">
    </div>
    <div class = "enlaces"> 
    <a href="index.html">Inicio</a>
<a href="favoritos.html">Favoritos</a>
<a href="#">Contacto</a>
</div> 
</nav>
`;

const footer = document.getElementById("footer");
footer.innerHTML = `<footer>
    <div class="contacto">
      <h5>Contactanos</h5>
      <p>Dorrego Mendoza, Las Cañas 1833, M5526</p>
      <p>Número de teléfono: +54 9 2615 79-3372</p>
    </div>
    
    <div class="socialMedia">
      <h5>Redes sociales</h5>
    
      <div class="links">
        <a href="https://www.instagram.com/mate.andes/" target="_blank">
          <i class="insta bi bi-instagram"></i>
        </a>
        
        <a href="https://www.facebook.com/mateandes" 
        target="_blank"> 
        <i class="bi bi-facebook"></i>
      </a>
      </div>
    
</div>
`;

const contenedor = document.querySelector("#contenedor");

function cardProductos() {
  const productos3 = JSON.parse(localStorage.getItem("yerbas"));
  productos3.forEach((producto) => {
    const newProducto = document.createElement("div");
    newProducto.classList = "card-producto";
    newProducto.innerHTML = `
    <img src= "./${producto.img}" >
    <h3>${producto.nombre} </h3>
    <button> Eliminar de favoritos </button>
    `;
    contenedor.appendChild(newProducto);
    const boton = newProducto.getElementsByTagName("button");
    boton[0].addEventListener("click", () => {
      eliminar(producto, newProducto) 
      Swal.fire("Eliminado de favoritos");
    }
    );
  });
}

function eliminar(producto, cardE) {
  let productos3 = JSON.parse(localStorage.getItem("yerbas"));
  productos3 = productos3.filter((item) => item.nombre !== producto.nombre);
  localStorage.setItem("yerbas", JSON.stringify(productos3));
  cardE.remove();
}

cardProductos();
