$(document).ready(function(){

  const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];
  // creo un array di colori
  const colors = [
    "blue",
    "orange",
    "purple"
  ];
  // creo un array vuoto che si andrà a popolare con i tre tipi, i quali avranno l'indice corrispettivo del colore dell'array di colori
  const iconTypes = getTypes(icons);
  console.log(iconTypes);

  const iconsColor = icons.map((element) => {
    const indexType = iconTypes.indexOf(element.type);
    console.log(indexType);
    console.log(colors[indexType]);

    return {
      ...element,
      color: colors[indexType]
    }

  });
  console.log(iconsColor);

  const container = $(".icons");

  printIcons(iconsColor,container);
});

// FUNCTIONS*********

function printIcons(array,container){
  array.forEach((element) => {

    const {name, family, prefix, type, color} = element;
    container.append(`
      <div class="icon">
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>
    `)
  });

}

function getTypes(array){
  const types = [];

  array.forEach((element, index) => {
    if (!types.includes(element.type)){
      types.push(element.type);
    }
  });

  return types;
}


























// sdafgvsaf
