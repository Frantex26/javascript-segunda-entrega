
const games = [
    {
        id: 1,
        name: "Dark Souls",
        price: "US$ 25"
    },
    {
        id: 2,
        name: "Demon Souls",
        price: "US$ 20"
    },
    {
        id: 3,
        name: "Bloodborne",
        price: "US$ 30" 
    },
    {
        id: 4,
        name: "Sekiro",
        price: "US$ 22"
    },
    {
        id: 5,
        name: "Elden Ring",
        price: "US$ 50"
    },
];

function game(id, name, price){
    this.id=id;
    this.name=name;
    this.price=price;
}

console.log(games);


const newgame= new game(6,"Pack SoulsLike", "US$ 125");

console.log(newgame);


function load_game(arr, valor){
    arr.push(valor);
}

load_game(games, newgame);

console.log(games);


function choose_game(arr, filtro){
    const choose= arr.filter((game)=>{
        return game.name.includes(filtro);
    })

    return choose;
}


function choose_price(arr, filtro){
    return arr.filter((game)=>{
        return game.price >= filtro;
    })
}


let dato_game=prompt("Write the name of the game to search");

console.log(choose_game(games, dato_game));

let dato_price=prompt("Choose your price");

console.log(choose_price(games, dato_price));
