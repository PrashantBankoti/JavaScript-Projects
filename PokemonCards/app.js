// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i=1;i<=151;i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText=`#${i}`
    const newImg = document.createElement('img');
    newImg.src=`${imgLink}${i}.png`;
    newImg.classList.add('card')
    pokemon.append(newImg);
    pokemon.append(label);
    container.append(pokemon)
}

const h1 = document.querySelector('h1');
h1.classList.add("heading")


