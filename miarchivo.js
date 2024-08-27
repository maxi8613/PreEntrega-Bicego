
const header = document.getElementById("header");
header.innerHTML = `<nav>
<div class="logo">
        <img class= "logo2" src="./img/mateandes.jpg" alt="MateAndes">
    </div>
    <div class = "enlaces"> 
    <a href="index.html">Inicio</a>
<a href="#">Favoritos</a>
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

const yerbas = [
  {
    id: 1,
    nombre: "Verdeada Premium",
    img: "./img/ym-verdeada-premium-500gr-001-c28b0658e58a41413316545203078558-480-0.jpg",
    
  },
  {
    id: 2,
    nombre: "Picada Vieja",
    img: "./img/ym-picada-vieja-barbacua-500gr1-cfe0c68766bc4d138a16377059880090-640-0.jpg",
    
  },
  {
    id: 3,
    nombre: "Amigo Matero",
    img: "./img/ym-amigo-matero-tradicional-500gr-001-f04551eaea892cb22416467537206462-640-0.jpg",
    
  },
  {
    id: 4,
    nombre: "Fidel Tradicional",
    img: "./img/yerba-fidel-tradicional1-7181d3625305350f5415947638886455-1024-1024.jpeg",
    
  },
  {
    id: 5,
    nombre: "Progreso",
    img: "./img/progreso.jpg",
    
  },
  {
    id: 6,
    nombre: "Camino Nuevo",
    img: "./img/camino.jpg",
    
  },
];

const contenedor = document.querySelector("#contenedor")

function cardProductos (productos){
  
  productos.forEach(producto => {
    const newProducto = document.createElement("div");
    newProducto.classList = "card-producto";
    newProducto.innerHTML = `
    <img src= "./${producto.img}" >
    <h3>${producto.nombre} </h3>
    <button> Agregar a favoritos </button>
    `
    contenedor.appendChild(newProducto)
    const boton =  newProducto.getElementsByTagName("button");
    boton[0].addEventListener("click", () => favoritos(producto))
  })
}

cardProductos(yerbas);

function favoritos(producto){
  const storage = JSON.parse(localStorage.getItem("yerbas"))
  if (!storage){
    const newProducto= productoStorage(producto);
    localStorage.setItem("yerbas", JSON.stringify([newProducto]))
  } else {
    const i = storage.findIndex(yerba => yerba.id === producto.id)
    console.log(i);
    if (i === -1){
      const storage2 = storage;
      storage2.push(productoStorage(producto))
      localStorage.setItem("yerbas", JSON.stringify(storage2))
    }
  }
}

function productoStorage (producto){
  const newproducto = producto;
  newproducto.cantidad = 1;
  return newproducto;
}