import "./App.css";
import { Auth } from "./pages/Auth";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { Route } from "./router/route";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/Blog">
        <Blog />
      </Route>
    </div>
  );
}

export default App;
