let html = '';
let colores = [ 'royalblue', 'blue', 'black', 'tomato', 'slateblue', 'teal', 'orange', 'violet', 'green', 'salmon'];


for(let i=0; i<colores.length; i++){
    let color = colores[i];
    //console.log(color);
    html += `<span style="background-color :${color};"> ${color} </span>`;
}

document.querySelector('.galeria').innerHTML = html; 
