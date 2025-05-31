const eventos = [
  {
    key: 1,
    imagen: "https://static.ptocdn.net/images/eventos/wal243_calugalistado.jpg",
    nombre: "Los Bunkers - Gira Acustica",
    productora: "La Oreja",
    recinto: "Movistar Arena",
    ciudad: "Santiago",
    fecha: "8 de Noviembre 2025",
    enlace: "https://www.puntoticket.com/los-bunkers",
    categoria: "conciertos",
  },
  {
    key: 2,
    imagen:
      "https://cdn.getcrowder.com/images/60149882-50c9-4abf-bc97-6ee13b4b1e33-landing-limpio-1920x720-web-linkinpark.jpg",
    nombre: "Linkin Park",
    productora: "DG Medios",
    recinto: "Estadio Nacional",
    ciudad: "Santiago",
    fecha: "2 de Noviembre 2025",
    enlace:
      "https://www.ticketmaster.cl/event/linkin-park-from-zero-world-tour-chile-2025",
    categoria: "conciertos",
  },
  {
    key: 3,
    imagen:
      "https://administrador.ventas-serviticket.cl/img/recinto/1744912888.jpg",
    nombre: "González Massú On Tour 2025",
    productora: "MBRAND Producciones",
    recinto: "Estadio Sokol",
    ciudad: "Antofagasta",
    fecha: "2 de Noviembre 2025",
    enlace:
      "https://compra.ventas-serviticket.cl/eventos/gonzalez-massu-on-tour-2025-antofagasta",
    categoria: "deportes",
  },
];

let errorPeticion = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!errorPeticion) {
        resolve(eventos);
      } else {
        reject("Hubo un error, intente más tarde");
      }
    }, 3000);
  });
};
export const getOneProduct = (idEvento) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!errorPeticion) {
        let evento = eventos.find((item) => item.idEvento === Number(idEvento));
        resolve(evento);
      } else {
        reject("Hubo un error, intente más tarde");
      }
    }, 3000);
  });
};
