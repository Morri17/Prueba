import campera from "./assets/Imagenes/campera.webp";
import campera2 from "./assets/Imagenes/campera2.webp";
import campera3 from "./assets/Imagenes/campera3.webp";
import campera4 from "./assets/Imagenes/campera4.jpeg";
import buzo from "./assets/Imagenes/buzo.jpg";
import buzo2 from "./assets/Imagenes/buzo2.jpg";
import buzo3 from "./assets/Imagenes/buzo3.jpg";
import buzo4 from "./assets/Imagenes/buzo4.jpeg";
import pantalones from "./assets/Imagenes/pantalones.webp";
import pantalones2 from "./assets/Imagenes/pantalon2.avif";
import pantalones3 from "./assets/Imagenes/pantalon3.jpg";
import pantalones4 from "./assets/Imagenes/pantalon4.webp";
import remera from "./assets/Imagenes/remera.jpeg";
import remera2 from "./assets/Imagenes/remera2.jpg";
import remera3 from "./assets/Imagenes/remera3.jpg";
import remera4 from "./assets/Imagenes/remera4.jpeg";

const misProductos = [
  {
    id: "1",
    nombre: "Camperas",
    precio: 5000,
    img: campera,
    categoria: "camperas",
    stock: 10,
  },
  {
    id: "2",
    nombre: "Camperas",
    precio: 200,
    img: campera2,
    categoria: "camperas",
    stock: 10,
  },
  {
    id: "3",
    nombre: "Camperas",
    precio: 180,
    img: campera3,
    categoria: "camperas",
    stock: 10,
  },
  {
    id: "4",
    nombre: "Camperas",
    precio: 900,
    img: campera4,
    categoria: "camperas",
    stock: 10,
  },

  {
    id: "5",
    nombre: "Remeras",
    precio: 500,
    img: remera,
    categoria: "remeras",
    stock: 10,
  },
  {
    id: "6",
    nombre: "Remeras",
    precio: 200,
    img: remera2,
    categoria: "remeras",
    stock: 10,
  },
  {
    id: "7",
    nombre: "Remeras",
    precio: 180,
    img: remera3,
    categoria: "remeras",
    stock: 10,
  },
  {
    id: "8",
    nombre: "Remeras",
    precio: 900,
    img: remera4,
    categoria: "remeras",
    stock: 10,
  },

  { id: "9", nombre: "Buzos", precio: 500, img: buzo, categoria: "buzos", stock: 10},
  { id: "10", nombre: "Buzos", precio: 200, img: buzo2, categoria: "buzos", stock: 10 },
  { id: "11", nombre: "Buzos", precio: 180, img: buzo3, categoria: "buzos", stock: 10 },
  { id: "12", nombre: "Buzos", precio: 900, img: buzo4, categoria: "buzos", stock: 10 },

  {
    id: "13",
    nombre: "Pantalones",
    precio: 500,
    img: pantalones4,
    categoria: "pantalones",
    stock: 10,
  },
  {
    id: "14",
    nombre: "Pantalones",
    precio: 200,
    img: pantalones3,
    categoria: "pantalones",
    stock: 10,
  },
  {
    id: "15",
    nombre: "Pantalones",
    precio: 180,
    img: pantalones2,
    categoria: "pantalones",
    stock: 10,
  },
  {
    id: "16",
    nombre: "Pantalones",
    precio: 900,
    img: pantalones,
    categoria: "pantalones",
    stock: 10,
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(misProductos));
  }, 100);
};

// creamos una nueva funcion simiar a la anterior pero que nos retorne un solo item.

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCaterogia = misProductos.filter(
        (prod) => prod.categoria === idCategoria
      );
      resolve(productosCaterogia);
    }, 100);
  });
};
