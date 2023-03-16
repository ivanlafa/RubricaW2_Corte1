import { loadData } from "./loadData"


export const createItem = ( item = {} ) => {
  const data = loadData();

  item.id = data[data.length - 1].id + 1;
  item.checked = false;

  data.push(item);

  localStorage.setItem( 'deportes', JSON.stringify(data) );

  alert('Nuevo deporte agregado con éxito');
}






