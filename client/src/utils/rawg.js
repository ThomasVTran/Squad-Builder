const gameSearch = (game) => fetch(`https://api.rawg.io/api/games?key=8adfd634215b467ab9a401e778005ff2&search=${game}`)

export default gameSearch;