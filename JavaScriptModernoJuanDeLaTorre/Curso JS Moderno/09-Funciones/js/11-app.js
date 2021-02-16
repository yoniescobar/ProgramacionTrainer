const aprendiendo = function(tecnologia='LP no defenido', tecnologia2){
    console.log(`Aprendiendo  ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('Javascript','Angular');

const aprendiendo2 =(tecnologia,tecnologia2)=> `Aprendiendo  ${tecnologia} y ${tecnologia2}`;  //solo si es un parametro

console.log(aprendiendo2('Javascript','NodJs'));