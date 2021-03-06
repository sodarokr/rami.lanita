import { guardarProducto } from ".";

const productos = [
  {
    nombre: "Alfombra Ojos",
    categoria: "Tejidos",
    precio: 4500,
    stock: 3,
    img: "https://i.imgur.com/TLYSmYy.jpg",
  },
  {
    nombre: "Alfombra Oso",
    categoria: "Tejidos",
    precio: 4500,
    stock: 8,
    img: "https://i.imgur.com/Akdq2cL.jpg",
  },
  {
    nombre: "Atrapasueños",
    categoria: "Colgantes",
    precio: 1700,
    stock: 2,
    img: "https://i.imgur.com/PzBWPLT.jpg",
  },
  {
    nombre: "Atrapasueños Mandala",
    categoria: "Colgantes",
    precio: 1700,
    stock: 4,
    img: "https://i.imgur.com/X6QbCPA.jpg",
  },
  {
    nombre: "Bases para Bebidas",
    categoria: "Trapillo",
    precio: 550,
    stock: 10,
    img: "https://i.imgur.com/LFmuTCQ.jpg",
  },
  {
    nombre: "Caballito",
    categoria: "Amigurumis",
    precio: 800,
    stock: 2,
    img: "https://i.imgur.com/0fLxIMQ.jpg",
  },
  {
    nombre: "Capucha Orejas de Oso",
    categoria: "Indumentaria Bebé",
    precio: 1300,
    stock: 10,
    img: "https://i.imgur.com/r0lP5XR.jpg",
  },
  {
    nombre: "Cardigan",
    categoria: "Tejidos",
    precio: 3000,
    stock: 9,
    img: "https://i.imgur.com/EMLweOH.jpg",
  },
  {
    nombre: "Cerdito con Morral",
    categoria: "Amigurumis",
    precio: 700,
    stock: 5,
    img: "https://i.imgur.com/j2TYLan.jpg",
  },
  {
    nombre: "Cesto Cuadrado con Asas",
    categoria: "Trapillo",
    precio: 1800,
    stock: 3,
    img: "https://i.imgur.com/ij0gajf.jpg",
  },
  {
    nombre: "Cesto Redondo con Asas",
    categoria: "Trapillo",
    precio: 2000,
    stock: 9,
    img: "https://i.imgur.com/EOS6xsj.jpg",
  },
  {
    nombre: "Cesto Infantil",
    categoria: "Trapillo",
    precio: 1500,
    stock: 5,
    img: "https://i.imgur.com/QgiIAv3.jpg",
  },
  {
    nombre: "Cesto Multiuso Infantil",
    categoria: "Trapillo",
    precio: 1500,
    stock: 6,
    img: "https://i.imgur.com/ul7zghL.jpg",
  },
  {
    nombre: "Cesto Portarollo",
    categoria: "Trapillo",
    precio: 1250,
    stock: 5,
    img: "https://i.imgur.com/zhMzhzJ.jpg",
  },
  {
    nombre: "Cesto Rectagular",
    categoria: "Trapillo",
    precio: 3000,
    stock: 10,
    img: "https://i.imgur.com/cC5hmiX.jpg",
  },
  {
    nombre: "Chaleco",
    categoria: "Indumentaria Bebé",
    precio: 1700,
    stock: 7,
    img: "https://i.imgur.com/zgFKmfx.jpg",
  },
  {
    nombre: "Chaleco con Botones",
    categoria: "Indumentaria Bebé",
    precio: 1800,
    stock: 6,
    img: "https://i.imgur.com/Qqy2Oud.jpg",
  },
  {
    nombre: "Colgante Arcoiris",
    categoria: "Colgantes",
    precio: 1500,
    stock: 9,
    img: "https://i.imgur.com/gJOlnsa.jpg",
  },
  {
    nombre: "Colgante Letras",
    categoria: "Colgantes",
    precio: 1900,
    stock: 10,
    img: "https://i.imgur.com/BUienRJ.jpg",
  },
  {
    nombre: "Combo Cestos Bienvenida Bebé",
    categoria: "Trapillo",
    precio: 4500,
    stock: 2,
    img: "https://i.imgur.com/M9d3auz.jpg",
  },
  {
    nombre: "Combo Bienvenida Bebé",
    categoria: "Trapillo",
    precio: 4500,
    stock: 4,
    img: "https://i.imgur.com/mwkvBRo.jpg",
  },
  {
    nombre: "Coneja Bailarina",
    categoria: "Amigurumis",
    precio: 1100,
    stock: 6,
    img: "https://i.imgur.com/N1oOpJX.jpg",
  },
  {
    nombre: "Coneja con Flores",
    categoria: "Amigurumis",
    precio: 1000,
    stock: 9,
    img: "https://i.imgur.com/FrM5qKx.jpg",
  },
  {
    nombre: "Conjunto Bebé",
    categoria: "Indumentaria Bebé",
    precio: 3000,
    stock: 8,
    img: "https://i.imgur.com/pgA2IhO.jpg",
  },
  {
    nombre: "Corona Conejo",
    categoria: "Colgantes",
    precio: 2400,
    stock: 6,
    img: "https://i.imgur.com/fSzVHxi.jpg",
  },
  {
    nombre: "Correcaminos",
    categoria: "Amigurumis",
    precio: 2100,
    stock: 5,
    img: "https://i.imgur.com/OWZagZn.jpg",
  },
  {
    nombre: "Dinosaurio Azul",
    categoria: "Amigurumis",
    precio: 1900,
    stock: 10,
    img: "https://i.imgur.com/gXrozTC.jpg",
  },
  {
    nombre: "Elefante Haru",
    categoria: "Amigurumis",
    precio: 2000,
    stock: 10,
    img: "https://i.imgur.com/JXmc4Rv.jpg",
  },
  {
    nombre: "Principito y el Zorro",
    categoria: "Amigurumis",
    precio: 2400,
    stock: 8,
    img: "https://i.imgur.com/4eMSX6I.jpg",
  },
  {
    nombre: "Principito y la Rosa",
    categoria: "Amigurumis",
    precio: 2600,
    stock: 5,
    img: "https://i.imgur.com/2EotmwQ.jpg",
  },
  {
    nombre: "Enriqueta (Ni una Menos)",
    categoria: "Amigurumis",
    precio: 1300,
    stock: 6,
    img: "https://i.imgur.com/TmXZNLA.jpg",
  },
  {
    nombre: "Gorrito con Visera",
    categoria: "Indumentaria Bebé",
    precio: 1400,
    stock: 8,
    img: "https://i.imgur.com/S6EfBzy.jpg",
  },
  {
    nombre: "Gorro Caído",
    categoria: "Tejidos",
    precio: 1400,
    stock: 7,
    img: "https://i.imgur.com/UK5S6bC.jpg",
  },
  {
    nombre: "Gorro y Cuellito simple",
    categoria: "Tejidos",
    precio: 2000,
    stock: 4,
    img: "https://i.imgur.com/fOktTX5.jpg",
  },
  {
    nombre: "Hipopótamo Bebé",
    categoria: "Amigurumis",
    precio: 2900,
    stock: 6,
    img: "https://i.imgur.com/OMI7sjy.jpg",
  },
  {
    nombre: "Holder con Nombre",
    categoria: "Colgantes",
    precio: 750,
    stock: 9,
    img: "https://i.imgur.com/htfLnwR.jpg",
  },
  {
    nombre: "Holder Crochet",
    categoria: "Colgantes",
    precio: 750,
    stock: 3,
    img: "https://i.imgur.com/oIkMOUv.jpg",
  },
  {
    nombre: "Infinito Beige",
    categoria: "Tejidos",
    precio: 2200,
    stock: 9,
    img: "https://i.imgur.com/LpyWpmj.jpg",
  },
  {
    nombre: "Infinito Rosa",
    categoria: "Tejidos",
    precio: 2200,
    stock: 10,
    img: "https://i.imgur.com/9NlKu25.jpg",
  },
  {
    nombre: "Infinito Salmon",
    categoria: "Tejidos",
    precio: 2200,
    stock: 3,
    img: "https://i.imgur.com/MWsLteu.jpg",
  },
  {
    nombre: "Infinito Verde",
    categoria: "Tejidos",
    precio: 2200,
    stock: 7,
    img: "https://i.imgur.com/BO7trSR.jpg",
  },
  {
    nombre: "Jirafa Montessori",
    categoria: "Accesorios Bebé",
    precio: 900,
    stock: 9,
    img: "https://i.imgur.com/hv3xCof.jpg",
  },
  {
    nombre: "Leon y Prendedor",
    categoria: "Amigurumis",
    precio: 1900,
    stock: 2,
    img: "https://i.imgur.com/cVQLigy.jpg",
  },
  {
    nombre: "Manta Apego Caballo",
    categoria: "Apegos",
    precio: 1900,
    stock: 6,
    img: "https://i.imgur.com/XbhmTVb.jpg",
  },
  {
    nombre: "Manta Apego Coneja",
    categoria: "Apegos",
    precio: 2100,
    stock: 3,
    img: "https://i.imgur.com/pftBbjB.jpg",
  },
  {
    nombre: "Manta Apego Conejo",
    categoria: "Apegos",
    precio: 2100,
    stock: 4,
    img: "https://i.imgur.com/BzFh61r.jpg",
  },
  {
    nombre: "Manta Apego Hipopótamo",
    categoria: "Apegos",
    precio: 2400,
    stock: 10,
    img: "https://i.imgur.com/E4zQnuL.jpg",
  },
  {
    nombre: "Manta Apego Vaca",
    categoria: "Apegos",
    precio: 2000,
    stock: 2,
    img: "https://i.imgur.com/QGAp8r4.jpg",
  },
  {
    nombre: "Mochila Infantil",
    categoria: "Indumentaria Bebé",
    precio: 4300,
    stock: 3,
    img: "https://i.imgur.com/qco82SF.jpg",
  },
  {
    nombre: "Mordedor Montessori",
    categoria: "Accesorios Bebé",
    precio: 750,
    stock: 8,
    img: "https://i.imgur.com/YJo0gmJ.jpg",
  },
  {
    nombre: "Muñeca Unicornio",
    categoria: "Amigurumis",
    precio: 4500,
    stock: 6,
    img: "https://i.imgur.com/a7q4uXO.jpg",
  },
  {
    nombre: "Pads Desmaquillantes",
    categoria: "Tejidos",
    precio: 1100,
    stock: 7,
    img: "https://i.imgur.com/i4UcR9L.jpg",
  },
  {
    nombre: "Pantalon Tejido",
    categoria: "Tejidos",
    precio: 1800,
    stock: 8,
    img: "https://i.imgur.com/CT28t4x.jpg",
  },
  {
    nombre: "Pantalon Tejido",
    categoria: "Tejidos",
    precio: 1800,
    stock: 5,
    img: "https://i.imgur.com/88DOzFI.jpg",
  },
  {
    nombre: "Pantalon Crochet",
    categoria: "Indumentaria Bebé",
    precio: 1900,
    stock: 10,
    img: "https://i.imgur.com/zyWz33j.jpg",
  },
  {
    nombre: "Pareja Conejos",
    categoria: "Amigurumis",
    precio: 1900,
    stock: 7,
    img: "https://i.imgur.com/Kl4oaxV.jpg",
  },
  {
    nombre: "Loula",
    categoria: "Amigurumis",
    precio: 2200,
    stock: 2,
    img: "https://i.imgur.com/Qs8xh87.jpg",
  },
  {
    nombre: "Plumas Macrame",
    categoria: "Colgantes",
    precio: 1300,
    stock: 7,
    img: "https://i.imgur.com/k44T8nr.jpg",
  },
  {
    nombre: "Pocoyo",
    categoria: "Amigurumis",
    precio: 2100,
    stock: 4,
    img: "https://i.imgur.com/6oM9bbO.jpg",
  },
  {
    nombre: "Polainas",
    categoria: "Tejidos",
    precio: 2450,
    stock: 6,
    img: "https://i.imgur.com/hOwH9My.jpg",
  },
  {
    nombre: "Posafuentes Mandala",
    categoria: "Trapillo",
    precio: 350,
    stock: 3,
    img: "https://i.imgur.com/Oc0yTgH.jpg",
  },
  {
    nombre: "Posafuentes Mandala",
    categoria: "Trapillo",
    precio: 350,
    stock: 9,
    img: "https://i.imgur.com/NDGqQrF.jpg",
  },
  {
    nombre: "Prendedor con Nombre y Flor",
    categoria: "Accesorios Bebé",
    precio: 450,
    stock: 4,
    img: "https://i.imgur.com/4OF9ub3.jpg",
  },
  {
    nombre: "Prendedor Chupete",
    categoria: "Accesorios Bebé",
    precio: 350,
    stock: 9,
    img: "https://i.imgur.com/lP4oiKZ.jpg",
  },
  {
    nombre: "Princesa Leia",
    categoria: "Amigurumis",
    precio: 1850,
    stock: 5,
    img: "https://i.imgur.com/iQxpgS6.jpg",
  },
  {
    nombre: "Set Cuentos y Sonajeros",
    categoria: "Amigurumis",
    precio: 3800,
    stock: 10,
    img: "https://i.imgur.com/NP5c1RO.jpg",
  },
  {
    nombre: "Set Mantel y Bases",
    categoria: "Tejidos",
    precio: 2650,
    stock: 2,
    img: "https://i.imgur.com/DAL6KWp.jpg",
  },
  {
    nombre: "Sonajero con Manguito",
    categoria: "Accesorios Bebé",
    precio: 800,
    stock: 3,
    img: "https://i.imgur.com/TV2SFNQ.jpg",
  },
  {
    nombre: "Sonajero Hipopótamo",
    categoria: "Accesorios Bebé",
    precio: 950,
    stock: 10,
    img: "https://i.imgur.com/JAunKRh.jpg",
  },
  {
    nombre: "Mordedor Koala",
    categoria: "Accesorios Bebé",
    precio: 600,
    stock: 9,
    img: "https://i.imgur.com/vh7xiwY.jpg",
  },
  {
    nombre: "Sonajero Montessori",
    categoria: "Accesorios Bebé",
    precio: 450,
    stock: 10,
    img: "https://i.imgur.com/2l69ZS8.jpg",
  },
  {
    nombre: "Unicornio Melina",
    categoria: "Amigurumis",
    precio: 4000,
    stock: 6,
    img: "https://i.imgur.com/Uq8gAfI.jpg",
  },
];

export const uploaderProd = () => {
  productos.map((prod) => {
    const id = guardarProducto(prod);
    console.log(`se creó el producto ${prod.nombre} con el id ${id}`);
  });
};
