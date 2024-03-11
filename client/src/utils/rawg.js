const key = `8adfd634215b467ab9a401e778005ff2`

function gameSearch(game) {

const rawgSearch = `https://api.rawg.io/api/games?key=${key}&search=${game}`

fetch(rawgSearch)
.then((res) => res.json())
.then((data)=>console.log(data))
}

gameSearch()