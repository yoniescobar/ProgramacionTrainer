let nombre = "Hulk";

switch (nombre) {
    case "Hulk":
        
        hulkfn();
        break;
    case "spiderMan":
        console.log("Estamos en el caso  SpiderMan");
        break;
    case "Iron Man":
        console.log("Estamos en el caso  Iron Man");
        break;
    default:
        console.log("Caso desconocido...");
        break;
}

function hulkfn() {
    console.log("Estamos en el caso de Hulk");
    console.log("Hulk es muy fuerte");
}