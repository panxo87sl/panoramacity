const eventos = [
  {
    id: "1",
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
    id: "2",
    imagen:
      "https://ticketing-uploads-1.ticketplus.global/images/shares/91b1a55a48201d30066e-ambas-1200x630.png",
    nombre: "Hans Zimmer - Orquesta Sinfónica",
    productora: "Corporación Cultural Antofagasta",
    recinto: "Teatro Municipal",
    ciudad: "Antofagasta",
    fecha: "9 de Agosto 2025",
    enlace:
      "https://ticketplus.cl/events/hans-zimmer-orquesta-sinfonica-de-antofagasta",
    categoria: "conciertos",
  },
  {
    id: "3",
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
  {
    id: "4",
    imagen:
      "https://ticketing-uploads-1.ticketplus.global/images/shares/2612e48561b612ad21a6-MM_-_Lucybell_1200x600.jpg",
    nombre: "LUCYBELL ECOS Tour Final",
    productora: "Mambo MACHINE",
    recinto: "Rock & Soccer",
    ciudad: "Antofagasta",
    fecha: "5 de Julio 2025",
    enlace: "https://ticketplus.cl/events/lucybell-en-rock-soccer-antofagasta",
    categoria: "conciertos",
  },
  {
    id: "5",
    imagen:
      "https://ticketing-uploads-1.ticketplus.global/images/shares/f967d870aad0a09eddca-c8bbdc0d-6014-43a0-9adc-67e63f7d9d95.jpeg",
    nombre: "Anime Sinfónico “Especial Ghibli”",
    productora: "Orquesta Académica Antofagasta",
    recinto: "Liceo Experimental Artístico",
    ciudad: "Antofagasta",
    fecha: "1 de Junio 2025",
    enlace: "https://ticketplus.cl/events/anime-sinfonico-especial-ghibli",
    categoria: "conciertos",
  },
  {
    id: "6",
    imagen:
      "https://static.enjoy.cl//bibliotecamedios//espectaculos//img_espectaculos_destacados_7656_20250528_131226.png",
    nombre: 'RODRIGO "GUATÓN" SALINAS',
    productora: "Casino Enjoy",
    recinto: "Casino Enjoy",
    ciudad: "Antofagasta",
    fecha: "6 de Junio 2025",
    enlace:
      "https://www.enjoy.cl/#/antofagasta/espectaculos/4605/rodrigo-%22guaton%22-salinas",
    categoria: "comedia",
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
    }, 1500);
  });
};
export const getOneProduct = (idEvento) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!errorPeticion) {
        let evento = eventos.find((item) => item.id === idEvento);
        resolve(evento);
      } else {
        reject("Hubo un error, intente más tarde");
      }
    }, 1500);
  });
};
