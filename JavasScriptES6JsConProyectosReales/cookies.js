
const crearCookie =(clave,valor)=>{
    const valorEscape = escape(valor);
    let mesSiguiente = new Date();
    mesSiguiente.setMonth(mesSiguiente.getMonth()+1);
    

    document.cookie = `${clave}=${valorEscape};expires=${mesSiguiente}`;
}

const borrarCookie = clave =>{
    let mesAnterior = new Date();
    mesAnterior.setHours(mesAnterior.getMonth()-1);
    document.cookie = `${clave}=Y;expires=${mesAnterior};`;
}

const obtenerCookies = ()=>{
   const cookies = document.cookie;
   const arrayCookies = cookies.split('; ');
   let objetoCookies ={};

   arrayCookies.forEach(cookie=>{
        const cookieArray = cookie.split('=');
        const keyItem = cookieArray[0];
        objetoCookies[keyItem] = unescape(cookieArray[1]);
   });
   return objetoCookies;
};

crearCookie("marcaCoche","Audi");
crearCookie("potenciaCoche","175cw");

const cookies = obtenerCookies();
console.log(cookies.potenciaCoche);
// borrarCookie("potenciaCoche");

