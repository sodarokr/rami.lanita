const productos = [
  {
    id: "AJ001",
    nombre: "Jirafa Montessori",
    categoria: "Accesorios Bebé",
    precio: 900,
    stock: 48,
    img: process.env.PUBLIC_URL + "/img/accesoriosbebe/jirafamontessori.jpg",
  },
  {
    id: "AJ002",
    nombre: "Mordedor Montessori",
    categoria: "Accesorios Bebé",
    precio: 750,
    stock: 9,
    img: process.env.PUBLIC_URL + "/img/accesoriosbebe/mordedormontessori.jpg",
  },
  {
    id: "AJ003",
    nombre: "Sonajero con Manguito",
    categoria: "Accesorios Bebé",
    precio: 800,
    stock: 14,
    img: process.env.PUBLIC_URL + "/img/accesoriosbebe/sonajeroconmanguito.jpg",
  },
  {
    id: "AJ004",
    nombre: "Sonajero Hipopótamo",
    categoria: "Accesorios Bebé",
    precio: 950,
    stock: 48,
    img:
      process.env.PUBLIC_URL + "/img/accesoriosbebe/sonajeromordedorhipo.jpg",
  },
  {
    id: "AJ005",
    nombre: "Prendedor con Nombre y Flor",
    categoria: "Accesorios Bebé",
    precio: 450,
    stock: 12,
    img:
      process.env.PUBLIC_URL +
      "/img/accesoriosbebe/prendedorconnombreyflor.jpg",
  },
  {
    id: "AJ006",
    nombre: "Prendedor Chupete",
    categoria: "Accesorios Bebé",
    precio: 350,
    stock: 26,
    img:
      process.env.PUBLIC_URL +
      "/img/accesoriosbebe/prendedorparachupeteojuguetecrochet.jpg",
  },
  {
    id: "AJ007",
    nombre: "Mordedor Koala",
    categoria: "Accesorios Bebé",
    precio: 600,
    stock: 21,
    img:
      process.env.PUBLIC_URL + "/img/accesoriosbebe/sonajeromordedorkoala.jpg",
  },
  {
    id: "AJ008",
    nombre: "Sonajero Montessori",
    categoria: "Accesorios Bebé",
    precio: 450,
    stock: 46,
    img:
      process.env.PUBLIC_URL +
      "/img/accesoriosbebe/sonajeromordedormontessori.jpg",
  },
  {
    id: "AM001",
    nombre: "Caballito",
    categoria: "Amigurumis",
    precio: 800,
    stock: 10,
    img: process.env.PUBLIC_URL + "/img/amigurumis/caballo.jpg",
  },
  {
    id: "AM002",
    nombre: "Cerdito con Morral",
    categoria: "Amigurumis",
    precio: 700,
    stock: 26,
    img: process.env.PUBLIC_URL + "/img/amigurumis/cerditoconmorral.jpg",
  },
  {
    id: "AM003",
    nombre: "Coneja Bailarina",
    categoria: "Amigurumis",
    precio: 1100,
    stock: 29,
    img: process.env.PUBLIC_URL + "/img/amigurumis/conejabailarina.jpg",
  },
  {
    id: "AM004",
    nombre: "Coneja con Flores",
    categoria: "Amigurumis",
    precio: 1000,
    stock: 17,
    img: process.env.PUBLIC_URL + "/img/amigurumis/conejaconflores.jpg",
  },
  {
    id: "AM005",
    nombre: "Pareja Conejos",
    categoria: "Amigurumis",
    precio: 1900,
    stock: 47,
    img: process.env.PUBLIC_URL + "/img/amigurumis/parejaconejos.jpg",
  },
  {
    id: "AM006",
    nombre: "Correcaminos",
    categoria: "Amigurumis",
    precio: 2100,
    stock: 11,
    img: process.env.PUBLIC_URL + "/img/amigurumis/correcaminos.jpg",
  },
  {
    id: "AM007",
    nombre: "Dinosaurio Azul",
    categoria: "Amigurumis",
    precio: 1900,
    stock: 46,
    img: process.env.PUBLIC_URL + "/img/amigurumis/dinofranco.jpg",
  },
  {
    id: "AM008",
    nombre: "Elefante Haru",
    categoria: "Amigurumis",
    precio: 2000,
    stock: 37,
    img: process.env.PUBLIC_URL + "/img/amigurumis/elefanteharu.jpg",
  },
  {
    id: "AM009",
    nombre: "Principito y el Zorro",
    categoria: "Amigurumis",
    precio: 2400,
    stock: 8,
    img: process.env.PUBLIC_URL + "/img/amigurumis/elprincipitoyelzorro.jpg",
  },
  {
    id: "AM010",
    nombre: "Principito y la Rosa",
    categoria: "Amigurumis",
    precio: 2600,
    stock: 30,
    img: process.env.PUBLIC_URL + "/img/amigurumis/elprincipitoylarosa.jpg",
  },
  {
    id: "AM011",
    nombre: "Enriqueta (Ni una Menos)",
    categoria: "Amigurumis",
    precio: 1300,
    stock: 21,
    img: process.env.PUBLIC_URL + "/img/amigurumis/enriquetaniunamenos.jpg",
  },
  {
    id: "AM012",
    nombre: "Hipopótamo Bebé",
    categoria: "Amigurumis",
    precio: 2900,
    stock: 39,
    img: process.env.PUBLIC_URL + "/img/amigurumis/hipo.jpg",
  },
  {
    id: "AM013",
    nombre: "Leon y Prendedor",
    categoria: "Amigurumis",
    precio: 1900,
    stock: 40,
    img: process.env.PUBLIC_URL + "/img/amigurumis/leon.jpg",
  },
  {
    id: "AM014",
    nombre: "Muñeca Unicornio",
    categoria: "Amigurumis",
    precio: 4500,
    stock: 30,
    img: process.env.PUBLIC_URL + "/img/amigurumis/munecavickyunicornio.jpg",
  },
  {
    id: "AM015",
    nombre: "Loula",
    categoria: "Amigurumis",
    precio: 2200,
    stock: 23,
    img: process.env.PUBLIC_URL + "/img/amigurumis/perroloula.jpg",
  },
  {
    id: "AM016",
    nombre: "Pocoyo",
    categoria: "Amigurumis",
    precio: 2100,
    stock: 35,
    img: process.env.PUBLIC_URL + "/img/amigurumis/pocoyo.jpg",
  },
  {
    id: "AM017",
    nombre: "Princesa Leia",
    categoria: "Amigurumis",
    precio: 1850,
    stock: 14,
    img: process.env.PUBLIC_URL + "/img/amigurumis/princesaleia.jpg",
  },
  {
    id: "AM018",
    nombre: "Set Cuentos y Sonajeros",
    categoria: "Amigurumis",
    precio: 3800,
    stock: 44,
    img: process.env.PUBLIC_URL + "/img/amigurumis/setcuentoysonajeros.jpg",
  },
  {
    id: "AM019",
    nombre: "Unicornio Melina",
    categoria: "Amigurumis",
    precio: 4000,
    stock: 8,
    img: process.env.PUBLIC_URL + "/img/amigurumis/unicorniomelina.jpg",
  },
  {
    id: "AP001",
    nombre: "Manta Apego Caballo",
    categoria: "Apegos",
    precio: 1900,
    stock: 28,
    img: process.env.PUBLIC_URL + "/img/apegos/mantadeapegocaballo.jpg",
  },
  {
    id: "AP002",
    nombre: "Manta Apego Coneja",
    categoria: "Apegos",
    precio: 2100,
    stock: 38,
    img: process.env.PUBLIC_URL + "/img/apegos/mantadeapegoconejasombrero.jpg",
  },
  {
    id: "AP003",
    nombre: "Manta Apego Conejo",
    categoria: "Apegos",
    precio: 2100,
    stock: 25,
    img: process.env.PUBLIC_URL + "/img/apegos/mantadeapegoconejo.jpg",
  },
  {
    id: "AP004",
    nombre: "Manta Apego Vaca",
    categoria: "Apegos",
    precio: 2000,
    stock: 49,
    img: process.env.PUBLIC_URL + "/img/apegos/mantadeapegovaca.jpg",
  },
  {
    id: "AP005",
    nombre: "Manta Apego Hipopótamo",
    categoria: "Apegos",
    precio: 2400,
    stock: 34,
    img: process.env.PUBLIC_URL + "/img/apegos/mantadeapegohipo.jpg",
  },
  {
    id: "CG001",
    nombre: "Atrapasueños",
    categoria: "Colgantes",
    precio: 1700,
    stock: 41,
    img: process.env.PUBLIC_URL + "/img/colgantes/atrapasuenos.jpg",
  },
  {
    id: "CG002",
    nombre: "Atrapasueños Mandala",
    categoria: "Colgantes",
    precio: 1700,
    stock: 15,
    img: process.env.PUBLIC_URL + "/img/colgantes/atrapasuenosmandala.jpg",
  },
  {
    id: "CG003",
    nombre: "Colgante Arcoiris",
    categoria: "Colgantes",
    precio: 1500,
    stock: 40,
    img: process.env.PUBLIC_URL + "/img/colgantes/colgantearcoiris.jpg",
  },
  {
    id: "CG004",
    nombre: "Colgante Letras",
    categoria: "Colgantes",
    precio: 1900,
    stock: 32,
    img: process.env.PUBLIC_URL + "/img/colgantes/colgantedeletras.jpg",
  },
  {
    id: "CG005",
    nombre: "Corona Conejo",
    categoria: "Colgantes",
    precio: 2400,
    stock: 31,
    img: process.env.PUBLIC_URL + "/img/colgantes/coronaconejo.jpg",
  },
  {
    id: "CG006",
    nombre: "Holder con Nombre",
    categoria: "Colgantes",
    precio: 750,
    stock: 35,
    img: process.env.PUBLIC_URL + "/img/colgantes/holderconnombre.jpg",
  },
  {
    id: "CG007",
    nombre: "Holder Crochet",
    categoria: "Colgantes",
    precio: 750,
    stock: 21,
    img: process.env.PUBLIC_URL + "/img/colgantes/holdercrochet.jpg",
  },
  {
    id: "CG008",
    nombre: "Plumas Macrame",
    categoria: "Colgantes",
    precio: 1300,
    stock: 26,
    img: process.env.PUBLIC_URL + "/img/colgantes/plumasmacrame.jpg",
  },
  {
    id: "IB001",
    nombre: "Capucha Orejas de Oso",
    categoria: "Indumentaria Bebé",
    precio: 1300,
    stock: 43,
    img:
      process.env.PUBLIC_URL +
      "/img/indumentariaBebe/capuchaconorejasdeoso.jpg",
  },
  {
    id: "IB002",
    nombre: "Chaleco",
    categoria: "Indumentaria Bebé",
    precio: 1700,
    stock: 31,
    img: process.env.PUBLIC_URL + "/img/indumentariaBebe/chaleco.jpg",
  },
  {
    id: "IB003",
    nombre: "Chaleco con Botones",
    categoria: "Indumentaria Bebé",
    precio: 1800,
    stock: 7,
    img: process.env.PUBLIC_URL + "/img/indumentariaBebe/chalecoconbotones.jpg",
  },
  {
    id: "IB004",
    nombre: "Conjunto Bebé",
    categoria: "Indumentaria Bebé",
    precio: 3000,
    stock: 28,
    img: process.env.PUBLIC_URL + "/img/indumentariaBebe/conjuntobebe.jpg",
  },
  {
    id: "IB005",
    nombre: "Gorrito con Visera",
    categoria: "Indumentaria Bebé",
    precio: 1400,
    stock: 8,
    img: process.env.PUBLIC_URL + "/img/indumentariaBebe/gorritoconvisera.jpg",
  },
  {
    id: "IB006",
    nombre: "Mochila Infantil",
    categoria: "Indumentaria Bebé",
    precio: 4300,
    stock: 46,
    img: process.env.PUBLIC_URL + "/img/indumentariaBebe/mochilainfantil.jpg",
  },
  {
    id: "IB007",
    nombre: "Pantalon Crochet",
    categoria: "Indumentaria Bebé",
    precio: 1900,
    stock: 43,
    img: process.env.PUBLIC_URL + "/img/indumentariaBebe/pantaloncrochet.jpg",
  },
  {
    id: "TJ001",
    nombre: "Alfombra Ojos",
    categoria: "Tejidos",
    precio: 4500,
    stock: 22,
    img: process.env.PUBLIC_URL + "/img/tejidos/alfombraojos.jpg",
  },
  {
    id: "TJ002",
    nombre: "Alfombra Oso",
    categoria: "Tejidos",
    precio: 4500,
    stock: 37,
    img: process.env.PUBLIC_URL + "/img/tejidos/alfombraoso.jpg",
  },
  {
    id: "TJ003",
    nombre: "Cardigan",
    categoria: "Tejidos",
    precio: 3000,
    stock: 31,
    img: process.env.PUBLIC_URL + "/img/tejidos/cardigan.jpg",
  },
  {
    id: "TJ004",
    nombre: "Gorro Caído",
    categoria: "Tejidos",
    precio: 1400,
    stock: 13,
    img: process.env.PUBLIC_URL + "/img/tejidos/gorrocaido.jpg",
  },
  {
    id: "TJ005",
    nombre: "Gorro y Cuellito simple",
    categoria: "Tejidos",
    precio: 2000,
    stock: 48,
    img: process.env.PUBLIC_URL + "/img/tejidos/gorroycuellosimple.jpg",
  },
  {
    id: "TJ006",
    nombre: "Infinito Beige",
    categoria: "Tejidos",
    precio: 2200,
    stock: 7,
    img: process.env.PUBLIC_URL + "/img/tejidos/infinitobeige.jpg",
  },
  {
    id: "TJ007",
    nombre: "Infinito Rosa",
    categoria: "Tejidos",
    precio: 2200,
    stock: 20,
    img: process.env.PUBLIC_URL + "/img/tejidos/infinitorosa.jpg",
  },
  {
    id: "TJ008",
    nombre: "Infinito Salmon",
    categoria: "Tejidos",
    precio: 2200,
    stock: 31,
    img: process.env.PUBLIC_URL + "/img/tejidos/infinitosalmon.jpg",
  },
  {
    id: "TJ009",
    nombre: "Infinito Verde",
    categoria: "Tejidos",
    precio: 2200,
    stock: 23,
    img: process.env.PUBLIC_URL + "/img/tejidos/infinitoverde.jpg",
  },
  {
    id: "TJ010",
    nombre: "Pads Desmaquillantes",
    categoria: "Tejidos",
    precio: 1100,
    stock: 36,
    img: process.env.PUBLIC_URL + "/img/tejidos/padsdemaquillantes.jpg",
  },
  {
    id: "TJ011",
    nombre: "Pantalon Tejido",
    categoria: "Tejidos",
    precio: 1800,
    stock: 18,
    img: process.env.PUBLIC_URL + "/img/tejidos/pantalon.jpg",
  },
  {
    id: "TJ012",
    nombre: "Pantalon Tejido",
    categoria: "Tejidos",
    precio: 1800,
    stock: 25,
    img: process.env.PUBLIC_URL + "/img/tejidos/pantalon2.jpg",
  },
  {
    id: "TJ013",
    nombre: "Polainas",
    categoria: "Tejidos",
    precio: 2450,
    stock: 22,
    img: process.env.PUBLIC_URL + "/img/tejidos/polainas.jpg",
  },
  {
    id: "TJ014",
    nombre: "Set Mantel y Bases",
    categoria: "Tejidos",
    precio: 2650,
    stock: 8,
    img: process.env.PUBLIC_URL + "/img/tejidos/setmantelybases.jpg",
  },
  {
    id: "TR001",
    nombre: "Bases para Bebidas",
    categoria: "Trapillo",
    precio: 550,
    stock: 24,
    img: process.env.PUBLIC_URL + "/img/trapillo/basesparabebidas.jpg",
  },
  {
    id: "TR002",
    nombre: "Cesto Cuadrado con Asas",
    categoria: "Trapillo",
    precio: 1800,
    stock: 32,
    img:
      process.env.PUBLIC_URL +
      "/img/trapillo/cestocuadradodetrapilloconasas.jpg",
  },
  {
    id: "TR003",
    nombre: "Cesto Redondo con Asas",
    categoria: "Trapillo",
    precio: 2000,
    stock: 36,
    img: process.env.PUBLIC_URL + "/img/trapillo/cestodetrapilloconasas.jpg",
  },
  {
    id: "TR004",
    nombre: "Cesto Infantil",
    categoria: "Trapillo",
    precio: 1500,
    stock: 38,
    img: process.env.PUBLIC_URL + "/img/trapillo/cestoinfantil.jpg",
  },
  {
    id: "TR005",
    nombre: "Cesto Multiuso Infantil",
    categoria: "Trapillo",
    precio: 1500,
    stock: 27,
    img: process.env.PUBLIC_URL + "/img/trapillo/cestomultiusoinfantil.jpg",
  },
  {
    id: "TR006",
    nombre: "Cesto Portarollo",
    categoria: "Trapillo",
    precio: 1250,
    stock: 33,
    img: process.env.PUBLIC_URL + "/img/trapillo/cestoportarollo.jpg",
  },
  {
    id: "TR007",
    nombre: "Cesto Rectagular",
    categoria: "Trapillo",
    precio: 3000,
    stock: 18,
    img: process.env.PUBLIC_URL + "/img/trapillo/cestorectangulartrapillo.jpg",
  },
  {
    id: "TR008",
    nombre: "Combo Cestos Bienvenida Bebé",
    categoria: "Trapillo",
    precio: 4500,
    stock: 27,
    img: process.env.PUBLIC_URL + "/img/trapillo/combocestosbienvenidabebe.jpg",
  },
  {
    id: "TR009",
    nombre: "Combo Bienvenida Bebé",
    categoria: "Trapillo",
    precio: 4500,
    stock: 19,
    img:
      process.env.PUBLIC_URL + "/img/trapillo/combotrapillobienvenidabebe.jpg",
  },
  {
    id: "TR010",
    nombre: "Posafuentes Mandala",
    categoria: "Trapillo",
    precio: 350,
    stock: 15,
    img: process.env.PUBLIC_URL + "/img/trapillo/posafuentesmandala.jpg",
  },
  {
    id: "TR011",
    nombre: "Posafuentes Mandala",
    categoria: "Trapillo",
    precio: 350,
    stock: 24,
    img: process.env.PUBLIC_URL + "/img/trapillo/posafuentesmandala1.jpg",
  },

  // {
  //   id: "PA0001",
  //   nombre: "Correcaminos",
  //   categoria: "Amigurumis",
  //   precio: 2500,
  //   stock: 40,
  //   img: process.env.PUBLIC_URL + "/img/amigurumis/correcaminos.jpg",
  // },
  // {
  //   id: "PC0001",
  //   nombre: "Atrapasueños",
  //   categoria: "Colgantes",
  //   precio: 900,
  //   stock: 10,
  //   img: process.env.PUBLIC_URL + "/img/colgantes/atrapasuenosmandala.jpg",
  // },
  // {
  //   id: "PF0001",
  //   nombre: "Alfombra Ojos",
  //   categoria: "Alfombras",
  //   precio: 2700,
  //   stock: 9,
  //   img: process.env.PUBLIC_URL + "/img/alfombras/alfombraojos.jpg",
  // },
  // {
  //   id: "PT0001",
  //   nombre: "Combo Bienvenida Bebé",
  //   categoria: "Trapillo",
  //   precio: 1900,
  //   stock: 21,
  //   img:
  //     process.env.PUBLIC_URL + "/img/trapillo/combotrapillobienvenidabebe.jpg",
  // },
  // {
  //   id: "PM0001",
  //   nombre: "Manta de Apego Caballo",
  //   categoria: "Mantas de Apego",
  //   precio: 1600,
  //   stock: 4,
  //   img: process.env.PUBLIC_URL + "/img/mantasdeapego/mantadeapegocaballo1.jpg",
  // },
  // {
  //   id: "PB0001",
  //   nombre: "Mordedor Montessori",
  //   categoria: "Accesorios Bebé",
  //   precio: 2300,
  //   stock: 27,
  //   img:
  //     process.env.PUBLIC_URL +
  //     "/img/accesoriosjuguetesbebe/mordedormontessori.jpg",
  // },
];

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
