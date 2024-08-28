let colores = [ 'royalblue', 'blue', 'black', 'tomato', 'slateblue', 'teal', 'orange', 'violet', 'green', 'salmon'];

for(let i=0; i<colores.length; i++){
    let color = colores[i];
    console.log(color);
    document.querySelector('.galeria').innerHTML += `<span style="background-color :${color};"> ${color} </span>`;
}