const productos = [
  {
    id: "PA0001",
    nombre: "Correcaminos",
    categoria: "Amigurumis",
    precio: 2500,
    stock: 40,
    img: "/img/amigurumis/correcaminos.jpg",
  },
  {
    id: "PC0001",
    nombre: "Atrapasueños",
    categoria: "Colgantes",
    precio: 900,
    stock: 10,
    img: "/img/colgantes/atrapasuenosmandala.jpg",
  },
  {
    id: "PF0001",
    nombre: "Alfombra Ojos",
    categoria: "Alfombras",
    precio: 2700,
    stock: 9,
    img: "img/alfombras/alfombraojos.jpg",
  },
  {
    id: "PT0001",
    nombre: "Combo Bienvenida Bebé",
    categoria: "Trapillo",
    precio: 1900,
    stock: 21,
    img: "/img/trapillo/combotrapillobienvenidabebe.jpg",
  },
  {
    id: "PM0001",
    nombre: "Manta de Apego Caballo",
    categoria: "Mantas de Apego",
    precio: 1600,
    stock: 4,
    img: "/img/mantasdeapego/mantadeapegocaballo1.jpg",
  },
  {
    id: "PB0001",
    nombre: "Mordedor Montessori",
    categoria: "Accesorios Bebé",
    precio: 2300,
    stock: 27,
    img: "/img/accesoriosjuguetesbebe/mordedormontessori.jpg",
  },
];

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
