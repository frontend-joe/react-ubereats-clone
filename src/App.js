import Filters from "./components/Filters";
import Search from "./components/Search";
import Cuisines from "./components/Cuisines";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <div className="App">
      <Filters />
      <Search />
      <Cuisines />
      <Restaurants />
    </div>
  );
}

export default App;
