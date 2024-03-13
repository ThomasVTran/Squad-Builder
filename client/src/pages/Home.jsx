import CurrentGames from "../components/CurrentGames/index";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <CurrentGames />
    </main>
  );
}
