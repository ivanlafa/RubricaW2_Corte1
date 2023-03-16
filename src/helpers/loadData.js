const deportes = [
    { id: 1,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg",
      titulo: "Ajedrez",
      descripcion: "Juego de estrategia para dos jugadores",
      equipo: "Marshall Chess Club de Nueva York",
      url: "https://www.marshallchessclub.org/",
      categoria: "Deportes de mesa",
      checked: false
    },
    { id: 2,
      imgUrl: "https://okdiario.com/img/2018/06/04/jugar-al-poker.jpg",
      titulo: "Póker",
      descripcion: "Juego de cartas de apuestas",
      equipo: "King's Casino de Rozvadov",
      url: "https://kings-resort.com/index.php/poker-en.html",
      categoria: "Deportes de mesa",
      checked: false
    },
    { id: 3,
      imgUrl: "https://www.wikihow.com/images_en/thumb/6/65/Win-at-Checkers-Step-12-Version-3.jpg/v4-1200px-Win-at-Checkers-Step-12-Version-3.jpg",
      titulo: "Damas",
      descripcion: "Juego de mesa para dos jugadores",
      equipo: "Federazione Italiana Gioco della Dama",
      url: "http://www.federdama.it/",
      categoria: "Deportes de mesa",
      checked: false
    },
    { id: 4,
      imgUrl: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/03/15/16788786361444.jpg",
      titulo: "Formula 1",
      descripcion: "Competición de carreras de coches",
      equipo: "Mercedes-AMG Petronas Formula One Team",
      url: "https://www.mercedesamgf1.com/",
      categoria: "Deportes de motor",
      checked: false
    },
    { id: 5,
      imgUrl: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/10/carrera-motogp-estados-unidos-2021-2490811.jpg?tf=3840x",
      titulo: "MotoGP",
      descripcion: "Campeonato de carreras de motocicletas",
      equipo: "Ducati Lenovo Team",
      url: "https://www.ducati.com/ww/en/home",
      categoria: "Deportes de motor",
      checked: false
    },
    { id: 6,
      imgUrl: "https://www.firestone.com.mx/content/dam/consumer/fst/la/mx/tips/otros/rally_b.jpg",
      titulo: "Rally",
      descripcion: "Competición de carreras en carretera",
      equipo: "Toyota Gazoo Racing WRT",
      url: "https://toyotagazooracing.com/wrc/",
      categoria: "Deportes de motor",
      checked: false
    },
    { id: 7,
      imgUrl: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/03/14/16788111953337.jpg",
      titulo: "Fútbol",
      descripcion: "Deporte en equipo con una pelota",
      equipo: "Fútbol Club Barcelona",
      url: "https://www.fcbarcelona.com/en/",
      categoria: "Deportes por equipos",
      checked: false
    },
    { id: 8,
      imgUrl: "https://news.microsoft.com/wp-content/uploads/prod/sites/41/2022/09/GettyImages-1407922361-3.jpg",
      titulo: "Baloncesto",
      descripcion: "Deporte en equipo con una pelota en una cancha",
      equipo: "Los Angeles Lakers",
      url: "https://www.nba.com/lakers",
      categoria: "Deportes por equipos",
      checked: false
    },
    { id: 9,
      imgUrl: "https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/v1662139591/primary/bvihcneqdxq9nhyost0t",
      titulo: "Voleibol",
      descripcion: "Deporte en equipo con una pelota en una red",
      equipo: "Sada Cruzeiro Vôlei",
      url: "https://www.sadacruzeiro.com.br/",
      categoria: "Deportes por equipos",
      checked: false
    }
];

const deportesJSON = JSON.stringify(deportes);
  

export const loadData = () => {
    if ( localStorage.getItem('deportes') ) {
        return JSON.parse(localStorage.getItem('deportes'));
    }

    localStorage.setItem('deportes', deportesJSON);
    return JSON.parse(deportesJSON);
};

export const changeData = ( id, value ) => {
  const arr = loadData();

  arr[arr.findIndex( e => e.id === id )].checked = value;
  localStorage.setItem('deportes', JSON.stringify(arr));
}

export const getCategorias = () => {
  const arr = loadData();

  return [...new Set( arr.map( e => e.categoria ) )];
}

export const getCategory = ( flag = "" ) => {
  const arr = loadData();

  return flag === "" ? loadData() : arr.filter( e => e.categoria === flag );
}
