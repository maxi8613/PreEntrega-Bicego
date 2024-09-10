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

fetch("productos.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((producto) => {
      const newProducto = document.createElement("div");
      newProducto.classList = "card-producto";
      newProducto.innerHTML = `
      <img src= "./${producto.img}" >
      <h3>${producto.nombre} </h3>
      <button> Agregar a favoritos </button>
      `;
      contenedor.appendChild(newProducto);
      const boton = newProducto.getElementsByTagName("button");
      boton[0].addEventListener("click", () => {
        favoritos(producto) 
        Swal.fire("Agregado a favoritos");
      });
    });
  });

function favoritos(producto) {
  const storage = JSON.parse(localStorage.getItem("yerbas"));
  if (!storage) {
    const newProducto = productoStorage(producto);
    localStorage.setItem("yerbas", JSON.stringify([newProducto]));
  } else {
    const i = storage.findIndex((yerba) => yerba.id === producto.id);
    console.log(i);
    const storage2 = storage;
    if (i === -1) {
      storage2.push(productoStorage(producto));
      localStorage.setItem("yerbas", JSON.stringify(storage2));
    }
  }
}

function productoStorage(producto) {
  const newproducto = producto;
  return newproducto;
}
