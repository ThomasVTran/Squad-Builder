import GameCard from "../components/GameCard/index.jsx"
import SquadForm from "../components/SquadForm/index.jsx"
import SquadList from "../components/SquadList/index.jsx"

export default function Game() {

    return (
        <main>
            <GameCard/>
            <SquadForm/>
            <SquadList/>
        </main>
    )
}