# Rami Tejidos

Este proyecto esta basado en el emprendimiento de mi hermana, llamado Rami.

El proyecto comenzó con la idea de trabajar desde casa para cuidar de su hija y mostrar al mundo el legado que mis abuelas y mi mamá pusieron en sus manos a traves del tejido.

Yo aporto mi pequeño grano de arena al asunto, y con este proyecto busco digitalizar su catalogo como primer MVP.

# Demo

<img src="/public/rami.gif" />

# Navegación del proyecto

El proyecto esta estructurado con la siguientes secciones, renderizando componentes especificos en las siguientes rutas:

- **Sección Home**

  - **Ruta**: "/"
  - **Componente**: ItemListContainer
    - **Componentes**: ItemList
      - **Componentes**: Item

- **Sección Categoría**

  - **Ruta**: "/categoria/:idCategoria"
  - **Componente Contenedor**: ItemListContainer
    - **Componentes**: ItemList
      - **Componentes**: Item

- **Sección Detalle de Producto**

  - **Ruta**: "/detail/:idProducto"
  - **Componente Contenedor**: ItemDetailContainer
    - **Componentes**: ItemDetail
      - **Componentes**: Counter
      - **Componentes**: ButtonPrimario

- **Sección Carrito de Compras**

  - **Ruta**: "/cart/"
  - **Componente**: ItemCartContainer
    - **Componentes**: ButtonPrimario
    - **Componentes**: ItemCartList
      - **Componentes**: ItemCart
        - **Componentes**: ButtonPrimario

- **Sección Checkout**
  - **Ruta**: "/checkout/"
  - **Componente**: CheckoutContainer
    - **Componentes**: ButtonPrimario

## Construido con:

- [Create-React-App](https://create-react-app.dev)
- [Firebase](https://firebase.com)
- [SweetAlert2](https://sweetalert2.github.io)

## Objetos Firebase

Se utilizaron los siguientes dos tipos de Documentos:

- **Ordenes**

  - Comprador
    - direccion
    - email
    - nombre
    - telefono
  - Items (Array de Productos)
  - Total

- **Productos**
  - categoria
  - img (hosteada en Imgur)
  - nombre
  - precio
  - stock

## Instalación

#### Clonar proyecto

En VS, abrir una terminal y luego tipear:

```bash
  $ git clone https://github.com/sodarokr/rami.lanita
```

#### Instalar dependencias

Acceder al directorio con `cd` y tipear:

```bash
  $ npm install
```

#### Ejectuar el proyecto

Tipear el comando:

```bash
  $ npm start
```

## Variables de Entorno

Ver [`.env.example`](https://github.com/sodarokr/rami.lanita/blob/main/.env.example)

## Contribuciones

Tus contribuciones son siempre bienvenidas!

Ellas son las que hacen de la comunidad open source un inmejorable lugar para aprender, inspirarse y crear.

Si tenes una sugerencia que podria mejorar este proyecto, por favor hace fork del repo y crea una pull request.

No te olvides de darle una estrella al proyecto!
Muchas gracias!

1- Hacé Fork del Proyecto

2- Crea tu Branch de la feature (git checkout -b feature/TremendaFeature)

3- Commitea tus cambios (git commit -m 'añadí TremendaFeature')

4- Pushea la Branch (git push origin feature/TremendaFeature)

5- Abrí una Pull Request

## 🚀 Acerca de mi

Soy un Ingeniero en Sistemas ya cansado de trabajar tantos años como Analista Funcional, Product Owner y Project Manager, buscando encauzar mi ansiedad y obsesion por estudiar en ser un Full Stack Dev.

Soy compositor y músico autodidacta tambien! 🎼🎵🎸🎙
