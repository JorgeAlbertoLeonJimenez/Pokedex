
const alias = document.getElementById("nameP");
const B = document.getElementById('next');
let i = 1; // Empieza desde 1 para obtener el primer Pokémon
const cate = document.getElementById('category');
const num = document.getElementById('numP');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const spAttack = document.getElementById('sp-attack');
const photo = document.getElementById('photo');
const fondo = document.getElementById('container')

function nextPokemon() {
  const api = `https://pokeapi.co/api/v2/pokemon/${i}`;

  fetch(api)
    .then(response => response.json())
    .then(data => {
      i++;
      alias.innerText = data.name; 
      cate.innerText=data.types.map(typeObj => typeObj.type.name);
      
      hp.innerText=data.stats.find(stat => stat.stat.name === 'hp').base_stat;
      attack.innerText =data.stats.find(stat => stat.stat.name === 'attack').base_stat;
      defense.innerText = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
      spAttack.innerText = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
      photo.src = data.sprites.front_default;
      
      switch (cate.innerText) {
        case 'fire':
          cate.style.color = 'red';
          break
        case 'water':
          cate.style.color = 'blue';
          

          break;
        case 'bug':
          cate.style.color = 'green';
          break;
        case 'electric':
            cate.style.color = 'yellow'; 
            break;
        case 'normal':
          cate.style.color = 'orange';  
          break
        
        case 'poison':
          cate.style.color = 'vaiolet';  
          break
        }
      // Incrementa i para el siguiente Pokémon
      
      
    })
    .then (data => {
      num.innerText = `#${i}`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

B.onclick = nextPokemon; // Asigna la función nextPokemon al evento onclick del botón B
