import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../../utils/mutations";



export default function GameCards(props) {
    const [addGame, {error, loading, data}] = useMutation(ADD_GAME);
    
    const addedGame = async (data) => {
        console.log(data);
        try {
           await addGame({variables: { 
                name: data.name,
                image: data.background_image,
                description: data.description_raw
             }});
        } catch (error) {
            console.log(error);
        }
    }

    const addNewGame = async (gameId) => {
        console.log(gameId);
        const req = await fetch(`https://api.rawg.io/api/games/${gameId}?key=8adfd634215b467ab9a401e778005ff2`)
        const res = await req.json()

        console.log(res);
        addedGame(res)
    }
    

    return (
        <section>
        {props.results.map((result)=>( 
            
        <section key={result}>
            <h2>{result.name}</h2>
            <img src={result.background_image}/>
            <p></p>
        <button onClick={()=> {addNewGame(result.id)}}>

        </button>
        </section>
        ))}
        </section>
    )
}