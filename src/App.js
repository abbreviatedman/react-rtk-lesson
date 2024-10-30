import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
