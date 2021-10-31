const button = document.querySelector('#btn');
const h1 = document.querySelector("#heading");
button.addEventListener('click',function(){
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerHTML=newColor;
})

const makeRandColor = ()=>{
    const red = Math.floor(Math.random()*255 + 1);
    const green = Math.floor(Math.random()*255 + 1);
    const blue = Math.floor(Math.random()*255 + 1);
    return `rgb(${red},${green},${blue})`;
}




