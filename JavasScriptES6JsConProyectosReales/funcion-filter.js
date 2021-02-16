const arrayHeroes =[
    "Iron Man",
    "Thor",
    "Capitan America",
    "Spidreman",
    "Deadpool"
];

const resultHeroesFilter = arrayHeroes.filter((heroe)=>{
    return heroe.length == 8;
})

// console.log(resultHeroesFilter);

const arrayList=["Thor",77,88,3,6.9,true,"Deadpool",false];

const resultArrayList = arrayList.filter((elemento)=>{
    return typeof elemento==="string" //tipo de dato
});
console.log(resultArrayList);