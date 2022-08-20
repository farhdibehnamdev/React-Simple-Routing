import { Auth } from "./pages/Auth";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Auth />
      <Blog />
      <Home />
    </div>
  );
}

export default App;
