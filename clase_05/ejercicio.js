const obtenerDias = (siglas) =>{
    /*
        DW: Ma, Ju, Vi
        DM: Lu, Mi, Vi
        DG: Mi, Ju, Vi  
    */
    if( siglas == 'dw'){
        return 'DW: Ma, Ju, Vi';
    } else if ( siglas == 'dm'){
        return 'DM: Lu, Mi, Vi';
    } else if ( siglas == 'dg'){
        return 'DG: Mi, Ju, Vi'
    } else {
        return 'Siglas invalidas'; // 
    }

}
// Primera función que se ejecuta
const mostrarDias = () => {
    let siglas = prompt('Ingrese las siglas: dw, dm, dg');
    let texto = obtenerDias(siglas);
    console.info(texto);
}