import "./App.css";
import Personcard from "./Personcard";

function App() {
  return (
    <main className="App">
      <Personcard
        firstName={"Bob"}
        lastName={"Marley"}
        age={37}
        hairColor={"Brown"}
      />
      <Personcard
        firstName={"Freddy"}
        lastName={"Kruger"}
        age={65}
        hairColor={"Bald"}
      />
    </main>
  );
}

export default App;
